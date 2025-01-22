import { env, exit } from 'node:process';
import { TCPConnection } from '../src/controller/tcp_connection.js';
import { after, before, describe, it } from 'node:test';
import { RemoteDevice } from '../src/controller/remote_device.js';
import assert, { equal, deepEqual } from 'node:assert';
import { OcaGain } from '../src/controller/ControlClasses.js';
import { delay } from './delay.js';
import { PropertyObserver } from '../src/controller/PropertyObserver.js';

const AES70_TEST_DEVICE_ALL_CLASSES = env.AES70_TEST_DEVICE_ALL_CLASSES;

if (!AES70_TEST_DEVICE_ALL_CLASSES) {
  exit(0);
}

const [host, portStr] = AES70_TEST_DEVICE_ALL_CLASSES.split(':');

const port = parseInt(portStr);

describe('PropertyObserver', async () => {
  let device, objectTree;

  before(async () => {
    const connection = await TCPConnection.connect({
      host,
      port,
    });
    device = new RemoteDevice(connection);

    objectTree = await device.get_role_map();
    assert(objectTree instanceof Map);
  });

  after(() => {
    if (device) device.close();
  });

  it('OcaGain/ClassId', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    const observations = [];
    const observer = new PropertyObserver(gain, 'ClassID');
    const unsub = observer.subscribeValue((ok, value) => {
      observations.push(value);
    });

    equal(observations.length, 1);
    equal(observations[0], OcaGain.ClassID);

    unsub();
  });

  it('OcaGain/Gain', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    const observer = new PropertyObserver(gain, 'Gain');

    const gainObservations = [];
    const minObservations = [];

    const [current, min, max] = await gain.GetGain();

    await gain.SetGain(max);

    const unsub1 = observer.subscribeCurrent((ok, value) => {
      gainObservations.push({ ok, value });
    });

    const unsub2 = observer.subscribeMin((ok, value) => {
      minObservations.push({ ok, value });
    });

    await gain.GetClassIdentification();

    equal(gainObservations.length, 1);
    assert(gainObservations[0].ok);
    equal(gainObservations[0].value, max);
    equal(minObservations.length, 1);
    assert(minObservations[0].ok);
    equal(minObservations[0].value, min);

    // Set to min
    await gain.SetGain(min);
    await delay(10);

    equal(gainObservations.length, 2);
    assert(gainObservations[1].ok);
    equal(gainObservations[1].value, min);
    equal(minObservations.length, 1);

    await gain.SetGain(max);
    await delay(10);

    equal(gainObservations.length, 3);
    assert(gainObservations[2].ok);
    equal(gainObservations[2].value, max);
    equal(minObservations.length, 1);

    unsub1();
    unsub2();
  });

  it('OcaGain/Role', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    const observations = [];
    const observer = new PropertyObserver(gain, 'Role');

    observer.subscribe((ok, value) => {
      observations.push({ ok, value });
    });

    await gain.GetClassIdentification();

    equal(observations.length, 1);
    assert(observations[0].ok);
    equal(observations[0].value, 'MyGain');

    observer.subscribeMin((ok, value) => {
      observations.push({ ok, value });
    });

    equal(observations.length, 2);
    assert(!observations[1].ok);
    assert(observations[1].value instanceof Error);

    observer.dispose();
  });

  it('Caching keeps subscription', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    const observations = [];
    const observer = new PropertyObserver(gain, 'Role', true);

    let unsub = observer.subscribeValue((ok, value) => {
      observations.push({ ok, value });
    });

    equal(observations.length, 0);
    await gain.GetClassIdentification();
    equal(observations.length, 1);
    unsub();

    unsub = observer.subscribeValue((ok, value) => {
      observations.push({ ok, value });
    });
    equal(observations.length, 2);
    unsub();
  });

  it('Not caching clears old value', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    const observations = [];
    const observer = new PropertyObserver(gain, 'Role');

    let unsub = observer.subscribeValue((ok, value) => {
      observations.push({ ok, value });
    });

    equal(observations.length, 0);
    await gain.GetClassIdentification();
    equal(observations.length, 1);
    unsub();

    unsub = observer.subscribeValue((ok, value) => {
      observations.push({ ok, value });
    });
    equal(observations.length, 1);
    unsub();
  });

  it.only('OcaFilterPolynomial/A', async () => {
    const filter = objectTree.get('MyActuators/MyFilterPolynomial');

    if (!filter) {
      console.log('Skipping OcaFilterPolynomial test.');
      return;
    }

    filter.SetCoefficients([], []);

    const observations = [];
    const observer = new PropertyObserver(filter, 'A');
    let unsub = observer.subscribeValue((ok, value) => {
      observations.push({ ok, value });
    });
    await filter.GetClassIdentification();

    equal(observations.length, 1);
    assert(observations[0].ok);
    deepEqual(observations[0].value, []);

    await filter.SetCoefficients([1, 2, 3], [4, 5, 6]);
    await filter.GetClassIdentification();
    equal(observations.length, 2);
    assert(observations[1].ok);
    deepEqual(observations[1].value, [1, 2, 3]);

    unsub();
  });
});

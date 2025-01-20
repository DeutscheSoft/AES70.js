import { env, exit } from 'node:process';
import { TCPConnection } from '../src/controller/tcp_connection.js';
import { after, before, describe, it } from 'node:test';
import { RemoteDevice } from '../src/controller/remote_device.js';
import assert, { equal } from 'node:assert';
import { OcaGain } from '../src/controller/ControlClasses.js';
import { observeProperty } from '../src/controller/observeProperty.js';
import { Arguments } from '../src/controller/arguments.js';
import { delay } from './delay.js';

const AES70_TEST_DEVICE_ALL_CLASSES = env.AES70_TEST_DEVICE_ALL_CLASSES;

if (!AES70_TEST_DEVICE_ALL_CLASSES) {
  exit(0);
}

const [host, portStr] = AES70_TEST_DEVICE_ALL_CLASSES.split(':');

const port = parseInt(portStr);

describe('observerProperty', async () => {
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
    const unsub = observeProperty(gain, 'ClassID', (ok, value) => {
      observations.push(value);
    });

    equal(observations.length, 1);
    equal(observations[0], OcaGain.ClassID);

    unsub();
  });

  it('OcaGain/Gain', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    assert(gain instanceof OcaGain);

    const observations = [];

    const [current, min, max] = await gain.GetGain();

    await gain.SetGain(max);

    const unsub = observeProperty(gain, 'Gain', (ok, value, changeIndex) => {
      observations.push({
        value,
        changeIndex,
      });
    });

    await gain.GetClassIdentification();

    equal(observations.length, 1);
    assert(observations[0].value instanceof Arguments);
    equal(observations[0].changeIndex, undefined);
    equal(observations[0].value.item(0), max);

    // Set to min
    await gain.SetGain(min);
    await delay(10);
    equal(observations.length, 2);
    equal(observations[1].changeIndex, 0);
    equal(observations[1].value.item(0), min);

    await gain.SetGain(max);
    await delay(10);
    equal(observations.length, 3);
    equal(observations[2].changeIndex, 0);
    equal(observations[2].value.item(0), max);
    unsub();
  });

  it('OcaGain/Role', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    const observations = [];
    const unsub = observeProperty(gain, 'Role', (ok, value, changeIndex) => {
      observations.push({
        value,
        changeIndex,
      });
    });

    await gain.GetClassIdentification();

    equal(observations.length, 1);
    equal(observations[0].value, 'MyGain');
    equal(observations[0].changeIndex, undefined);

    unsub();
  });
});

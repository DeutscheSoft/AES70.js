import { TCPConnection } from '../src/controller/tcp_connection.js';
import { after, before, describe, it } from 'node:test';
import { RemoteDevice } from '../src/controller/remote_device.js';
import assert, { equal } from 'node:assert';
import { OcaGain } from '../src/controller/ControlClasses.js';
import { observeProperty } from '../src/controller/observeProperty.js';
import { Arguments } from '../src/controller/arguments.js';
import { delay } from './delay.js';
import { allClassesTarget } from './all_classes_target.js';

describe('observeProperty', { skip: !allClassesTarget }, async () => {
  let device, objectTree;

  const connect = async () => {
    const connection = await TCPConnection.connect({
      ...allClassesTarget,
    });
    const device = new RemoteDevice(connection);

    const objectTree = await device.get_role_map();

    return { connection, device, objectTree };
  };

  before(async () => {
    const tmp = await connect();
    device = tmp.device;
    objectTree = tmp.objectTree;
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

  it('OcaGain/Gain unsubscribe subscribe', async () => {
    const gain = objectTree.get('MyActuators/MyGain');
    assert(gain instanceof OcaGain);

    const observations = [];

    const [current, min, max] = await gain.GetGain();

    await gain.SetGain(max);

    let unsub;

    for (let i = 0; i < 10; i++) {
      if (unsub) unsub();
      unsub = observeProperty(gain, 'Gain', (ok, value, changeIndex) => {
        observations.push({
          value,
          changeIndex,
        });
      });
    }

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

  it('simultaneous subscriptions regression github#15', async () => {
    const { connection, objectTree } = await connect();
    const gain = objectTree.get('MyActuators/MyGain');
    const level = objectTree.get('MySensors/MyLevelSensor');

    let observedGainFailed = false;
    let observedLevelFailed = false;

    const unsub1 = observeProperty(gain, 'Gain', (ok, value, changeIndex) => {
      console.log(ok, value, changeIndex);
      if (!ok) observedGainFailed = true;
    });
    const unsub2 = observeProperty(
      level,
      'Reading',
      (ok, value, changeIndex) => {
        console.log(ok, value, changeIndex);
        if (!ok) observedLevelFailed = true;
      }
    );

    for (let i = 0; i < 10; i++) await gain.GetClassIdentification();

    unsub1();
    unsub2();

    connection.close();

    assert(!observedGainFailed);
    assert(!observedLevelFailed);
  });
});

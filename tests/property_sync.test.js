import { TCPConnection } from '../src/controller/tcp_connection.js';
import { after, before, describe, it } from 'node:test';
import { RemoteDevice } from '../src/controller/remote_device.js';
import assert, { equal } from 'node:assert';
import { OcaGain } from '../src/controller/ControlClasses.js';
import { observeProperty } from '../src/controller/observeProperty.js';
import { Arguments } from '../src/controller/arguments.js';
import { delay } from './delay.js';
import { allClassesTarget } from './all_classes_target.js';

describe('PropertySync', { skip: !allClassesTarget }, async () => {
  let device, objectTree;

  before(async () => {
    const connection = await TCPConnection.connect({
      ...allClassesTarget,
    });
    device = new RemoteDevice(connection);

    objectTree = await device.get_role_map();
    assert(objectTree instanceof Map);
  });

  after(() => {
    if (device) device.close();
  });

  it('sync()', async () => {
    const gain = objectTree.get('MyActuators/MyGain');

    const property_sync = gain.GetPropertySync();
    const [current, min, max] = await gain.GetGain();

    await gain.SetGain(min);
    await property_sync.sync();

    equal(property_sync.Gain, min);

    await gain.SetGain(max);
    await delay(10);

    equal(property_sync.Gain, max);

    property_sync.Dispose();
  });
});

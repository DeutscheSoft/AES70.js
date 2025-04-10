import { TCPConnection } from '../src/controller/tcp_connection.js';
import { RemoteDevice } from '../src/controller/remote_device.js';
import { OcaGain } from '../src/controller/ControlClasses.js';
import { after, before, describe, it } from 'node:test';
import assert, { rejects } from 'node:assert';
import { allClassesTarget } from './all_classes_target.js';

describe('RemoteError', { skip: !allClassesTarget }, () => {
  let device, objectTree;

  before(async () => {
    const connection = await TCPConnection.connect({
      ...allClassesTarget,
    });
    device = new RemoteDevice(connection);
    device.enable_stack_debug(true);

    objectTree = await device.get_role_map();
    assert(objectTree instanceof Map);
  });

  after(() => {
    if (device) device.close();
  });

  it('BadONo', async () => {
    const gain = new OcaGain(123456, device);

    await rejects(async () => gain.GetGain(), {
      name: 'aes70.RemoteError',
      message: 'Call failed with OcaStatus BadONo',
    });
  });
});

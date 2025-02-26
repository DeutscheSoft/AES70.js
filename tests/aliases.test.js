import { env, exit } from 'node:process';
import { TCPConnection } from '../src/controller/tcp_connection.js';
import { after, before, describe, it } from 'node:test';
import { RemoteDevice } from '../src/controller/remote_device.js';
import assert, { equal } from 'node:assert';

const AES70_TEST_DEVICE_ALL_CLASSES = env.AES70_TEST_DEVICE_ALL_CLASSES;

if (!AES70_TEST_DEVICE_ALL_CLASSES) {
  exit(0);
}

const [host, portStr] = AES70_TEST_DEVICE_ALL_CLASSES.split(':');

const port = parseInt(portStr);

describe('aliases', async () => {
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

  // This is an alias for WidthParameter
  it('OcaFilterParametric/Q', async () => {
    const gain = objectTree.get('MyActuators/MyFilterParametric');

    assert(gain.OnQChanged);

    const property = gain.get_properties().find_property('Q');

    assert(property);
    equal(property, gain.get_properties().find_property('WidthParameter'));
  });
});

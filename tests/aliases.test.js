import { TCPConnection } from '../src/controller/tcp_connection.js';
import { after, before, describe, it } from 'node:test';
import { RemoteDevice } from '../src/controller/remote_device.js';
import assert, { equal } from 'node:assert';
import { allClassesTarget } from './all_classes_target.js';

describe('aliases', { skip: !allClassesTarget }, async () => {
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

  // This is an alias for WidthParameter
  it('OcaFilterParametric/Q', async () => {
    const filter = objectTree.get('MyActuators/MyFilterParametric');

    assert(filter.OnQChanged);

    const property = filter.get_properties().find_property('Q');

    assert(property);
    equal(property, filter.get_properties().find_property('WidthParameter'));
  });

  it('OcaFilterParametric/InbandGain', async () => {
    const filter = objectTree.get('MyActuators/MyFilterParametric');

    assert(filter.OnInbandGainChanged);
    assert(filter.OnInBandGainChanged);

    const property = filter.get_properties().find_property('InbandGain');

    assert(property);
    assert(property.getter(filter));
    assert(property.setter(filter));
  });
});

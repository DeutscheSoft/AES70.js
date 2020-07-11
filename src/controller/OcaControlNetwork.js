import { make_control_class } from './Base.js';
import { OcaApplicationNetwork } from './OcaApplicationNetwork.js';
import { OcaNetworkControlProtocol } from '../OCP1/OcaNetworkControlProtocol.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * This was not documented in the OCA standard.
 * @extends RemoteControlClasses.OcaApplicationNetwork
 * @class OcaControlNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaControlNetwork = make_control_class(
  'OcaControlNetwork',
  3,
  '\u0001\u0004\u0001',
  1,
  OcaApplicationNetwork,
  [['GetControlProtocol', 3, 1, [], [OcaNetworkControlProtocol]]],
  [
    [
      'Protocol',
      [OcaNetworkControlProtocol],
      3,
      1,
      false,
      false,
      ['ControlProtocol'],
    ],
  ],
  []
);

/**
 * Gets the network's Protocol property. Return status indicates whether
 * the operation was successful.
 * @method RemoteControlClasses.OcaControlNetwork#GetControlProtocol
 * @returns {Promise<OcaNetworkControlProtocol>}
 */
/**
 * Type of control protocol used by the network (OCAnn). Read-only
 * property.
 * @member RemoteControlClasses.OcaControlNetwork#OnProtocolChanged {PropertyEvent<OcaNetworkControlProtocol>} - This event is emitted when Protocol changes in the remote object.
 */

import { OcaNetworkControlProtocol } from '../../OCP1/OcaNetworkControlProtocol.js';
import { make_control_class } from '../make_control_class.js';
import { OcaApplicationNetwork } from './OcaApplicationNetwork.js';

/**
 * @extends OcaApplicationNetwork
 * @class OcaControlNetwork
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
 * Gets the network's Protocol property. Return status indicates whether the
 * operation was successful.
 *
 * @method OcaControlNetwork#GetControlProtocol
 * @returns {Promise<OcaNetworkControlProtocol>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkControlProtocol`.
 */
/**
 * This event is emitted when the property ``Protocol`` changes in the remote object.
 * The property ``Protocol`` is described in the AES70 standard as follows.
 * Type of control protocol used by the network (OCAnn). Read-only property.
 *
 * @member {PropertyEvent<OcaNetworkControlProtocol>} OcaControlNetwork#OnProtocolChanged
 */
/**
 * An alias for OnProtocolChanged
 *
 * @member {PropertyEvent<OcaNetworkControlProtocol>} OcaControlNetwork#OnControlProtocolChanged
 */

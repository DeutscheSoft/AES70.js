import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Optional manager that collects all media transport and control networks to which the device belongs.
 *
 *  - Must be instantiated once in every device that has more than one network object. In this context, "network object" shall mean an instance of  **OcaNetwork** ,  **OcaStreamNetwork** ,  **OcaApplicationNetwork** , or any subclass of these classes.
 *
 *
 *  - If instantiated, must have object number 6.
 *
 * @extends OcaManager
 * @class OcaNetworkManager
 */
export const OcaNetworkManager = make_control_class(
  'OcaNetworkManager',
  3,
  '\u0001\u0003\u0006',
  2,
  OcaManager,
  [
    ['GetNetworks', 3, 1, [], [OcaList(OcaUint32)]],
    ['GetStreamNetworks', 3, 2, [], [OcaList(OcaUint32)]],
    ['GetControlNetworks', 3, 3, [], [OcaList(OcaUint32)]],
    ['GetMediaTransportNetworks', 3, 4, [], [OcaList(OcaUint32)]],
  ],
  [
    ['Networks', [OcaList(OcaUint32)], 3, 1, false, false, null],
    ['StreamNetworks', [OcaList(OcaUint32)], 3, 2, false, false, null],
    ['ControlNetworks', [OcaList(OcaUint32)], 3, 3, false, false, null],
    ['MediaTransportNetworks', [OcaList(OcaUint32)], 3, 4, false, false, null],
  ],
  []
);

/**
 * Gets the list of object numbers of  **OcaNetwork** instances in this device. Return value indicates whether the list was successfully retrieved.  **Deprecated as of OCA 1.2**
 *
 * @method OcaNetworkManager#GetNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of  **OcaStreamNetwork** instances in this device. Return value indicates whether list was successfully retrieved.  **Deprecated as of OCA 1.4.**
 *
 * @method OcaNetworkManager#GetStreamNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of  **OcaControlNetwork** instances in this device. Return value indicates whether list was successfully retrieved. Introduced in version 1.4.
 *
 * @method OcaNetworkManager#GetControlNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of  **OcaMediaTransportNetwork** instances in this device. Return value indicates whether list was successfully retrieved. Introduced in version 1.4.
 *
 * @method OcaNetworkManager#GetMediaTransportNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * This event is emitted when the property Networks changes in the remote object.
 * The property ``Networks`` is described in the AES70 standard as follows.
 * Object numbers of <b>OcaNetwork </b>objects, one for each network to
 * which this device belongs. <b><u>Deprecated as of OCA 1.2.</u></b>
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnNetworksChanged
 */
/**
 * This event is emitted when the property StreamNetworks changes in the remote object.
 * The property ``StreamNetworks`` is described in the AES70 standard as follows.
 * Object numbers of <b>OcaStreamNetwork </b>objects, one for each
 * network to which this device belongs. <b><u>Deprecated as of OCA
 * 1.4.</u></b>
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnStreamNetworksChanged
 */
/**
 * This event is emitted when the property ControlNetworks changes in the remote object.
 * The property ``ControlNetworks`` is described in the AES70 standard as follows.
 * Object numbers of <b>OcaControlNetwork </b>objects, one for each
 * control network to which this device belongs. Added in version 2.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnControlNetworksChanged
 */
/**
 * This event is emitted when the property MediaTransportNetworks changes in the remote object.
 * The property ``MediaTransportNetworks`` is described in the AES70 standard as follows.
 * Object numbers of <b>OcaMediaTransportNetwork </b>objects, one for
 * each media transport network to which this device belongs. Added in
 * version 2.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnMediaTransportNetworksChanged
 */

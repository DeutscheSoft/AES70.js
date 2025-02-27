import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Optional manager that collects all network interface and network application
 * objects to which the device belongs.
 *
 *  - Must be instantiated in every device that has more than one network
 *    object.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, must have object number 6.
 *
 *
 * @extends OcaManager
 * @class OcaNetworkManager
 */
export const OcaNetworkManager = make_control_class(
  'OcaNetworkManager',
  3,
  '\u0001\u0003\u0006',
  3,
  OcaManager,
  [
    ['GetNetworks', 3, 1, [], [OcaList(OcaUint32)]],
    ['GetStreamNetworks', 3, 2, [], [OcaList(OcaUint32)]],
    ['GetControlNetworks', 3, 3, [], [OcaList(OcaUint32)]],
    ['GetMediaTransportNetworks', 3, 4, [], [OcaList(OcaUint32)]],
    ['GetNetworkInterfaces', 3, 5, [], [OcaList(OcaUint32)]],
    ['GetNetworkApplications', 3, 6, [], [OcaList(OcaUint32)]],
  ],
  [
    ['Networks', [OcaList(OcaUint32)], 3, 1, false, false, null],
    ['StreamNetworks', [OcaList(OcaUint32)], 3, 2, false, false, null],
    ['ControlNetworks', [OcaList(OcaUint32)], 3, 3, false, false, null],
    ['MediaTransportNetworks', [OcaList(OcaUint32)], 3, 4, false, false, null],
    ['NetworkInterfaces', [OcaList(OcaUint32)], 3, 5, false, false, null],
    ['NetworkApplications', [OcaList(OcaUint32)], 3, 6, false, false, null],
  ],
  []
);

/**
 * Gets the list of object numbers of **OcaNetwork** instances in this device.
 * **Deprecated** in version 2 of this class.
 *
 * @method OcaNetworkManager#GetNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of **OcaStreamNetwork** objects in this
 * device. **Deprecated** in version 2 of this class.
 *
 * @method OcaNetworkManager#GetStreamNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of **OcaControlNetwork** objects in this
 * device. **Deprecated** in version 3 of this class.
 *
 * @method OcaNetworkManager#GetControlNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of **OcaMediaTransportNetwork** objects in
 * this device. **Deprecated** in version 3 of this class.
 *
 * @method OcaNetworkManager#GetMediaTransportNetworks
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of all objects that are instances of
 * **OcaNetworkInterface** or a subclass of **OcaNetworkInterface.** Added in
 * version 3 of this class.
 *
 * @method OcaNetworkManager#GetNetworkInterfaces
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Gets the list of object numbers of all objects that are instances of
 * **OcaNetworkApplication** or a subclass of **OcaNetworkApplication.** Added
 * in version 3 of this class.
 *
 * @method OcaNetworkManager#GetNetworkApplications
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * This event is emitted when the property ``Networks`` changes in the remote object.
 * The property ``Networks`` is described in the AES70 standard as follows.
 * Object numbers of **OcaNetwork** objects, one for each network to which this
 * device belongs. **Deprecated** in version 2 of this class.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnNetworksChanged
 */
/**
 * This event is emitted when the property ``StreamNetworks`` changes in the remote object.
 * The property ``StreamNetworks`` is described in the AES70 standard as follows.
 * Object numbers of **OcaStreamNetwork** objects, one for each network to which
 * this device belongs. **Deprecated** in version 3 of this class.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnStreamNetworksChanged
 */
/**
 * This event is emitted when the property ``ControlNetworks`` changes in the remote object.
 * The property ``ControlNetworks`` is described in the AES70 standard as follows.
 * Object numbers of **OcaControlNetwork** objects, one for each control network
 * to which this device belongs. Deprecated in version 3 of this class.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnControlNetworksChanged
 */
/**
 * This event is emitted when the property ``MediaTransportNetworks`` changes in the remote object.
 * The property ``MediaTransportNetworks`` is described in the AES70 standard as follows.
 * Object numbers of **OcaMediaTransportNetwork** objects, one for each media
 * transport network to which this device belongs. Deprecated in version 3 of
 * this class.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnMediaTransportNetworksChanged
 */
/**
 * This event is emitted when the property ``NetworkInterfaces`` changes in the remote object.
 * The property ``NetworkInterfaces`` is described in the AES70 standard as follows.
 * Object numbers of all objects in this device that are instances of
 * **OcaNetworkInterface** or a subclass of **OcaNetworkInterface**. Added in
 * version 3 of this class.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnNetworkInterfacesChanged
 */
/**
 * This event is emitted when the property ``NetworkApplications`` changes in the remote object.
 * The property ``NetworkApplications`` is described in the AES70 standard as follows.
 * Object numbers of all objects in this device that are instances of
 * **OcaNetworkApplication** or a subclass of **OcaNetworkApplication**. Added
 * in version 3 of this class.
 *
 * @member {PropertyEvent<number[]>} OcaNetworkManager#OnNetworkApplicationsChanged
 */

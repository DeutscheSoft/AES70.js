import { make_control_class } from '../Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Optional manager that collects all media transport and control
 * networks to which the device belongs. <ul> <li>Must be instantiated
 * once in every device that has more than one network object. In this
 * context, "network object" shall mean an instance of <b>OcaNetwork</b>,
 * <b>OcaStreamNetwork</b>, <b>OcaApplicationNetwork</b>, or any subclass
 * of these classes.</li> </ul> <ul> <li>If instantiated, must have
 * object number 6.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaNetworkManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the list of object numbers of <b>OcaNetwork </b>instances in this
 * device. Return value indicates whether the list was successfully
 * retrieved. <b><u>Deprecated as of OCA 1.2</u></b>
 * @method RemoteControlClasses.OcaNetworkManager#GetNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaStreamNetwork </b>instances
 * in this device. Return value indicates whether list was successfully
 * retrieved. <b><u>Deprecated as of OCA 1.4.</u></b>
 * @method RemoteControlClasses.OcaNetworkManager#GetStreamNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaControlNetwork </b>instances
 * in this device. Return value indicates whether list was successfully
 * retrieved. Introduced in version 1.4.
 * @method RemoteControlClasses.OcaNetworkManager#GetControlNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the list of object numbers of <b>OcaMediaTransportNetwork
 * </b>instances in this device. Return value indicates whether list was
 * successfully retrieved. Introduced in version 1.4.
 * @method RemoteControlClasses.OcaNetworkManager#GetMediaTransportNetworks
 * @returns {Promise<OcaList>}
 */
/**
 * Object numbers of <b>OcaNetwork </b>objects, one for each network to
 * which this device belongs. <b><u>Deprecated as of OCA 1.2.</u></b>
 * @member RemoteControlClasses.OcaNetworkManager#OnNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when Networks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaStreamNetwork </b>objects, one for each
 * network to which this device belongs. <b><u>Deprecated as of OCA
 * 1.4.</u></b>
 * @member RemoteControlClasses.OcaNetworkManager#OnStreamNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when StreamNetworks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaControlNetwork </b>objects, one for each
 * control network to which this device belongs. Added in version 2.
 * @member RemoteControlClasses.OcaNetworkManager#OnControlNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when ControlNetworks changes in the remote object.
 */
/**
 * Object numbers of <b>OcaMediaTransportNetwork </b>objects, one for
 * each media transport network to which this device belongs. Added in
 * version 2.
 * @member RemoteControlClasses.OcaNetworkManager#OnMediaTransportNetworksChanged {PropertyEvent<OcaList>} - This event is emitted when MediaTransportNetworks changes in the remote object.
 */

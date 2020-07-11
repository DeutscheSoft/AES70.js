import { make_control_class } from './Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaMap } from '../OCP1/OcaMap.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Optional manager that collects all media decoders/encoders (Codecs)
 * which the device owns. <ul> <li>Must be instantiated in every device
 * that implements more than one media encoding scheme and/or more than
 * one media decoding scheme. </li> </ul> <ul> <li>If instantiated,
 * object number must be 12.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaCodingManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaCodingManager = make_control_class(
  'OcaCodingManager',
  3,
  '\u0001\u0003\f',
  1,
  OcaManager,
  [
    ['GetAvailableEncodingSchemes', 3, 1, [], [OcaMap(OcaUint16, OcaString)]],
    ['GetAvailableDecodingSchemes', 3, 2, [], [OcaMap(OcaUint16, OcaString)]],
  ],
  [
    [
      'AvailableEncodingSchemes',
      [OcaMap(OcaUint16, OcaString)],
      3,
      1,
      false,
      false,
      null,
    ],
    [
      'AvailableDecodingSchemes',
      [OcaMap(OcaUint16, OcaString)],
      3,
      2,
      false,
      false,
      null,
    ],
  ],
  []
);

/**
 * Retrieves the map of available encoding schemes, indexed by scheme ID.
 * Return value indicates success of the retrieval.
 * @method RemoteControlClasses.OcaCodingManager#GetAvailableEncodingSchemes
 * @returns {Promise<OcaMap>}
 */
/**
 * Retrieves the map of available decoding schemes, indexed by scheme ID.
 * Return value indicates success of the retrieval.
 * @method RemoteControlClasses.OcaCodingManager#GetAvailableDecodingSchemes
 * @returns {Promise<OcaMap>}
 */
/**
 * Map of names of media encoding schemes the device supports, indexed by
 * scheme ID.
 * @member RemoteControlClasses.OcaCodingManager#OnAvailableEncodingSchemesChanged {PropertyEvent<OcaMap>} - This event is emitted when AvailableEncodingSchemes changes in the remote object.
 */
/**
 * Map of names of media decoding schemes the device supports, indexed by
 * scheme ID.
 * @member RemoteControlClasses.OcaCodingManager#OnAvailableDecodingSchemesChanged {PropertyEvent<OcaMap>} - This event is emitted when AvailableDecodingSchemes changes in the remote object.
 */

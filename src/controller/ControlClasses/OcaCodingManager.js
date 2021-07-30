import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * Optional manager that collects all media decoders/encoders (Codecs) which the device owns.
 *
 *  - Must be instantiated in every device that implements more than one media encoding scheme and/or more than one media decoding scheme.
 *
 *
 *  - If instantiated, object number must be 12.
 *
 * @extends OcaManager
 * @class OcaCodingManager
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
 * Retrieves the map of available encoding schemes, indexed by scheme ID. Return value indicates success of the retrieval.
 *
 * @method OcaCodingManager#GetAvailableEncodingSchemes
 * @returns {Promise<Map<number, string>>}
 *   A promise which resolves to a single value of type ``Map<number, string>``.
 */
/**
 * Retrieves the map of available decoding schemes, indexed by scheme ID. Return value indicates success of the retrieval.
 *
 * @method OcaCodingManager#GetAvailableDecodingSchemes
 * @returns {Promise<Map<number, string>>}
 *   A promise which resolves to a single value of type ``Map<number, string>``.
 */
/**
 * This event is emitted when the property AvailableEncodingSchemes changes in the remote object.
 * The property ``AvailableEncodingSchemes`` is described in the AES70 standard as follows.
 * Map of names of media encoding schemes the device supports, indexed by
 * scheme ID.
 *
 * @member {PropertyEvent<Map<number, string>>} OcaCodingManager#OnAvailableEncodingSchemesChanged
 */
/**
 * This event is emitted when the property AvailableDecodingSchemes changes in the remote object.
 * The property ``AvailableDecodingSchemes`` is described in the AES70 standard as follows.
 * Map of names of media decoding schemes the device supports, indexed by
 * scheme ID.
 *
 * @member {PropertyEvent<Map<number, string>>} OcaCodingManager#OnAvailableDecodingSchemesChanged
 */

import { make_control_class } from '../Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaBitstring } from '../../OCP1/OcaBitstring.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';

/**
 * Bit string sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaBitstringSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaBitstringSensor = make_control_class(
  'OcaBitstringSensor',
  5,
  '\u0001\u0001\u0002\u0001\r',
  2,
  OcaBasicSensor,
  [
    ['GetNrBits', 5, 1, [], [OcaUint16]],
    ['GetBit', 5, 2, [OcaUint16], [OcaUint8]],
    ['GetBitString', 5, 3, [], [OcaBitstring]],
  ],
  [['BitString', [OcaBitstring], 5, 1, false, false, null]],
  []
);

/**
 * Gets the number of bits of the bitmask data. Returned status indicates
 * success or failure of the retrieval.
 * @method RemoteControlClasses.OcaBitstringSensor#GetNrBits
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the value of the given bit. Return status indicates success or
 * failure of the retrieval.
 * @method RemoteControlClasses.OcaBitstringSensor#GetBit
 * @param bitNr {OcaUint16}
 *
 * @returns {Promise<OcaUint8>}
 */
/**
 * Gets the entire bitstring. Return status indicates success or failure
 * of the retrieval.
 * @method RemoteControlClasses.OcaBitstringSensor#GetBitString
 * @returns {Promise<OcaBitstring>}
 */
/**
 * The bitstring.
 * @member RemoteControlClasses.OcaBitstringSensor#OnBitStringChanged {PropertyEvent<OcaBitstring>} - This event is emitted when BitString changes in the remote object.
 */

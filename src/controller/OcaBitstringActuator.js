import { make_control_class } from './Base.js';
import { OcaBasicActuator } from './OcaBasicActuator.js';
import { OcaBitstring } from '../OCP1/OcaBitstring.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Bitstring actuator. Maximum bitstring length is 65,536 bits.
 * @extends RemoteControlClasses.OcaBasicActuator
 * @class OcaBitstringActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaBitstringActuator = make_control_class(
  'OcaBitstringActuator',
  5,
  '\u0001\u0001\u0001\u0001\r',
  2,
  OcaBasicActuator,
  [
    ['GetNrBits', 5, 1, [], [OcaUint16]],
    ['GetBit', 5, 2, [OcaUint16], [OcaBoolean]],
    ['SetBit', 5, 3, [OcaUint16, OcaBoolean], []],
    ['GetBitstring', 5, 4, [], [OcaBitstring]],
    ['SetBitstring', 5, 5, [OcaBitstring], []],
  ],
  [['Bitstring', [OcaBitstring], 5, 1, false, false, null]],
  []
);

/**
 * Gets the number of bits in the string. The return value indicates
 * whether the property was successfully gathered.
 * @method RemoteControlClasses.OcaBitstringActuator#GetNrBits
 * @returns {Promise<OcaUint16>}
 */
/**
 * Gets the bit value of the given bit. The return value indicates
 * whether the property was successfully gathered.
 * @method RemoteControlClasses.OcaBitstringActuator#GetBit
 * @param bitNr {OcaUint16}
 *
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the bit value of the given bit. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaBitstringActuator#SetBit
 * @param bitNr {OcaUint16}
 *
 * @param Value {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the entire bitstring.The return value indicates whether the
 * property was successfully gathered.
 * @method RemoteControlClasses.OcaBitstringActuator#GetBitstring
 * @returns {Promise<OcaBitstring>}
 */
/**
 * Sets the entire bitstring. The return value indicates whether the
 * property was successfully set.
 * @method RemoteControlClasses.OcaBitstringActuator#SetBitstring
 * @param BitString {OcaBitstring}
 *
 * @returns {Promise}
 */
/**
 * The bitstring data.
 * @member RemoteControlClasses.OcaBitstringActuator#OnBitstringChanged {PropertyEvent<OcaBitstring>} - This event is emitted when Bitstring changes in the remote object.
 */

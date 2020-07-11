import { make_control_class } from './Base.js';
import { OcaBasicSensor } from './OcaBasicSensor.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Text string sensor.
 * @extends RemoteControlClasses.OcaBasicSensor
 * @class OcaStringSensor
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaStringSensor = make_control_class(
  'OcaStringSensor',
  5,
  '\u0001\u0001\u0002\u0001\f',
  2,
  OcaBasicSensor,
  [
    ['GetString', 5, 1, [], [OcaString]],
    ['GetMaxLen', 5, 2, [], [OcaUint16]],
    ['SetMaxLen', 5, 3, [OcaUint16], []],
  ],
  [
    ['String', [OcaString], 5, 1, false, false, null],
    ['MaxLen', [OcaUint16], 5, 2, false, false, null],
  ],
  []
);

/**
 * Gets the entire string. Return status indicates success or failure of
 * the retrieval.
 * @method RemoteControlClasses.OcaStringSensor#GetString
 * @returns {Promise<OcaString>}
 */
/**
 * Gets the maximum number of bytes that may be returned. Returned status
 * indicates success or failure of the retrieval.
 * @method RemoteControlClasses.OcaStringSensor#GetMaxLen
 * @returns {Promise<OcaUint16>}
 */
/**
 * Sets the maximum number of bytes that the object may return. Returned
 * status indicates success or failure of the set.
 * @method RemoteControlClasses.OcaStringSensor#SetMaxLen
 * @param maxLen {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * The string.
 * @member RemoteControlClasses.OcaStringSensor#OnStringChanged {PropertyEvent<OcaString>} - This event is emitted when String changes in the remote object.
 */
/**
 * Maximum length of the returned string. May be readonly in some
 * implementations.
 * @member RemoteControlClasses.OcaStringSensor#OnMaxLenChanged {PropertyEvent<OcaUint16>} - This event is emitted when MaxLen changes in the remote object.
 */

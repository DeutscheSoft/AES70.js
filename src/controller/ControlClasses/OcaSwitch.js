import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * (n)-position single-pole switch.
 * @extends OcaActuator
 * @class OcaSwitch
 */
export const OcaSwitch = make_control_class(
  'OcaSwitch',
  4,
  '\u0001\u0001\u0001\u0004',
  2,
  OcaActuator,
  [
    ['GetPosition', 4, 1, [], [OcaUint16, OcaUint16, OcaUint16]],
    ['SetPosition', 4, 2, [OcaUint16], []],
    ['GetPositionName', 4, 3, [OcaUint16], [OcaString]],
    ['SetPositionName', 4, 4, [OcaUint16, OcaString], []],
    ['GetPositionNames', 4, 5, [], [OcaList(OcaString)]],
    ['SetPositionNames', 4, 6, [OcaList(OcaString)], []],
    ['GetPositionEnabled', 4, 7, [OcaUint16], [OcaBoolean]],
    ['SetPositionEnabled', 4, 8, [OcaUint16, OcaBoolean], []],
    ['GetPositionEnableds', 4, 9, [], [OcaList(OcaBoolean)]],
    ['SetPositionEnableds', 4, 10, [OcaList(OcaBoolean)], []],
  ],
  [
    ['Position', [OcaUint16], 4, 1, false, false, null],
    ['PositionNames', [OcaList(OcaString)], 4, 2, false, false, null],
    ['PositionEnableds', [OcaList(OcaBoolean)], 4, 3, false, false, null],
  ],
  []
);

/**
 * Gets the value of the Position property and, optionally, its implementation min and max. The return value indicates whether the data was successfully retrieved.
 * The return values of this method are
 *
 * - position of type ``number``
 * - minPosition of type ``number``
 * - maxPosition of type ``number``
 *
 * @method OcaSwitch#GetPosition
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Position property. The return value indicates whether the property was successfully set.
 *
 * @method OcaSwitch#SetPosition
 * @param {number} position
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the name assigned to a given switch position. The return value indicates whether the name was successfully retrieved.
 *
 * @method OcaSwitch#GetPositionName
 * @param {number} Index
 *
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Assigns a name to a given switch position. The return value indicates whether the name was successfully assigned.
 *
 * @method OcaSwitch#SetPositionName
 * @param {number} Index
 *
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets list of names assigned to the switch's positions. The return value indicates whether the names were successfully retrieved.
 *
 * @method OcaSwitch#GetPositionNames
 * @returns {Promise<string[]>}
 *   A promise which resolves to a single value of type ``string[]``.
 */
/**
 * Assigns names to the switch's positions. The return value indicates whether the names were successfully assigned.
 *
 * @method OcaSwitch#SetPositionNames
 * @param {string[]} Names
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the Enabled flag assigned to a given switch position. The return value indicates whether the flag was successfully retrieved.
 *
 * @method OcaSwitch#GetPositionEnabled
 * @param {number} Index
 *
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the Enabled flag assigned to a given switch position. The return value indicates whether the flag was successfully set.
 *
 * @method OcaSwitch#SetPositionEnabled
 * @param {number} Index
 *
 * @param {boolean} enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Gets list of Enabled flags assigned to the switch's positions. The return value indicates whether the flags were successfully retrieved.
 *
 * @method OcaSwitch#GetPositionEnableds
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * Sets list of Enabled flags for the switch's positions. The return value indicates whether the flags were successfully set.
 *
 * @method OcaSwitch#SetPositionEnableds
 * @param {boolean[]} enableds
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Position changes in the remote object.
 * The property ``Position`` is described in the AES70 standard as follows.
 * The current position of the switch. Positions shall be numbered from
 * minPosition to (including) maxPosition. If the object does not return
 * the optional parameters minPosition and maxPosition in its GetPosition
 * method the positions shall be numbered from 1 to n.
 *
 * @member {PropertyEvent<number>} OcaSwitch#OnPositionChanged
 */
/**
 * This event is emitted when the property PositionNames changes in the remote object.
 * The property ``PositionNames`` is described in the AES70 standard as follows.
 * Vector of switch position names. Supplied by controller.
 *
 * @member {PropertyEvent<string[]>} OcaSwitch#OnPositionNamesChanged
 */
/**
 * This event is emitted when the property PositionEnableds changes in the remote object.
 * The property ``PositionEnableds`` is described in the AES70 standard as follows.
 * Vector of booleans which enable or disable corresponding switch
 * positions. Default values are a construction parameter. The usual
 * default value is True.
 *
 * @member {PropertyEvent<boolean[]>} OcaSwitch#OnPositionEnabledsChanged
 */

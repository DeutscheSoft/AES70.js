import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * (n)-position switch. Single-pole or multipole, as determined by number of
 * input and output ports. May be instantiated with no ports for use as an
 * option selector.
 * @extends OcaActuator
 * @class OcaSwitch
 */
export const OcaSwitch = make_control_class(
  'OcaSwitch',
  4,
  '\u0001\u0001\u0001\u0004',
  3,
  OcaActuator,
  [
    ['GetPosition', 4, 1, [], [OcaUint16, OcaUint16, OcaUint16]],
    ['SetPosition', 4, 2, [OcaUint16], []],
    ['GetPositionName', 4, 3, [OcaUint16], [OcaString]],
    ['SetPositionName', 4, 4, [OcaUint16, OcaString], []],
    ['GetPositionNames', 4, 5, [], [OcaList(OcaString)]],
    ['SetPositionNames', 4, 6, [OcaList(OcaString)], []],
    [
      'GetPositionEnableFlag',
      4,
      7,
      [OcaUint16],
      [OcaBoolean],
      ['GetPositionEnabled'],
    ],
    [
      'SetPositionEnableFlag',
      4,
      8,
      [OcaUint16, OcaBoolean],
      [],
      ['SetPositionEnabled'],
    ],
    [
      'GetPositionEnableFlags',
      4,
      9,
      [],
      [OcaList(OcaBoolean)],
      ['GetPositionEnableds'],
    ],
    [
      'SetPositionEnableFlags',
      4,
      10,
      [OcaList(OcaBoolean)],
      [],
      ['SetPositionEnableds'],
    ],
  ],
  [
    ['Position', [OcaUint16], 4, 1, false, false, null],
    ['PositionNames', [OcaList(OcaString)], 4, 2, false, false, null],
    [
      'PositionEnableFlags',
      [OcaList(OcaBoolean)],
      4,
      3,
      false,
      false,
      ['PositionEnable', 'PositionEnableds'],
    ],
  ],
  []
);

/**
 * Gets the value and limits of the **Position** property.
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
 * Sets the value of the Position property.
 *
 * @method OcaSwitch#SetPosition
 * @param {number} position
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the name assigned to a given switch position.
 *
 * @method OcaSwitch#GetPositionName
 * @param {number} Index
 *
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Assigns a name to a given switch position.
 *
 * @method OcaSwitch#SetPositionName
 * @param {number} Index
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets list of names assigned to the switch's positions.
 *
 * @method OcaSwitch#GetPositionNames
 * @returns {Promise<string[]>}
 *   A promise which resolves to a single value of type ``string[]``.
 */
/**
 * Assigns names to the switch's positions.
 *
 * @method OcaSwitch#SetPositionNames
 * @param {string[]} Names
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the Enabled flag assigned to a given switch position.
 *
 * @method OcaSwitch#GetPositionEnableFlag
 * @param {number} Index
 *
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Gets the Enabled flag assigned to a given switch position.
 * An alias for GetPositionEnableFlag.
 *
 * @method OcaSwitch#GetPositionEnabled
 * @param {number} Index
 *
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the Enabled flag assigned to a given switch position.
 *
 * @method OcaSwitch#SetPositionEnableFlag
 * @param {number} Index
 * @param {boolean} enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Sets the Enabled flag assigned to a given switch position.
 * An alias for SetPositionEnableFlag.
 *
 * @method OcaSwitch#SetPositionEnabled
 * @param {number} Index
 * @param {boolean} enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Gets list of position-enabled flags assigned to the switch's positions.
 *
 * @method OcaSwitch#GetPositionEnableFlags
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * Gets list of position-enabled flags assigned to the switch's positions.
 * An alias for GetPositionEnableFlags.
 *
 * @method OcaSwitch#GetPositionEnableds
 * @returns {Promise<boolean[]>}
 *   A promise which resolves to a single value of type ``boolean[]``.
 */
/**
 * Sets list of position-enable flags for the switch's positions.
 *
 * @method OcaSwitch#SetPositionEnableFlags
 * @param {boolean[]} flags
 *
 * @returns {Promise<void>}
 */
/**
 * Sets list of position-enable flags for the switch's positions.
 * An alias for SetPositionEnableFlags.
 *
 * @method OcaSwitch#SetPositionEnableds
 * @param {boolean[]} flags
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Position`` changes in the remote object.
 * The property ``Position`` is described in the AES70 standard as follows.
 * The current position of the switch. Positions shall be numbered from
 * **minPosition** to (including) **maxPosition**. If the object does not return
 * the optional parameters **minPosition** and **maxPosition** in its
 * **GetPosition** method, the positions shall be numbered from 1 to n.
 *
 * @member {PropertyEvent<number>} OcaSwitch#OnPositionChanged
 */
/**
 * This event is emitted when the property ``PositionNames`` changes in the remote object.
 * The property ``PositionNames`` is described in the AES70 standard as follows.
 * Vector of switch position names. Defined at object construction time. In some
 * implementations, may be changed by controller. FIrst element of list
 * corresponds to the position value of **minPosition** as returned by
 * **GetPosition(...)**.
 *
 * @member {PropertyEvent<string[]>} OcaSwitch#OnPositionNamesChanged
 */
/**
 * This event is emitted when the property ``PositionEnableFlags`` changes in the remote object.
 * The property ``PositionEnableFlags`` is described in the AES70 standard as follows.
 * Vector of booleans which enable or disable corresponding switch positions.
 * Default values are a construction parameter. The usual default value is True.
 * Renamed to **PositionEnableFlags** in v3 of this class.
 *
 * @member {PropertyEvent<boolean[]>} OcaSwitch#OnPositionEnableFlagsChanged
 */
/**
 * An alias for OnPositionEnableFlagsChanged
 *
 * @member {PropertyEvent<boolean[]>} OcaSwitch#OnPositionEnableChanged
 */
/**
 * An alias for OnPositionEnableFlagsChanged
 *
 * @member {PropertyEvent<boolean[]>} OcaSwitch#OnPositionEnabledsChanged
 */

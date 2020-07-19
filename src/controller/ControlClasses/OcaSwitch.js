import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';

/**
 * (n)-position single-pole switch.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSwitch
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the value of the Position property and, optionally, its
 * implementation min and max. The return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPosition
 * @returns {Promise<Arguments<OcaUint16,OcaUint16,OcaUint16>>}
 */
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSwitch#SetPosition
 * @param position {OcaUint16}
 *
 * @returns {Promise}
 */
/**
 * Gets the name assigned to a given switch position. The return value
 * indicates whether the name was successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionName
 * @param Index {OcaUint16}
 *
 * @returns {Promise<OcaString>}
 */
/**
 * Assigns a name to a given switch position. The return value indicates
 * whether the name was successfully assigned.
 * @method RemoteControlClasses.OcaSwitch#SetPositionName
 * @param Index {OcaUint16}
 *
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets list of names assigned to the switch's positions. The return
 * value indicates whether the names were successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionNames
 * @returns {Promise<OcaList>}
 */
/**
 * Assigns names to the switch's positions. The return value indicates
 * whether the names were successfully assigned.
 * @method RemoteControlClasses.OcaSwitch#SetPositionNames
 * @param Names {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionEnabled
 * @param Index {OcaUint16}
 *
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the Enabled flag assigned to a given switch position. The return
 * value indicates whether the flag was successfully set.
 * @method RemoteControlClasses.OcaSwitch#SetPositionEnabled
 * @param Index {OcaUint16}
 *
 * @param enabled {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets list of Enabled flags assigned to the switch's positions. The
 * return value indicates whether the flags were successfully retrieved.
 * @method RemoteControlClasses.OcaSwitch#GetPositionEnableds
 * @returns {Promise<OcaList>}
 */
/**
 * Sets list of Enabled flags for the switch's positions. The return
 * value indicates whether the flags were successfully set.
 * @method RemoteControlClasses.OcaSwitch#SetPositionEnableds
 * @param enableds {OcaList}
 *
 * @returns {Promise}
 */
/**
 * The current position of the switch. Positions shall be numbered from
 * minPosition to (including) maxPosition. If the object does not return
 * the optional parameters minPosition and maxPosition in its GetPosition
 * method the positions shall be numbered from 1 to n.
 * @member RemoteControlClasses.OcaSwitch#OnPositionChanged {PropertyEvent<OcaUint16>} - This event is emitted when Position changes in the remote object.
 */
/**
 * Vector of switch position names. Supplied by controller.
 * @member RemoteControlClasses.OcaSwitch#OnPositionNamesChanged {PropertyEvent<OcaList>} - This event is emitted when PositionNames changes in the remote object.
 */
/**
 * Vector of booleans which enable or disable corresponding switch
 * positions. Default values are a construction parameter. The usual
 * default value is True.
 * @member RemoteControlClasses.OcaSwitch#OnPositionEnabledsChanged {PropertyEvent<OcaList>} - This event is emitted when PositionEnableds changes in the remote object.
 */

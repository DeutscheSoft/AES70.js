import { make_control_class } from '../Base.js';
import { OcaManager } from './OcaManager.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaPowerState } from '../../OCP1/OcaPowerState.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Optional manager that manages power settings and state. <ul> <li>May
 * be instantiated once in any device. </li> <li>If instantiated, object
 * number must be 5.</li> </ul>
 * @extends RemoteControlClasses.OcaManager
 * @class OcaPowerManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaPowerManager = make_control_class(
  'OcaPowerManager',
  3,
  '\u0001\u0003\u0005',
  2,
  OcaManager,
  [
    ['GetState', 3, 1, [], [OcaPowerState]],
    ['SetState', 3, 2, [OcaPowerState], []],
    ['GetPowerSupplies', 3, 3, [], [OcaList(OcaUint32)]],
    ['GetActivePowerSupplies', 3, 4, [], [OcaList(OcaUint32)]],
    ['ExchangePowerSupply', 3, 5, [OcaUint32, OcaUint32, OcaBoolean], []],
    ['GetAutoState', 3, 6, [], [OcaBoolean]],
  ],
  [
    ['State', [OcaPowerState], 3, 1, false, false, null],
    ['PowerSupplies', [OcaList(OcaUint32)], 3, 2, false, false, null],
    ['ActivePowerSupplies', [OcaList(OcaUint32)], 3, 3, false, false, null],
    ['AutoState', [OcaBoolean], 3, 4, false, false, null],
    ['TargetState', [OcaPowerState], 3, 5, true, false, null],
  ],
  []
);

/**
 * Retrieve the value of property <b>03p01 State</b>, the current power
 * state of the device. Return value indicates whether the value was
 * successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetState
 * @returns {Promise<OcaPowerState>}
 */
/**
 * Change the device power state. The return value indicates whether the
 * requested change has been successfully made.
 * @method RemoteControlClasses.OcaPowerManager#SetState
 * @param State {OcaPowerState}
 *
 * @returns {Promise}
 */
/**
 * Retrieves list of object number(s) of all power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetPowerSupplies
 * @returns {Promise<OcaList>}
 */
/**
 * Retrieves list of object number(s) of active power supply(ies). Return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetActivePowerSupplies
 * @returns {Promise<OcaList>}
 */
/**
 * Deactivate one power supply and activate another. An option switch
 * indicates whether the previously active power supply is to be turned
 * off. If it is not turned off, it will be placed in the
 * <b>Unavailable</b> state. The return value indicates whether the
 * requested exchange has been successfully made.
 * @method RemoteControlClasses.OcaPowerManager#ExchangePowerSupply
 * @param oldPsu {OcaONo}
 *
 * @param newPsu {OcaONo}
 *
 * @param powerOffOld {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the <b>AutoState</b> property. The return value
 * indicates whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerManager#GetAutoState
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Current power state of device. Readonly.
 * @member RemoteControlClasses.OcaPowerManager#OnStateChanged {PropertyEvent<OcaPowerState>} - This event is emitted when State changes in the remote object.
 */
/**
 * List of object numbers of available power supplies.
 * @member RemoteControlClasses.OcaPowerManager#OnPowerSuppliesChanged {PropertyEvent<OcaList>} - This event is emitted when PowerSupplies changes in the remote object.
 */
/**
 * Object number(s) of power suppl(ies) currently in use.
 * @member RemoteControlClasses.OcaPowerManager#OnActivePowerSuppliesChanged {PropertyEvent<OcaList>} - This event is emitted when ActivePowerSupplies changes in the remote object.
 */
/**
 * True if current state was invoked automatically, not by a controller
 * action.
 * @member RemoteControlClasses.OcaPowerManager#OnAutoStateChanged {PropertyEvent<OcaBoolean>} - This event is emitted when AutoState changes in the remote object.
 */
/**
 * Power state to which the device is transitioning. If no transition is
 * in progress, has value None. Readonly.
 */

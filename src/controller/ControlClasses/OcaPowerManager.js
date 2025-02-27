import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaPowerState } from '../../OCP1/OcaPowerState.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Optional manager that manages power settings and state.
 *
 *  - May be instantiated at most once in any device.
 *
 *  - If instantiated, object number must be 5.
 *
 *
 * @extends OcaManager
 * @class OcaPowerManager
 */
export const OcaPowerManager = make_control_class(
  'OcaPowerManager',
  3,
  '\u0001\u0003\u0005',
  3,
  OcaManager,
  [
    ['GetState', 3, 1, [], [OcaPowerState]],
    ['SetTargetState', 3, 2, [OcaPowerState], [], ['SetState']],
    ['GetPowerSupplies', 3, 3, [], [OcaList(OcaUint32)]],
    ['GetActivePowerSupplies', 3, 4, [], [OcaList(OcaUint32)]],
    ['ExchangePowerSupply', 3, 5, [OcaUint32, OcaUint32, OcaBoolean], []],
    ['GetAutoState', 3, 6, [], [OcaBoolean]],
    ['GetTargetState', 3, 7, [], [OcaPowerState]],
  ],
  [
    ['State', [OcaPowerState], 3, 1, false, false, null],
    ['PowerSupplies', [OcaList(OcaUint32)], 3, 2, false, false, null],
    ['ActivePowerSupplies', [OcaList(OcaUint32)], 3, 3, false, false, null],
    ['AutoState', [OcaBoolean], 3, 4, false, false, null],
    ['TargetState', [OcaPowerState], 3, 5, false, false, null],
  ],
  []
);

/**
 * Retrieve the value of property **State**, the current power state of the
 * device.
 *
 * @method OcaPowerManager#GetState
 * @returns {Promise<OcaPowerState>}
 *   A promise which resolves to a single value of type :class:`OcaPowerState`.
 */
/**
 * Change the target power state. Erroneously named **SetState** prior to v3 of
 * this class.
 *
 * @method OcaPowerManager#SetTargetState
 * @param {IOcaPowerState} State
 *
 * @returns {Promise<void>}
 */
/**
 * Change the target power state. Erroneously named **SetState** prior to v3 of
 * this class.
 * An alias for SetTargetState.
 *
 * @method OcaPowerManager#SetState
 * @param {IOcaPowerState} State
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves list of object number(s) of all power supply(ies).
 *
 * @method OcaPowerManager#GetPowerSupplies
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Retrieves list of object number(s) of active power supply(ies).
 *
 * @method OcaPowerManager#GetActivePowerSupplies
 * @returns {Promise<number[]>}
 *   A promise which resolves to a single value of type ``number[]``.
 */
/**
 * Deactivate one power supply and activate another. An option switch indicates
 * whether the previously active power supply is to be turned off. If it is not
 * turned off, it will be placed in the **Unavailable** state.
 *
 * @method OcaPowerManager#ExchangePowerSupply
 * @param {number} oldPsu
 * @param {number} newPsu
 * @param {boolean} powerOffOld
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **AutoState** property.
 *
 * @method OcaPowerManager#GetAutoState
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Retrieve the value of property** TargetState**, the power state of the device
 * to which the device is transitioning.
 *
 * @method OcaPowerManager#GetTargetState
 * @returns {Promise<OcaPowerState>}
 *   A promise which resolves to a single value of type :class:`OcaPowerState`.
 */
/**
 * This event is emitted when the property ``State`` changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * Current power state of device. Readonly.
 *
 * @member {PropertyEvent<OcaPowerState>} OcaPowerManager#OnStateChanged
 */
/**
 * This event is emitted when the property ``PowerSupplies`` changes in the remote object.
 * The property ``PowerSupplies`` is described in the AES70 standard as follows.
 * List of object numbers of available power supplies.
 *
 * @member {PropertyEvent<number[]>} OcaPowerManager#OnPowerSuppliesChanged
 */
/**
 * This event is emitted when the property ``ActivePowerSupplies`` changes in the remote object.
 * The property ``ActivePowerSupplies`` is described in the AES70 standard as follows.
 * Object number(s) of power suppl(ies) currently in use.
 *
 * @member {PropertyEvent<number[]>} OcaPowerManager#OnActivePowerSuppliesChanged
 */
/**
 * This event is emitted when the property ``AutoState`` changes in the remote object.
 * The property ``AutoState`` is described in the AES70 standard as follows.
 * True if current state was invoked automatically, not by a controller action.
 * Readonly.
 *
 * @member {PropertyEvent<boolean>} OcaPowerManager#OnAutoStateChanged
 */
/**
 * This event is emitted when the property ``TargetState`` changes in the remote object.
 * The property ``TargetState`` is described in the AES70 standard as follows.
 * Power state to which the device is transitioning. If no transition is in
 * progress, has value None. Set by calls to **SetTargetState()**.
 *
 * @member {PropertyEvent<OcaPowerState>} OcaPowerManager#OnTargetStateChanged
 */

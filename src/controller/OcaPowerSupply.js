import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaPowerSupplyLocation } from '../OCP1/OcaPowerSupplyLocation.js';
import { OcaPowerSupplyState } from '../OCP1/OcaPowerSupplyState.js';
import { OcaPowerSupplyType } from '../OCP1/OcaPowerSupplyType.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * A power supply.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaPowerSupply
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaPowerSupply = make_control_class(
  'OcaPowerSupply',
  3,
  '\u0001\u0002\u0007',
  3,
  OcaAgent,
  [
    ['GetType', 3, 1, [], [OcaPowerSupplyType]],
    ['GetModelInfo', 3, 2, [], [OcaString]],
    ['GetState', 3, 3, [], [OcaPowerSupplyState]],
    ['SetState', 3, 4, [OcaPowerSupplyState], []],
    ['GetCharging', 3, 5, [], [OcaBoolean]],
    ['GetLoadFractionAvailable', 3, 6, [], [OcaFloat32]],
    ['GetStorageFractionAvailable', 3, 7, [], [OcaFloat32]],
    ['GetLocation', 3, 8, [], [OcaPowerSupplyLocation]],
  ],
  [
    ['Type', [OcaPowerSupplyType], 3, 1, false, false, null],
    ['ModelInfo', [OcaString], 3, 2, false, false, null],
    ['State', [OcaPowerSupplyState], 3, 3, false, false, null],
    ['Charging', [OcaBoolean], 3, 4, false, false, null],
    ['LoadFractionAvailable', [OcaFloat32], 3, 5, true, false, null],
    ['StorageFractionAvailable', [OcaFloat32], 3, 6, true, false, null],
    ['Location', [OcaPowerSupplyLocation], 3, 7, true, false, null],
  ],
  []
);

/**
 * Gets the type of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetType
 * @returns {Promise<OcaPowerSupplyType>}
 */
/**
 * Gets the power supply's model information text. Return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetModelInfo
 * @returns {Promise<OcaString>}
 */
/**
 * Gets the state of the power supply. Return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetState
 * @returns {Promise<OcaPowerSupplyState>}
 */
/**
 * Changes the power supply's state. Return value indicates whether the
 * state was successfully changed.
 * @method RemoteControlClasses.OcaPowerSupply#SetState
 * @param state {OcaPowerSupplyState}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of property <b>Charging</b>. Return value indicates
 * whether the value was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetCharging
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Gets the available load fraction. Return value indicates whether the
 * data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetLoadFractionAvailable
 * @returns {Promise<OcaFloat32>}
 */
/**
 * Gets the available storage fraction. Return value indicates whether
 * the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetStorageFractionAvailable
 * @returns {Promise<OcaFloat32>}
 */
/**
 * Gets the power supply physical location. Return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPowerSupply#GetLocation
 * @returns {Promise<OcaPowerSupplyLocation>}
 */
/**
 * Type of power supply.
 * @member RemoteControlClasses.OcaPowerSupply#OnTypeChanged {PropertyEvent<OcaPowerSupplyType>} - This event is emitted when Type changes in the remote object.
 */
/**
 * Model information for power supply. Text; content is
 * implementation-dependent.
 * @member RemoteControlClasses.OcaPowerSupply#OnModelInfoChanged {PropertyEvent<OcaString>} - This event is emitted when ModelInfo changes in the remote object.
 */
/**
 * State of power supply: off, unavailable, available, active.
 * @member RemoteControlClasses.OcaPowerSupply#OnStateChanged {PropertyEvent<OcaPowerSupplyState>} - This event is emitted when State changes in the remote object.
 */
/**
 * True iff charging. For rechargable supplies (obviously).
 * @member RemoteControlClasses.OcaPowerSupply#OnChargingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Charging changes in the remote object.
 */
/**
 * Fraction of power supply's load capacity that is currently not being
 * used. Readonly. Normal value range 0...1. A negative value indicates
 * this data is not available.
 */
/**
 * Fraction of power supply's energy storage that remains available. For
 * battery supplies. Readonly. Normal value range 0...1. A negative value
 * indicates this data is not available.
 */
/**
 * Physical location of power supply - internal or external.
 */

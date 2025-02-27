import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaCounter } from '../../OCP1/OcaCounter.js';
import { OcaCounterSet } from '../../OCP1/OcaCounterSet.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaNetworkInterfaceCommand } from '../../OCP1/OcaNetworkInterfaceCommand.js';
import { OcaNetworkInterfaceStatus } from '../../OCP1/OcaNetworkInterfaceStatus.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { OcaUint8 } from '../../OCP1/OcaUint8.js';
import { make_control_class } from '../make_control_class.js';
import { OcaRoot } from './OcaRoot.js';

/**
 * Represents the device's connection to a data network.
 * @extends OcaRoot
 * @class OcaNetworkInterface
 */
export const OcaNetworkInterface = make_control_class(
  'OcaNetworkInterface',
  2,
  '\u0001\u0006',
  1,
  OcaRoot,
  [
    ['GetLabel', 2, 1, [], [OcaString]],
    ['SetLabel', 2, 2, [OcaString], []],
    ['GetOwner', 2, 3, [], [OcaUint32]],
    ['GetPath', 2, 4, [], [OcaList(OcaString), OcaList(OcaUint32)]],
    ['GetEnabled', 2, 5, [], [OcaBoolean]],
    ['SetEnabled', 2, 6, [OcaBoolean], []],
    ['GetSystemIoInterfaceName', 2, 7, [], [OcaString]],
    ['SetSystemIoInterfaceName', 2, 8, [OcaString], []],
    ['GetGroupID', 2, 9, [], [OcaUint16]],
    ['SetGroupID', 2, 10, [OcaUint16], []],
    ['GetPrecedence', 2, 11, [], [OcaUint8]],
    ['SetPrecedence', 2, 12, [OcaUint8], []],
    ['GetAdaptationIdentifier', 2, 13, [], [OcaString]],
    ['GetActiveNetworkSettings', 2, 14, [], [OcaBlob]],
    ['GetTargetNetworkSettings', 2, 15, [], [OcaBlob]],
    ['SetTargetNetworkSettings', 2, 16, [OcaBlob], []],
    ['GetNetworkSettingsPending', 2, 17, [], [OcaBoolean]],
    ['GetStatus', 2, 18, [], [OcaNetworkInterfaceStatus]],
    ['GetErrorCode', 2, 19, [], [OcaUint16]],
    ['GetCounterSet', 2, 20, [], [OcaCounterSet]],
    ['GetCounter', 2, 21, [OcaUint16], [OcaCounter]],
    ['AttachCounterNotifier', 2, 22, [OcaUint16, OcaUint32], []],
    ['DetachCounterNotifier', 2, 23, [OcaUint16, OcaUint32], []],
    ['ResetCounters', 2, 24, [], []],
    ['ApplyCommand', 2, 25, [OcaNetworkInterfaceCommand], []],
  ],
  [
    ['Label', [OcaString], 2, 1, false, false, null],
    ['Owner', [OcaUint32], 2, 2, true, false, null],
    ['Enabled', [OcaBoolean], 2, 3, false, false, null],
    ['SystemIoInterfaceName', [OcaString], 2, 4, false, false, null],
    ['GroupID', [OcaUint16], 2, 5, false, false, null],
    ['Precedence', [OcaUint16], 2, 6, false, false, null],
    ['AdaptationIdentifier', [OcaString], 2, 7, false, false, null],
    ['ActiveNetworkSettings', [OcaBlob], 2, 8, false, false, null],
    ['TargetNetworkSettings', [OcaBlob], 2, 9, false, false, null],
    ['NetworkSettingsPending', [OcaBoolean], 2, 10, false, false, null],
    ['Status', [OcaNetworkInterfaceStatus], 2, 11, false, false, null],
    ['ErrorCode', [OcaUint16], 2, 12, false, false, null],
  ],
  []
);

/**
 * Gets the value of the **Label** property.
 *
 * @method OcaNetworkInterface#GetLabel
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the **Label** property.
 *
 * @method OcaNetworkInterface#SetLabel
 * @param {string} Label
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Owner** property.
 *
 * @method OcaNetworkInterface#GetOwner
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Returns Role Path and ONo Path from the Root Block to this object. The return
 * value indicates whether the operation succeeded.
 * The return values of this method are
 *
 * - RolePath of type ``string[]``
 * - ONoPath of type ``number[]``
 *
 * @method OcaNetworkInterface#GetPath
 * @returns {Promise<Arguments<string[],number[]>>}
 */
/**
 * Gets the value of the **Enabled** property.
 *
 * @method OcaNetworkInterface#GetEnabled
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the **Enabled** property.
 *
 * @method OcaNetworkInterface#SetEnabled
 * @param {boolean} Enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the system I/O interface name.
 *
 * @method OcaNetworkInterface#GetSystemIoInterfaceName
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the system I/O interface name.
 *
 * @method OcaNetworkInterface#SetSystemIoInterfaceName
 * @param {string} Identifier
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the network group ID. Returns value of zero if this network does not
 * belong to a group.
 *
 * @method OcaNetworkInterface#GetGroupID
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the network group ID. An ID value of zero means this network interface
 * does not belong to a group.
 *
 * @method OcaNetworkInterface#SetGroupID
 * @param {number} Id
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the **Precedence** property.
 *
 * @method OcaNetworkInterface#GetPrecedence
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the **Precedence** property.
 *
 * @method OcaNetworkInterface#SetPrecedence
 * @param {number} Precedence
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the identifier of the Adaptation this network object implements.
 *
 * @method OcaNetworkInterface#GetAdaptationIdentifier
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Gets the value of property **ActiveNetworkSettings.**
 *
 * @method OcaNetworkInterface#GetActiveNetworkSettings
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Gets the value of property **TargetNetworkSettings.**
 *
 * @method OcaNetworkInterface#GetTargetNetworkSettings
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the value of property **TargetNetworkSettings.**
 *
 * @method OcaNetworkInterface#SetTargetNetworkSettings
 * @param {Uint8Array} Settings
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of property **NetworkSettingsPending.**
 *
 * @method OcaNetworkInterface#GetNetworkSettingsPending
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Gets the network's operational status.
 *
 * @method OcaNetworkInterface#GetStatus
 * @returns {Promise<OcaNetworkInterfaceStatus>}
 *   A promise which resolves to a single value of type :class:`OcaNetworkInterfaceStatus`.
 */
/**
 * Gets the most recent error code.
 *
 * @method OcaNetworkInterface#GetErrorCode
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Get this object's CounterSet.
 *
 * @method OcaNetworkInterface#GetCounterSet
 * @returns {Promise<OcaCounterSet>}
 *   A promise which resolves to a single value of type :class:`OcaCounterSet`.
 */
/**
 * Gets the given counter from this object's CounterSet.
 *
 * @method OcaNetworkInterface#GetCounter
 * @param {number} CounterID
 *
 * @returns {Promise<OcaCounter>}
 *   A promise which resolves to a single value of type :class:`OcaCounter`.
 */
/**
 * Adds a notifier **ONo** to the **Notifiers** property of the designated
 * counter.
 *
 * @method OcaNetworkInterface#AttachCounterNotifier
 * @param {number} CounterID
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Removes given notifier ONo from the **Notifiers** property of the designated
 * counter.
 *
 * @method OcaNetworkInterface#DetachCounterNotifier
 * @param {number} CounterID
 * @param {number} ONo
 *
 * @returns {Promise<void>}
 */
/**
 * Resets this object's counterset. Sets all counters to their specified default
 * values.
 *
 * @method OcaNetworkInterface#ResetCounters
 * @returns {Promise<void>}
 */
/**
 * Controls the network interface.
 *
 * @method OcaNetworkInterface#ApplyCommand
 * @param {IOcaNetworkInterfaceCommand} Command
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Label`` changes in the remote object.
 * The property ``Label`` is described in the AES70 standard as follows.
 * User-defined label. No programmatic significance. Read/write.
 *
 * @member {PropertyEvent<string>} OcaNetworkInterface#OnLabelChanged
 */
/**
 * This event is emitted when the property ``Enabled`` changes in the remote object.
 * The property ``Enabled`` is described in the AES70 standard as follows.
 * True if and only if this network is available for input and/or output.
 *
 * @member {PropertyEvent<boolean>} OcaNetworkInterface#OnEnabledChanged
 */
/**
 * This event is emitted when the property ``SystemIoInterfaceName`` changes in the remote object.
 * The property ``SystemIoInterfaceName`` is described in the AES70 standard as follows.
 * Name of the network I/O interface provided to AES70 by the Device system
 * environment.
 *
 * @member {PropertyEvent<string>} OcaNetworkInterface#OnSystemIoInterfaceNameChanged
 */
/**
 * This event is emitted when the property ``GroupID`` changes in the remote object.
 * The property ``GroupID`` is described in the AES70 standard as follows.
 * Arbitrary ID of network group to which this network interface belongs. Useful
 * for identifying redundant network sets. An ID value of zero means this
 * network interface does not belong to any group.
 *
 * @member {PropertyEvent<number>} OcaNetworkInterface#OnGroupIDChanged
 */
/**
 * This event is emitted when the property ``Precedence`` changes in the remote object.
 * The property ``Precedence`` is described in the AES70 standard as follows.
 * Used for redundant groups. 0 means undefined. 1 is highest priority, 2 is
 * next, and so on.
 *
 * @member {PropertyEvent<number>} OcaNetworkInterface#OnPrecedenceChanged
 */
/**
 * This event is emitted when the property ``AdaptationIdentifier`` changes in the remote object.
 * The property ``AdaptationIdentifier`` is described in the AES70 standard as follows.
 * Null string in the base class. Value will be overridden in subclasses by the
 * identifier of the Adaptation that defined the respective child class.
 *
 * @member {PropertyEvent<string>} OcaNetworkInterface#OnAdaptationIdentifierChanged
 */
/**
 * This event is emitted when the property ``ActiveNetworkSettings`` changes in the remote object.
 * The property ``ActiveNetworkSettings`` is described in the AES70 standard as follows.
 * Network-type-specific settings currently in effect.
 *
 * @member {PropertyEvent<Uint8Array>} OcaNetworkInterface#OnActiveNetworkSettingsChanged
 */
/**
 * This event is emitted when the property ``TargetNetworkSettings`` changes in the remote object.
 * The property ``TargetNetworkSettings`` is described in the AES70 standard as follows.
 * Network-type-specific settings waiting to be applied. Shall be applied by a
 * **Start** or **Restart** command or by a Device-initiated reset. The value of
 * this property may or may not survive a Device reset, depending on
 * implementation.
 *
 * @member {PropertyEvent<Uint8Array>} OcaNetworkInterface#OnTargetNetworkSettingsChanged
 */
/**
 * This event is emitted when the property ``NetworkSettingsPending`` changes in the remote object.
 * The property ``NetworkSettingsPending`` is described in the AES70 standard as follows.
 * Readonly; TRUE when a new **TargetNetworkSettings** value has been provided
 * but not applied; set to TRUE by method **SetTargetNetworkSettings(...)**, set
 * to FALSE when the target network settings are applied, either by the
 * execution of a **Start** command or by some other means.
 *
 * @member {PropertyEvent<boolean>} OcaNetworkInterface#OnNetworkSettingsPendingChanged
 */
/**
 * This event is emitted when the property ``Status`` changes in the remote object.
 * The property ``Status`` is described in the AES70 standard as follows.
 * Operational status of this network interface
 *
 * @member {PropertyEvent<OcaNetworkInterfaceStatus>} OcaNetworkInterface#OnStatusChanged
 */
/**
 * This event is emitted when the property ``ErrorCode`` changes in the remote object.
 * The property ``ErrorCode`` is described in the AES70 standard as follows.
 * Most recent error code. 0=no error.
 *
 * @member {PropertyEvent<number>} OcaNetworkInterface#OnErrorCodeChanged
 */

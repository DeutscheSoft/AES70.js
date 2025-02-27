import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaClassIdentification } from '../../OCP1/OcaClassIdentification.js';
import { OcaLockState } from '../../OCP1/OcaLockState.js';
import { OcaPropertyChangedEventData } from '../../OCP1/OcaPropertyChangedEventData.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { String16 } from '../../OCP1/String16.js';
import { make_control_class } from '../make_control_class.js';
import { ObjectBase } from '../object_base.js';

/**
 * The abstract root class of which all OCA classes derive. It offers basic OCA
 * functionality such as locking an object and generalized data access.
 * @extends ObjectBase
 * @class OcaRoot
 */
export const OcaRoot = make_control_class(
  'OcaRoot',
  1,
  '\u0001',
  3,
  ObjectBase,
  [
    ['GetClassIdentification', 1, 1, [], [OcaClassIdentification]],
    ['GetLockable', 1, 2, [], [OcaBoolean]],
    ['SetLockNoReadWrite', 1, 3, [], [], ['LockTotal']],
    ['Unlock', 1, 4, [], []],
    ['GetRole', 1, 5, [], [OcaString]],
    ['SetLockNoWrite', 1, 6, [], [], ['LockReadOnly']],
    ['GetLockState', 1, 7, [], [OcaLockState]],
  ],
  [
    ['ClassID', [String16], 1, 1, true, true, null],
    ['ClassVersion', [OcaUint16], 1, 2, true, true, null],
    ['ObjectNumber', [OcaUint32], 1, 3, true, false, null],
    ['Lockable', [OcaBoolean], 1, 4, true, false, null],
    ['Role', [OcaString], 1, 5, true, false, null],
    ['LockState', [OcaLockState], 1, 6, false, false, null],
  ],
  [['PropertyChanged', 1, 1, [OcaPropertyChangedEventData]]]
);

/**
 * Gets the class identification, a structure contains the ClassID and
 * ClassVersion.
 *
 * @method OcaRoot#GetClassIdentification
 * @returns {Promise<OcaClassIdentification>}
 *   A promise which resolves to a single value of type :class:`OcaClassIdentification`.
 */
/**
 * Gets the value of the Lockable property.
 *
 * @method OcaRoot#GetLockable
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Locks the object totally, so that it can only be accessed for reading or
 * writing by the lockholder.
 *
 *  - If the object's **LockState** is **LockNoWrite** by the same lockholder,
 *    the lock state is upgraded to LockNoReadWrite.
 *
 *  - If the call is from a session other than the lockholder's, the call fails.
 *
 *
 *
 * @method OcaRoot#SetLockNoReadWrite
 * @returns {Promise<void>}
 */
/**
 * Locks the object totally, so that it can only be accessed for reading or
 * writing by the lockholder.
 *
 *  - If the object's **LockState** is **LockNoWrite** by the same lockholder,
 *    the lock state is upgraded to LockNoReadWrite.
 *
 *  - If the call is from a session other than the lockholder's, the call fails.
 *
 *
 * An alias for SetLockNoReadWrite.
 *
 * @method OcaRoot#LockTotal
 * @returns {Promise<void>}
 */
/**
 * Unlocks the object so that it can be freely accessed again. This method can
 * only succeed if it is called by the lockholder.
 *
 * @method OcaRoot#Unlock
 * @returns {Promise<void>}
 */
/**
 * Returns value of Role property.
 *
 * @method OcaRoot#GetRole
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Locks the object so that it may only be controlled by the lockholder, but
 * others can still retrieve property values. If **LockState** is
 * **LockNoReadWrite** by the same lockholder, the lock state is downgraded to
 * **LockNoWrite**. If the call is from a session other than the lockholder's,
 * the call fails.
 *
 * @method OcaRoot#SetLockNoWrite
 * @returns {Promise<void>}
 */
/**
 * Locks the object so that it may only be controlled by the lockholder, but
 * others can still retrieve property values. If **LockState** is
 * **LockNoReadWrite** by the same lockholder, the lock state is downgraded to
 * **LockNoWrite**. If the call is from a session other than the lockholder's,
 * the call fails.
 * An alias for SetLockNoWrite.
 *
 * @method OcaRoot#LockReadOnly
 * @returns {Promise<void>}
 */
/**
 * Returns the current value of the **LockState** property.
 *
 * @method OcaRoot#GetLockState
 * @returns {Promise<OcaLockState>}
 *   A promise which resolves to a single value of type :class:`OcaLockState`.
 */
/**
 * General event that is emitted when a property changes. In each setter method
 * (of derived classes) this event shall be raised with the proper derived event
 * data structure.
 * @member OcaRoot#OnPropertyChanged {Event}
 */
/**
 * This event is emitted when the property ``LockState`` changes in the remote object.
 * The property ``LockState`` is described in the AES70 standard as follows.
 * Current lock state - none, noWrite, or noReadWrite
 *
 * @member {PropertyEvent<OcaLockState>} OcaRoot#OnLockStateChanged
 */

import { make_control_class } from '../make_control_class.js';
import { ObjectBase } from '../object_base.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaClassIdentification } from '../../OCP1/OcaClassIdentification.js';
import { OcaPropertyChangeType } from '../../OCP1/OcaPropertyChangeType.js';
import { OcaPropertyID } from '../../OCP1/OcaPropertyID.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { String16 } from '../../OCP1/String16.js';
import { RestWithOffset } from '../../OCP1/RestWithOffset.js';
/**
 * The abstract root class of which all OCA classes derive. It offers basic OCA functionality such as locking an object and generalized data access.
 * @extends ObjectBase
 * @class OcaRoot
 */
export const OcaRoot = make_control_class(
  'OcaRoot',
  1,
  '\u0001',
  2,
  ObjectBase,
  [
    ['GetClassIdentification', 1, 1, [], [OcaClassIdentification]],
    ['GetLockable', 1, 2, [], [OcaBoolean]],
    ['LockTotal', 1, 3, [], []],
    ['Unlock', 1, 4, [], []],
    ['GetRole', 1, 5, [], [OcaString]],
    ['LockReadonly', 1, 6, [], []],
  ],
  [
    ['ClassID', [String16], 1, 1, true, true, null],
    ['ClassVersion', [OcaUint16], 1, 2, true, true, null],
    ['ObjectNumber', [OcaUint32], 1, 3, true, false, null],
    ['Lockable', [OcaBoolean], 1, 4, true, false, null],
    ['Role', [OcaString], 1, 5, true, false, null],
  ],
  [
    [
      'PropertyChanged',
      1,
      1,
      [OcaPropertyID, RestWithOffset(1), OcaPropertyChangeType],
    ],
  ]
);

/**
 * Gets the class identification, a structure that contains the ClassID and ClassVersion. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaRoot#GetClassIdentification
 * @returns {Promise<OcaClassIdentification>}
 *   A promise which resolves to a single value of type :class:`OcaClassIdentification`.
 */
/**
 * Gets the value of the Lockable property. The return value indicates whether the property was successfully retrieved.
 *
 * @method OcaRoot#GetLockable
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Locks the object totally, so that it can only be accessed for reading or writing by the lockholder. If the device is read-only locked (by a prior call to LockReadonly()) when Lock() is called by the same lockholder, the lock state is upgraded to total. If the call is from a session other than the lockholder's, the call fails. The return value indicates whether the operation succeeded.
 *
 * @method OcaRoot#LockTotal
 * @returns {Promise<void>}
 */
/**
 * Unlocks the object so that it can be freely accessed again. This method can only succeed if it is called by the lockholder. The return value indicates whether the operation succeeded.
 *
 * @method OcaRoot#Unlock
 * @returns {Promise<void>}
 */
/**
 * Returns value of Role property. The return value indicates whether the operation succeeded.
 *
 * @method OcaRoot#GetRole
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Locks the object so that its properties may only be modified by the lockholder, but others can still retrieve property values. If the device is already locked (by a prior call to Lock() or LockReadonly()) when LockReadonly() is called by the same lockholder, the lock state is set to read-only. If the call is from a session other than the lockholder's, the call fails. The return value indicates whether the operation succeeded.
 *
 * @method OcaRoot#LockReadonly
 * @returns {Promise<void>}
 */
/**
 * General event that is emitted when a property changes. In each setter method (of derived classes) this event must be raised with the proper derived event data structure.
 * @member OcaRoot#OnPropertyChanged {Event}
 * General event that is emitted when a property changes. In each setter
 * method (of derived classes) this event must be raised with the proper
 * derived event data structure.
 */

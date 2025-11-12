import { OcaClassIdentification } from '../../types/OcaClassIdentification.js';
import { OcaLockState } from '../../types/OcaLockState.js';
import { Event } from '../event.js';
import { ObjectBase } from '../object_base.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';

/**
 * The abstract root class of which all OCA classes derive. It offers basic OCA
 * functionality such as locking an object and generalized data access.
 * @extends ObjectBase
 * @class OcaRoot
 */
export declare class OcaRoot extends ObjectBase {
  /**
   * General event that is emitted when a property changes. In each setter
   * method (of derived classes) this event shall be raised with the proper
   * derived event data structure.
   * @member OcaRoot#OnPropertyChanged {Event}
   */
  OnPropertyChanged: Event;
  /**
   * This event is emitted whenever LockState changes.
   */
  OnLockStateChanged: PropertyEvent<OcaLockState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the class identification, a structure contains the ClassID and
   * ClassVersion.
   *
   * @method OcaRoot#GetClassIdentification
   * @returns {Promise<OcaClassIdentification>}
   *   A promise which resolves to a single value of type :class:`OcaClassIdentification`.
   */
  GetClassIdentification(): Promise<OcaClassIdentification>;

  /**
   * Gets the value of the Lockable property.
   *
   * @method OcaRoot#GetLockable
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetLockable(): Promise<boolean>;

  /**
   * Locks the object totally, so that it can only be accessed for reading or
   * writing by the lockholder.
   *
   *  - If the object's **LockState** is **LockNoWrite** by the same lockholder,
   *    the lock state is upgraded to LockNoReadWrite.
   *
   *  - If the call is from a session other than the lockholder's, the call
   *    fails.
   *
   *
   *
   * @method OcaRoot#SetLockNoReadWrite
   * @returns {Promise<void>}
   */
  SetLockNoReadWrite(): Promise<void>;

  /**
   * Locks the object totally, so that it can only be accessed for reading or
   * writing by the lockholder.
   *
   *  - If the object's **LockState** is **LockNoWrite** by the same lockholder,
   *    the lock state is upgraded to LockNoReadWrite.
   *
   *  - If the call is from a session other than the lockholder's, the call
   *    fails.
   *
   *
   * An alias for SetLockNoReadWrite.
   *
   * @method OcaRoot#LockTotal
   * @returns {Promise<void>}
   */
  LockTotal(): Promise<void>;

  /**
   * Unlocks the object so that it can be freely accessed again. This method can
   * only succeed if it is called by the lockholder.
   *
   * @method OcaRoot#Unlock
   * @returns {Promise<void>}
   */
  Unlock(): Promise<void>;

  /**
   * Returns value of Role property.
   *
   * @method OcaRoot#GetRole
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetRole(): Promise<string>;

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
  SetLockNoWrite(): Promise<void>;

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
  LockReadOnly(): Promise<void>;

  /**
   * Returns the current value of the **LockState** property.
   *
   * @method OcaRoot#GetLockState
   * @returns {Promise<OcaLockState>}
   *   A promise which resolves to a single value of type :class:`OcaLockState`.
   */
  GetLockState(): Promise<OcaLockState>;
}

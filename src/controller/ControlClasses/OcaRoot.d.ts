import { PropertyEvent } from '../property_event';
import { OcaClassIdentification } from '../../types/OcaClassIdentification';
import { Event } from '../event';
import { ObjectBase } from '../object_base';
import { RemoteDevice } from '../remote_device';

/**
 * The abstract root class of which all OCA classes derive. It offers basic OCA functionality such as locking an object and generalized data access.
 * @extends ObjectBase
 * @class OcaRoot
 */
export declare class OcaRoot extends ObjectBase {
  /**
   * General event that is emitted when a property changes. In each setter method (of derived classes) this event must be raised with the proper derived event data structure.
   * @member OcaRoot#OnPropertyChanged {Event}
   * General event that is emitted when a property changes. In each setter
   * method (of derived classes) this event must be raised with the proper
   * derived event data structure.
   */
  OnPropertyChanged: Event;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the class identification, a structure that contains the ClassID and ClassVersion. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaRoot#GetClassIdentification
   * @returns {Promise<OcaClassIdentification>}
   *   A promise which resolves to a single value of type :class:`OcaClassIdentification`.
   */
  GetClassIdentification(): Promise<OcaClassIdentification>;

  /**
   * Gets the value of the Lockable property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaRoot#GetLockable
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetLockable(): Promise<boolean>;

  /**
   * Locks the object totally, so that it can only be accessed for reading or writing by the lockholder. If the device is read-only locked (by a prior call to LockReadonly()) when Lock() is called by the same lockholder, the lock state is upgraded to total. If the call is from a session other than the lockholder's, the call fails. The return value indicates whether the operation succeeded.
   *
   * @method OcaRoot#LockTotal
   * @returns {Promise<void>}
   */
  LockTotal(): Promise<void>;

  /**
   * Unlocks the object so that it can be freely accessed again. This method can only succeed if it is called by the lockholder. The return value indicates whether the operation succeeded.
   *
   * @method OcaRoot#Unlock
   * @returns {Promise<void>}
   */
  Unlock(): Promise<void>;

  /**
   * Returns value of Role property. The return value indicates whether the operation succeeded.
   *
   * @method OcaRoot#GetRole
   * @returns {Promise<string>}
   *   A promise which resolves to a single value of type ``string``.
   */
  GetRole(): Promise<string>;

  /**
   * Locks the object so that its properties may only be modified by the lockholder, but others can still retrieve property values. If the device is already locked (by a prior call to Lock() or LockReadonly()) when LockReadonly() is called by the same lockholder, the lock state is set to read-only. If the call is from a session other than the lockholder's, the call fails. The return value indicates whether the operation succeeded.
   *
   * @method OcaRoot#LockReadonly
   * @returns {Promise<void>}
   */
  LockReadonly(): Promise<void>;
}

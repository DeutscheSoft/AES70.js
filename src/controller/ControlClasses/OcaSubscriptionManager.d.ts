import { IOcaEvent } from '../../types/OcaEvent.js';
import { IOcaMethod } from '../../types/OcaMethod.js';
import { IOcaNotificationDeliveryMode } from '../../types/OcaNotificationDeliveryMode.js';
import { IOcaPropertyID } from '../../types/OcaPropertyID.js';
import { IOcaStatus, OcaStatus } from '../../types/OcaStatus.js';
import { OcaSubscriptionManagerState } from '../../types/OcaSubscriptionManagerState.js';
import { Event } from '../event.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaManager } from './OcaManager.js';

/**
 * Manager that collects and controls the event subscriptions of the device.
 *
 *  - Must be instantiated exactly once in every device.
 *
 *  - Object number must be 4.
 *
 *
 * @extends OcaManager
 * @class OcaSubscriptionManager
 */
export declare class OcaSubscriptionManager extends OcaManager {
  /**
   * Event that is raised when the value of the **State** property changes from
   * **Normal **to **EventsDisabled.**
   * @member OcaSubscriptionManager#OnNotificationsDisabled {Event}
   */
  OnNotificationsDisabled: Event;

  /**
   * Event that is raised when the value of the **State** property changes from
   * **EventsDisabled **to **Normal.** Event data includes a lists of which
   * objects changed state during the period that notifications were disabled.
   * @member OcaSubscriptionManager#OnSynchronizeState {Event}
   */
  OnSynchronizeState: Event;
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaSubscriptionManagerState>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Adds an EV1 subscription to an event. The subscription is added for the
   * session on which the command came in. If a subscription identical to the
   * one being requested already exists, an additional one shall not be added.
   * Two subscriptions are identical if the **Event, Subscriber,
   * NotificationDeliveryMode**, and **DestinationInformation** parameters are
   * all identical. **Deprecated** in version 3 of this class, replaced by
   * **AddPropertyChangeSubscription(..).** Deprecated in version 3 of this
   * class, and replaced by **AddSubscription2**.
   *
   * @method OcaSubscriptionManager#AddSubscription
   * @param {IOcaEvent} Event
   * @param {IOcaMethod} Subscriber
   * @param {Uint8Array} SubscriberContext
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  AddSubscription(
    Event: IOcaEvent,
    Subscriber: IOcaMethod,
    SubscriberContext: Uint8Array,
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;

  /**
   * Removes all EV1 subscriptions to the given event with the given
   * **OcaMethod**. **Deprecated** in version 3 of this class, and replaced by
   * **RemoveSubscription2**.
   *
   * @method OcaSubscriptionManager#RemoveSubscription
   * @param {IOcaEvent} Event
   * @param {IOcaMethod} Subscriber
   *
   * @returns {Promise<void>}
   */
  RemoveSubscription(Event: IOcaEvent, Subscriber: IOcaMethod): Promise<void>;

  /**
   * Temporarily disables emitting of event notifications to all subscribers,
   * not just to the subscriber calling this method. Events from the
   * Subscription Manager itself are not disabled. This method can be used if
   * either a controller or the local device knows that it is going to change
   * the state of the device significantly, which could lead to a notification
   * storm of events. Invoking this method will prevent the notification storm.
   * The event '03e01 EventsDisabled' will be raised to notify all controllers
   * of the fact that events are temporarily disabled. The subscription manager
   * will start collecting the object numbers of the objects that raise events,
   * so that it can pass a list of changed objects once the events are
   * re-enabled. The return value indicates if disabling events succeeded.
   *
   * @method OcaSubscriptionManager#DisableNotifications
   * @returns {Promise<void>}
   */
  DisableNotifications(): Promise<void>;

  /**
   * Re-enables the sending of event notifications to all subscribers. When
   * events are re-enabled, the subscription manager will raise the
   * **SynchronizeState** event, passing the list of objects that have changed
   * state. Subsequently, the subscription manager will transmit all
   * notifications as normal. If the connection to the controller that invoked
   * the **DisableEvents()** is lost, this method will be called automatically
   * to prevent the situation in which the raising of events would never be
   * re-enabled.
   *
   * @method OcaSubscriptionManager#ReEnableNotifications
   * @returns {Promise<void>}
   */
  ReEnableNotifications(): Promise<void>;

  /**
   * Adds an EV1 subscription to the **PropertyChanged** event in the object
   * **Emitter** for changes of the property **Property**. If a subscription
   * identical to the one being requested already exists, an additional one
   * shall not be added. Two subscriptions are identical if the **Emitter,
   * Property, Subscriber, SubsciberContext, NotificationDeliveryMode,** and
   * **DestinationInformation** parameters are all identical. **Deprecated** in
   * version 3 of this class, replaced by
   * **AddPropertyChangeSubscription2(..).**
   *
   * @method OcaSubscriptionManager#AddPropertyChangeSubscription
   * @param {number} Emitter
   * @param {IOcaPropertyID} Property
   * @param {IOcaMethod} Subscriber
   * @param {Uint8Array} SubscriberContext
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  AddPropertyChangeSubscription(
    Emitter: number,
    Property: IOcaPropertyID,
    Subscriber: IOcaMethod,
    SubscriberContext: Uint8Array,
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;

  /**
   * Removes any EV1 subscription to a **PropertyChanged** event with the given
   * Emitter, Property, Subscriber, SubscriberContext, NotificationDeliveryMode,
   * and DestinationInformation. **Deprecated** in version 3 of this class,
   * replaced by **RemovePropertyChangeSubscription2(...).**
   *
   * @method OcaSubscriptionManager#RemovePropertyChangeSubscription
   * @param {number} Emitter
   * @param {IOcaPropertyID} Property
   * @param {IOcaMethod} Subscriber
   *
   * @returns {Promise<void>}
   */
  RemovePropertyChangeSubscription(
    Emitter: number,
    Property: IOcaPropertyID,
    Subscriber: IOcaMethod
  ): Promise<void>;

  /**
   * Returns maximum byte length of payload of EV1 subscriber context parameter
   * that this device supports. This returned value shall be either zero or
   * four. If the returned payload length is not zero, it shall be four. No
   * other values shall be allowed, and the returned value shall not change once
   * the device has initialized. **Deprecated** in version 3 of this class. Not
   * used in EV2. NOTE: In AES70-2015, arbitrary subscriber context lengths were
   * allowed; this is no longer true.
   *
   * @method OcaSubscriptionManager#GetMaximumSubscriberContextLength
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetMaximumSubscriberContextLength(): Promise<number>;

  /**
   * Adds an EV2 subscription.
   *
   * @method OcaSubscriptionManager#AddSubscription2
   * @param {IOcaEvent} Event
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  AddSubscription2(
    Event: IOcaEvent,
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;

  /**
   * Removes all EV2 subscriptions with the given **Event**,
   * **NotificationDeliveryMode**, and **DestinationInformation**.
   *
   * @method OcaSubscriptionManager#RemoveSubscription2
   * @param {IOcaEvent} Event
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  RemoveSubscription2(
    Event: IOcaEvent,
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;

  /**
   * Adds an EV2 subscription to the **PropertyChanged** event in the object
   * **Emitter** for changes of the property **Property**. If a subscription
   * identical to the one being requested already exists, an additional one
   * shall not be added and the method shall return the status value
   * **InvalidRequest**. Two subscriptions are identical if the **Emitter,
   * Property, NotificationDeliveryMode,** and **DestinationInformation**
   * parameters are all identical.
   *
   * @method OcaSubscriptionManager#AddPropertyChangeSubscription2
   * @param {number} Emitter
   * @param {IOcaPropertyID} Property
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  AddPropertyChangeSubscription2(
    Emitter: number,
    Property: IOcaPropertyID,
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;

  /**
   * Removes all EV2 subscriptions to **PropertyChanged** events with the given
   * **Emitter**, **Property**, **NotificationDeliveryMode**, and
   * **DestinationInformation**.
   *
   * @method OcaSubscriptionManager#RemovePropertyChangeSubscription2
   * @param {number} Emitter
   * @param {IOcaPropertyID} Property
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  RemovePropertyChangeSubscription2(
    Emitter: number,
    Property: IOcaPropertyID,
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;

  /**
   * Adds a list of EV2 subscriptions. **OcaStatus** return values from this
   * method are as follows:
   *
   *  - **OK**: Requested subscriptions were attempted; all, none, or some
   *    succeeded. Individual subscription result details are returned in
   *    parameter **ResultStatuses**.
   *
   *  - **<anything else>:** Problem - no subscription attempts were made.
   *
   *
   *
   * @method OcaSubscriptionManager#AddSubscription2List
   * @param {IOcaEvent[]} Events
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<OcaStatus[]>}
   *   A promise which resolves to a single value of type :class:`OcaStatus[]`.
   */
  AddSubscription2List(
    Events: IOcaEvent[],
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<OcaStatus[]>;

  /**
   * Removes all EV2 subscriptions in the given list of Events that have the
   * specified **NotificationDeliveryMode** and **DestinationInformation**.
   *
   * @method OcaSubscriptionManager#RemoveSubscription2List
   * @param {IOcaEvent[]} Events
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  RemoveSubscription2List(
    Events: IOcaEvent[],
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;

  /**
   * Adds a list of EV2 property-change subscriptions. **OcaStatus** return
   * values from this method are as follows:
   *
   *  - **OK**: Requested subscriptions were attempted; all, none, or some
   *    succeeded. Individual subscription result details are returned in list
   *    parameter **ResultStatuses**.
   *
   *  - **<anything else>:** Problem - no subscription attempts were made.
   *
   *
   * If a subscription identical to the one being requested already exists, an
   * additional one shall not be added and the method shall return the
   * **ResultStatuses** value **InvalidRequest**. Two subscriptions are
   * identical if the **Emitter, Property, NotificationDeliveryMode,** and
   * **DestinationInformation** parameters are all identical.
   *
   * @method OcaSubscriptionManager#AddPropertyChangeSubscription2List
   * @param {number[]} Emitters
   * @param {IOcaPropertyID[]} Properties
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   * @param {IOcaStatus[]} ResultStatuses
   *
   * @returns {Promise<void>}
   */
  AddPropertyChangeSubscription2List(
    Emitters: number[],
    Properties: IOcaPropertyID[],
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array,
    ResultStatuses: IOcaStatus[]
  ): Promise<void>;

  /**
   * Removes all EV2 property-change subscriptions in the given lists of Events
   * and Properties that have the specified **NotificationDeliveryMode** and
   * **DestinationInformation**.
   *
   * @method OcaSubscriptionManager#RemovePropertyChangeSubscription2List
   * @param {number[]} Emitters
   * @param {IOcaPropertyID[]} Properties
   * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
   * @param {Uint8Array} DestinationInformation
   *
   * @returns {Promise<void>}
   */
  RemovePropertyChangeSubscription2List(
    Emitters: number[],
    Properties: IOcaPropertyID[],
    NotificationDeliveryMode: IOcaNotificationDeliveryMode,
    DestinationInformation: Uint8Array
  ): Promise<void>;
}

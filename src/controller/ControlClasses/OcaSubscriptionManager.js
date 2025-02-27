import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaEvent } from '../../OCP1/OcaEvent.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMethod } from '../../OCP1/OcaMethod.js';
import { OcaNotificationDeliveryMode } from '../../OCP1/OcaNotificationDeliveryMode.js';
import { OcaObjectListEventData } from '../../OCP1/OcaObjectListEventData.js';
import { OcaPropertyID } from '../../OCP1/OcaPropertyID.js';
import { OcaStatus } from '../../OCP1/OcaStatus.js';
import { OcaSubscriptionManagerState } from '../../OCP1/OcaSubscriptionManagerState.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
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
export const OcaSubscriptionManager = make_control_class(
  'OcaSubscriptionManager',
  3,
  '\u0001\u0003\u0004',
  4,
  OcaManager,
  [
    [
      'AddSubscription',
      3,
      1,
      [OcaEvent, OcaMethod, OcaBlob, OcaNotificationDeliveryMode, OcaBlob],
      [],
    ],
    ['RemoveSubscription', 3, 2, [OcaEvent, OcaMethod], []],
    ['DisableNotifications', 3, 3, [], []],
    ['ReEnableNotifications', 3, 4, [], []],
    [
      'AddPropertyChangeSubscription',
      3,
      5,
      [
        OcaUint32,
        OcaPropertyID,
        OcaMethod,
        OcaBlob,
        OcaNotificationDeliveryMode,
        OcaBlob,
      ],
      [],
    ],
    [
      'RemovePropertyChangeSubscription',
      3,
      6,
      [OcaUint32, OcaPropertyID, OcaMethod],
      [],
    ],
    ['GetMaximumSubscriberContextLength', 3, 7, [], [OcaUint16]],
    [
      'AddSubscription2',
      3,
      8,
      [OcaEvent, OcaNotificationDeliveryMode, OcaBlob],
      [],
    ],
    [
      'RemoveSubscription2',
      3,
      9,
      [OcaEvent, OcaNotificationDeliveryMode, OcaBlob],
      [],
    ],
    [
      'AddPropertyChangeSubscription2',
      3,
      10,
      [OcaUint32, OcaPropertyID, OcaNotificationDeliveryMode, OcaBlob],
      [],
    ],
    [
      'RemovePropertyChangeSubscription2',
      3,
      11,
      [OcaUint32, OcaPropertyID, OcaNotificationDeliveryMode, OcaBlob],
      [],
    ],
    [
      'AddSubscription2List',
      3,
      12,
      [OcaList(OcaEvent), OcaNotificationDeliveryMode, OcaBlob],
      [OcaList(OcaStatus)],
    ],
    [
      'RemoveSubscription2List',
      3,
      13,
      [OcaList(OcaEvent), OcaNotificationDeliveryMode, OcaBlob],
      [],
    ],
    [
      'AddPropertyChangeSubscription2List',
      3,
      14,
      [
        OcaList(OcaUint32),
        OcaList(OcaPropertyID),
        OcaNotificationDeliveryMode,
        OcaBlob,
        OcaList(OcaStatus),
      ],
      [],
    ],
    [
      'RemovePropertyChangeSubscription2List',
      3,
      15,
      [
        OcaList(OcaUint32),
        OcaList(OcaPropertyID),
        OcaNotificationDeliveryMode,
        OcaBlob,
      ],
      [],
    ],
  ],
  [['State', [OcaSubscriptionManagerState], 3, 1, false, false, null]],
  [
    ['NotificationsDisabled', 3, 1, []],
    ['SynchronizeState', 3, 2, [OcaObjectListEventData]],
  ]
);

/**
 * Adds an EV1 subscription to an event. The subscription is added for the
 * session on which the command came in. If a subscription identical to the one
 * being requested already exists, an additional one shall not be added. Two
 * subscriptions are identical if the **Event, Subscriber,
 * NotificationDeliveryMode**, and **DestinationInformation** parameters are all
 * identical. **Deprecated** in version 3 of this class, replaced by
 * **AddPropertyChangeSubscription(..).** Deprecated in version 3 of this class,
 * and replaced by **AddSubscription2**.
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
/**
 * Temporarily disables emitting of event notifications to all subscribers, not
 * just to the subscriber calling this method. Events from the Subscription
 * Manager itself are not disabled. This method can be used if either a
 * controller or the local device knows that it is going to change the state of
 * the device significantly, which could lead to a notification storm of events.
 * Invoking this method will prevent the notification storm. The event '03e01
 * EventsDisabled' will be raised to notify all controllers of the fact that
 * events are temporarily disabled. The subscription manager will start
 * collecting the object numbers of the objects that raise events, so that it
 * can pass a list of changed objects once the events are re-enabled. The return
 * value indicates if disabling events succeeded.
 *
 * @method OcaSubscriptionManager#DisableNotifications
 * @returns {Promise<void>}
 */
/**
 * Re-enables the sending of event notifications to all subscribers. When events
 * are re-enabled, the subscription manager will raise the **SynchronizeState**
 * event, passing the list of objects that have changed state. Subsequently, the
 * subscription manager will transmit all notifications as normal. If the
 * connection to the controller that invoked the **DisableEvents()** is lost,
 * this method will be called automatically to prevent the situation in which
 * the raising of events would never be re-enabled.
 *
 * @method OcaSubscriptionManager#ReEnableNotifications
 * @returns {Promise<void>}
 */
/**
 * Adds an EV1 subscription to the **PropertyChanged** event in the object
 * **Emitter** for changes of the property **Property**. If a subscription
 * identical to the one being requested already exists, an additional one shall
 * not be added. Two subscriptions are identical if the **Emitter, Property,
 * Subscriber, SubsciberContext, NotificationDeliveryMode,** and
 * **DestinationInformation** parameters are all identical. **Deprecated** in
 * version 3 of this class, replaced by **AddPropertyChangeSubscription2(..).**
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
/**
 * Returns maximum byte length of payload of EV1 subscriber context parameter
 * that this device supports. This returned value shall be either zero or four.
 * If the returned payload length is not zero, it shall be four. No other values
 * shall be allowed, and the returned value shall not change once the device has
 * initialized. **Deprecated** in version 3 of this class. Not used in EV2.
 * NOTE: In AES70-2015, arbitrary subscriber context lengths were allowed; this
 * is no longer true.
 *
 * @method OcaSubscriptionManager#GetMaximumSubscriberContextLength
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
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
/**
 * Adds an EV2 subscription to the **PropertyChanged** event in the object
 * **Emitter** for changes of the property **Property**. If a subscription
 * identical to the one being requested already exists, an additional one shall
 * not be added and the method shall return the status value **InvalidRequest**.
 * Two subscriptions are identical if the **Emitter, Property,
 * NotificationDeliveryMode,** and **DestinationInformation** parameters are all
 * identical.
 *
 * @method OcaSubscriptionManager#AddPropertyChangeSubscription2
 * @param {number} Emitter
 * @param {IOcaPropertyID} Property
 * @param {IOcaNotificationDeliveryMode} NotificationDeliveryMode
 * @param {Uint8Array} DestinationInformation
 *
 * @returns {Promise<void>}
 */
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
/**
 * Adds a list of EV2 property-change subscriptions. **OcaStatus** return values
 * from this method are as follows:
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
 * **ResultStatuses** value **InvalidRequest**. Two subscriptions are identical
 * if the **Emitter, Property, NotificationDeliveryMode,** and
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
/**
 * Event that is raised when the value of the **State** property changes from
 * **Normal **to **EventsDisabled.**
 * @member OcaSubscriptionManager#OnNotificationsDisabled {Event}
 */
/**
 * Event that is raised when the value of the **State** property changes from
 * **EventsDisabled **to **Normal.** Event data includes a lists of which
 * objects changed state during the period that notifications were disabled.
 * @member OcaSubscriptionManager#OnSynchronizeState {Event}
 */
/**
 * This event is emitted when the property ``State`` changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * Events enabled or disabled. When events are disabled, (1) Only notification
 * from the subscription manager itself are sent to subscribers, and (2) the
 * subscription manager saves the object numbers of all objects that raise
 * events while notifications are disabled. The saved numbers are eventually
 * returned by the **SynchronizeState** event that occurs when notifications are
 * re-enabled.
 *
 * @member {PropertyEvent<OcaSubscriptionManagerState>} OcaSubscriptionManager#OnStateChanged
 */

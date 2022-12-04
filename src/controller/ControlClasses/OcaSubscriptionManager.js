import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaEvent } from '../../OCP1/OcaEvent.js';
import { OcaMethod } from '../../OCP1/OcaMethod.js';
import { OcaNotificationDeliveryMode } from '../../OCP1/OcaNotificationDeliveryMode.js';
import { OcaObjectListEventData } from '../../OCP1/OcaObjectListEventData.js';
import { OcaPropertyID } from '../../OCP1/OcaPropertyID.js';
import { OcaSubscriptionManagerState } from '../../OCP1/OcaSubscriptionManagerState.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaManager } from './OcaManager.js';

/**
 * Manager that collects and controls the event subscriptions of the device.
 *
 *  - Must be instantiated once in every device that supports subscriptions.
 *
 *
 *  - May be instantiated at most once in any device.
 *
 *
 *  - If instantiated, must have object number 4.
 *   Absence of an  **OcaSubscriptionManager** object signifies that the device does not support event subscriptions.
 * @extends OcaManager
 * @class OcaSubscriptionManager
 */
export const OcaSubscriptionManager = make_control_class(
  'OcaSubscriptionManager',
  3,
  '\u0001\u0003\u0004',
  2,
  OcaManager,
  [
    ['RemoveSubscription', 3, 2, [OcaEvent, OcaMethod], []],
    [
      'AddSubscription',
      3,
      1,
      [OcaEvent, OcaMethod, OcaBlob, OcaNotificationDeliveryMode, OcaBlob],
      [],
    ],
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
  ],
  [['State', [OcaSubscriptionManagerState], 3, 1, false, false, null]],
  [
    ['NotificationsDisabled', 3, 1, []],
    ['SynchronizeState', 3, 2, [OcaObjectListEventData]],
  ]
);

/**
 * Removes all subscriptions to the given event with the given  **OcaMethod** . The return value indicates whether the subscription(s) was (were) successfully removed.
 *
 * @method OcaSubscriptionManager#RemoveSubscription
 * @param {IOcaEvent} Event
 * @param {IOcaMethod} Subscriber
 *
 * @returns {Promise<void>}
 */
/**
 * Adds a subscription to an event. The subscription is added for the session on which the command came in. If a subscription identical to the one being requested already exists, an additional one shall not be added. Two subscriptions are identical if the  **Event, Subscriber, NotificationDeliveryMode** , and  **DestinationInformation** parameters are all identical. The return value indicates whether the subscription succeeded.
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
 * Temporarily disables emitting of event notifications (to all subscribers, not just to the subscriber calling this method). Events from the Subscription Manager itself are not disabled. This method can be used if either a controller or the local device knows that it is going to change the state of the device significantly, which could lead to a notification storm of events. Invoking this method will prevent the notification storm. The event '03e01 EventsDisabled' will be raised to notify all controllers of the fact that events are temporarily disabled. The subscription manager will start collecting the object numbers of the objects that raise events, so that it can pass a list of changed objects once the events are re-enabled. The return value indicates if disabling events succeeded.
 *
 * @method OcaSubscriptionManager#DisableNotifications
 * @returns {Promise<void>}
 */
/**
 * Re-enables the sending of event notifications to all subscribers. When events are re-enabled, the subscription manager will raise the  **SynchronizeState** event, passing the list of objects that have changed state. Subsequently, the subscription manager will transmit all notifications as normal. If the connection to the controller that invoked the DisableEvents() is lost, this method will be called automatically to prevent the situation in which the raising of events would never be re-enabled. The return value indicates if re-enabling the event-based events succeeded.
 *
 * @method OcaSubscriptionManager#ReEnableNotifications
 * @returns {Promise<void>}
 */
/**
 * Adds a subscription to the PropertyChanged event in the object Emitter for changes of the property Property. If the NotificationDeliveryMode is Fast, the subscription is added for the session on which the command came in. If a subscription identical to the one being requested already exists, an additional one shall not be added. Two subscriptions are identical if the Emitter, Property, Subscriber, SubsciberContext, NotificationDeliveryMode, and DestinationInformation parameters are all identical. The return value indicates whether the subscription succeeded. Added in v2 of this class, in AES70-2017.
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
 * Removes any subscription to a PropertyChanged event with the given Emitter, Property, Subscriber, SubscriberContext, NotificationDeliveryMode, and DestinationInformation. The return value indicates whether the subscription(s) was (were) successfully removed. Added in v2 of this class, in AES70-2017.
 *
 * @method OcaSubscriptionManager#RemovePropertyChangeSubscription
 * @param {number} Emitter
 * @param {IOcaPropertyID} Property
 * @param {IOcaMethod} Subscriber
 *
 * @returns {Promise<void>}
 */
/**
 * Returns maximum byte length of payload of subscriber context parameter that this device supports. This returned value shall be either zero or four. If the returned payload length is not zero, it shall be four. No other values shall be allowed, and the returned value shall not change once the device has initialized. NOTE: In AES70-2015, arbitrary subscriber context lengths were allowed; this is no longer true.
 *
 * @method OcaSubscriptionManager#GetMaximumSubscriberContextLength
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Event that is raised when the value of the  **State** property changes from  **Normal ** to  **EventsDisabled.**
 * @member OcaSubscriptionManager#OnNotificationsDisabled {Event}
 * Event that is raised when the value of the <b>State </b>property
 * changes from <b><i>Normal </i></b>to <b><i>EventsDisabled.</i></b>
 */
/**
 * Event that is raised when the value of the  **State** property changes from  **EventsDisabled ** to  **Normal.**  Event data includes a lists of which objects changed state during the period that notifications were disabled.
 * @member OcaSubscriptionManager#OnSynchronizeState {Event}
 * Event that is raised when the value of the <b>State </b>property
 * changes from <b><i>EventsDisabled </i></b>to <b><i>Normal.</i></b>
 * Event data includes a lists of which objects changed state during the
 * period that notifications were disabled.
 */
/**
 * This event is emitted when the property State changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * Events enabled or disabled. When events are disabled, (1) Only
 * notification from the subscription manager itself are sent to
 * subscribers, and (2) the subscription manager saves the object numbers
 * of all objects that raise events while notifications are disabled. The
 * saved numbers are eventually returned by the <b>SynchronizeState
 * </b>event that occurs when notifications are re-enabled.
 *
 * @member {PropertyEvent<OcaSubscriptionManagerState>} OcaSubscriptionManager#OnStateChanged
 */

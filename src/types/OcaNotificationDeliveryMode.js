/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enum for subscriptions that specifies whether its notification messages are
 * to be delivered by normal means (e.g. TCP) or lightweight means (e.g. UDP).
 * @class OcaNotificationDeliveryMode
 */
export class OcaNotificationDeliveryMode extends Enum({
  Normal: 1,
  Lightweight: 2,
  Reliable: 1,
  Fast: 2,
}) {}

/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaNotificationDeliveryMode}
 * @member Normal
 * @memberof OcaNotificationDeliveryMode
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaNotificationDeliveryMode}
 * @member Lightweight
 * @memberof OcaNotificationDeliveryMode
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``1``.
 * @type {OcaNotificationDeliveryMode}
 * @member Reliable
 * @memberof OcaNotificationDeliveryMode
 * @static
 */
/**
 * Singleton object corresponding to the entry with value ``2``.
 * @type {OcaNotificationDeliveryMode}
 * @member Fast
 * @memberof OcaNotificationDeliveryMode
 * @static
 */

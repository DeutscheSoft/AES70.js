import { Enum8 } from './Enum8.js';

/**
 * Enum for subscriptions that specifies whether its notification
 * messages are to be delivered by reliable means (e.g. TCP) or fast
 * means (e.g. UDP).
 * @category Types
 * @class OcaNotificationDeliveryMode
 * @extends Enum8
 */
export const OcaNotificationDeliveryMode = Enum8({
  Reliable: 1,
  Fast: 2,
});

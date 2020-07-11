/*
 * This file has been generated.
 */
import { Enum } from './Enum.js';

/**
 * Enum for subscriptions that specifies whether its notification
 * messages are to be delivered by reliable means (e.g. TCP) or fast
 * means (e.g. UDP).
 */
export class OcaNotificationDeliveryMode extends Enum({
  Reliable: 1,
  Fast: 2,
}) {}

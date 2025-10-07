import { Enum } from '../types/Enum.js';
import { Enum8 } from '../OCP1/Enum8.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaBlob } from '../OCP1/OcaBlob.js';

export class OcaNotificationExceptionType extends Enum({
  Unspecified: 0,
  // Device canceled subscription
  CanceledByDevice: 1,
  // Object was deleted
  ObjectDeleted: 2,
  // Something went wrong in the Device.
  DeviceError: 3,
}) {}

const OcaNotificationExceptionTypeDecoder = Enum8(OcaNotificationExceptionType);

function parseNotificationExceptionData(buffer) {
  const view = new DataView(buffer);
  let pos = 0;

  let type, try_again, data;

  [pos, type] = OcaNotificationExceptionTypeDecoder.decodeFrom(view, pos);
  [pos, try_again] = OcaBoolean.decodeFrom(view, pos);
  [pos, data] = OcaBlob.decodeFrom(view, pos);

  return [type, try_again, data];
}

/**
 * Error raised by remove events via a notification
 * exception.
 *
 * @property {Notification2} notification - The notification object.
 * @property {OcaNotificationExceptionType} type - The notification exception type.
 */
export class NotificationError extends Error {
  constructor(notification) {
    super(`Notification failed with an exception.`);
    this.name = 'aes70.NotificationError';
    this.notification = notification;

    try {
      const [type, try_again, data] = parseNotificationExceptionData(
        notification.parameters
      );
      this.type = type;
      this.try_again = try_again;
      this.data = data;
    } catch (error) {
      console.error('Failed to decode notification exception data.');
      this.type = OcaNotificationExceptionType.Unspecified;
      this.try_again = false;
      this.data = null;
    }
  }

  is_object_deleted() {
    this.type === OcaNotificationExceptionType.ObjectDeleted;
  }
}

import { BaseEvent } from './base_event.js';
import { NotificationError } from './notification_error.js';

const emptyBuffer = new ArrayBuffer();

/**
 * Class used to represent all events specified by the OCA standard.
 *
 * @extends BaseEvent
 */
export class Event extends BaseEvent {
  constructor(object, id, argumentTypes) {
    super(object, id, argumentTypes);
    this.callback = (ok, notification) => {
      if (!ok) {
        this.emit_error(notification);
        return;
      }

      if (!this.has_subscribers()) return;

      if (notification.exception) {
        this.emit_error(new NotificationError(notification));
        return;
      }

      const args = new Array(argumentTypes.length);
      // Events without arguments have parameters = null
      const data = new DataView(notification.parameters || emptyBuffer);

      for (let pos = 0, i = 0; i < argumentTypes.length; i++) {
        let tmp;
        [pos, tmp] = argumentTypes[i].decodeFrom(data, pos);
        args[i] = tmp;
      }
      this.emit(args);
    };
  }

  do_subscribe() {
    this.object.device.add_subscription(this.GetOcaEvent(), this.callback);
  }

  do_unsubscribe() {
    this.object.device.remove_subscription(this.GetOcaEvent(), this.callback);
  }
}

import { BaseEvent } from './base_event.js';
import { error } from '../log.js';

const emptyBuffer = new ArrayBuffer();

/**
 * Class used to represent all events specified by the OCA standard.
 *
 * @extends BaseEvent
 */
export class Event extends BaseEvent {
  constructor(object, id, argumentTypes) {
    super(object, id, argumentTypes);
    this.callback = (notification) => {
      if (!this.handlers.size) return;

      const args = new Array(argumentTypes.length);
      // Events without arguments have parameters = null
      const data = new DataView(notification.parameters || emptyBuffer);

      for (let pos = 0, i = 0; i < argumentTypes.length; i++) {
        let tmp;
        [pos, tmp] = argumentTypes[i].decodeFrom(data, pos);
        args[i] = tmp;
      }
      const object = this.object;
      this.handlers.forEach(function (callback) {
        try {
          callback.apply(object, args);
        } catch (e) {
          error(e);
        }
      });
    };
  }

  do_subscribe() {
    return this.object.device.add_subscription(
      this.GetOcaEvent(),
      this.callback
    );
  }

  do_unsubscribe(callback) {
    return this.object.device.remove_subscription(
      this.GetOcaEvent(),
      this.callback
    );
  }
}

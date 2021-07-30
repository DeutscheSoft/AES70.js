import { OcaEvent } from '../types/OcaEvent.js';

/**
 * Base class for all events.
 */
export class BaseEvent {
  constructor(object, id, argumentTypes) {
    this.object = object;
    this.id = id;
    this.handlers = new Set();
    this.result = null;
    this.argumentTypes = argumentTypes;
  }

  GetOcaEvent() {
    return new OcaEvent(this.object.ObjectNumber, this.id);
  }

  do_subscribe() {}
  do_unsubscribe() {}

  /**
   * Subscribe to this event.
   * @param {function} callback
   */
  subscribe(callback) {
    this.handlers.add(callback);

    if (this.handlers.size === 1)
      return (this.result = this.do_subscribe().then(() => {
        this.result = null;
        return true;
      }));

    if (this.result !== null) return this.result;

    return Promise.resolve(true);
  }

  /**
   * Unsubscribe from this event.
   * @param {function} callback
   */
  unsubscribe(callback) {
    this.handlers.delete(callback);

    if (!this.handlers.size) this.do_unsubscribe().catch(function () {});

    return Promise.resolve(true);
  }

  /**
   * Unsubscribe all event handlers.
   */
  Dipose() {
    this.handlers.clear();

    if (this.handlers.size) this.do_unsubscribe().catch(function () {});
  }
}

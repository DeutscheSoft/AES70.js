import { CloseError } from '../close_error.js';
import { OcaEvent } from '../types/OcaEvent.js';

class EventSubscriber {
  constructor(callback, error_callback) {
    this.callback = callback;
    this.failure_callback = error_callback;
  }

  emit(ctx, results) {
    try {
      this.callback.apply(ctx, results);
    } catch (error) {
      console.error('Exception thrown by event handler: ', error);
    }
  }

  emit_error(ctx, error) {
    if (this.error_callback) {
      try {
        this.error_callback.call(ctx, error);
      } catch (e) {
        console.error('Exception thrown by error event handler: ', e);
      }
    } else {
      if (error instanceof CloseError) return;
      console.warn('No handler for error', error);
    }
  }
}

/**
 * Base class for all events.
 */
export class BaseEvent {
  constructor(object, id, argumentTypes) {
    this.object = object;
    this.id = id;
    this.subscribers = [];
    this.result = null;
    this.argumentTypes = argumentTypes;
  }

  has_subscribers() {
    return this.subscribers.length > 0;
  }

  emit(results) {
    this.subscribers.forEach((subscriber) => {
      subscriber.emit(this.object, results);
    });
  }

  emit_error(error) {
    this.subscribers.forEach((subscriber) => {
      subscriber.emit_error(this.object, error);
    });
    this.subscribers.splice(0, this.subscribers.length);
  }

  GetOcaEvent() {
    return new OcaEvent(this.object.ObjectNumber, this.id);
  }

  do_subscribe() {}
  do_unsubscribe() {}

  _remove_subscriber(index) {
    this.subscribers.splice(index, 1);

    if (!this.subscribers.length) this.do_unsubscribe();
  }

  /**
   * Subscribe to this event.
   * @param {function} callback
   */
  subscribe(callback, failure_callback) {
    const subscriber = new EventSubscriber(callback, failure_callback);
    this.subscribers.push(subscriber);

    if (this.subscribers.length === 1) {
      this.do_subscribe();
    }

    return () => {
      const index = this.subscribers.indexOf(subscriber);
      if (index === -1) return;
      this._remove_subscriber(index);
    };
  }

  /**
   * Unsubscribe from this event.
   * @param {function} callback
   * @deprecated Use the cleanup handler returned from
   *  subscriber() instead.
   */
  unsubscribe(callback) {
    const index = this.subscribers.findIndex(
      (subscriber) => subscriber.callback == callback
    );

    if (index === -1) {
      throw new Error('Subscriber does not exist.');
    }

    this._remove_subscriber(index);
  }
}

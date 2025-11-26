/**
 * Basic event handling class.
 */
export class Events {
  constructor() {
    this.event_handlers = new Map();
    this.event_handlers_cleared = false;
  }

  /**
   * Emit an event.
   *
   * @param {string} name - Name of the event.
   * @param {...*} args - Extra arguments.
   */
  emit(name) {
    const handlers = this.event_handlers.get(name);
    const args = Array.prototype.slice.call(arguments, 1);

    if (!handlers) return;

    handlers.forEach((cb) => {
      try {
        cb.apply(this, args);
      } catch (e) {
        console.warn('ERROR when calling %o: %o', cb, e);
      }
    });
  }

  /**
   * Subscribe to an event.
   *
   * @param {string} name - Name of the event.
   * @param {Function} cb - Callback function.
   */
  on(name, cb) {
    if (typeof name !== 'string')
      throw new TypeError('Event name must be a string.');
    if (typeof cb !== 'function')
      throw new TypeError('Event handler must be a function.');
    let handlers = this.event_handlers.get(name);

    if (!handlers) {
      this.event_handlers.set(name, (handlers = new Set()));
    }

    handlers.add(cb);
  }

  addEventListener(name, cb) {
    this.on(name, cb);
  }

  /**
   * Removes an event handler.
   *
   * @param {string} name - Name of the event.
   * @param {Function} cb - Callback function.
   */
  removeEventListener(name, cb) {
    const handlers = this.event_handlers.get(name);

    if (!handlers || !handlers.has(cb)) {
      if (!this.event_handlers_cleared) {
        console.warn('removeEventListeners(): not installed:', name, cb);
      }
      return;
    }

    handlers.delete(cb);
  }

  /**
   * Removes an event handler.
   *
   * @param {string} name
   * @param {Function} cb
   */
  off(name, cb) {
    this.removeEventListener(name, cb);
  }

  /**
   * Removes all event listeners.
   */
  removeAllEventListeners() {
    this.event_handlers.clear();
    this.event_handlers_cleared = true;
  }

  /**
   *
   * @param {string} name
   * @param {Function} cb
   */
  subscribe(name, cb) {
    this.on(name, cb);
    return () => {
      if (name === undefined) return;
      this.off(name, cb);
      name = undefined;
    };
  }
}

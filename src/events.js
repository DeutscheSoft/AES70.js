/**
 * Basic event handling class.
 */
export class Events
{
  constructor() {
    this.event_handlers = new Map();
  }

  /**
   * Emit an event.
   *
   * @param {String} name - Name of the event.
   * @param {...*} args - Extra arguments.
   */
  emit(name)
  {
    const handlers = this.event_handlers.get(name);
    const args = Array.prototype.slice.call(arguments, 1);

    if (!handlers) return;

    handlers.forEach((cb) => {
      try {
        cb.apply(this, args);
      } catch (e) {
        console.warn("ERROR when calling %o: %o", cb, e);
      }
    });
  }

  /**
   * Register for an event.
   *
   * @param {String} name - Name of the event.
   * @param {Function} cb - Callback function.
   */
  on(name, cb)
  {
    let handlers = this.event_handlers.get(name);

    if (!handlers)
    {
      this.event_handlers.set(name, handlers = new Set());
    }

    handlers.add(cb);
  }

  addEventListener(name, cb) {
    this.on(name, cb);
  }

  /**
   * Removes an event handler.
   *
   * @param {String} name - Name of the event.
   * @param {Function} cb - Callback function.
   */
  removeEventListener(name, cb)
  {
    const handlers = this.event_handlers.get(name);

    if (!handlers || !handlers.has(cb))
    {
      throw new Error('removeEventListeners(): not installed.');
    }

    handlers.delete(cb);
  }
}


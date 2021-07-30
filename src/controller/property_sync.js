import { Arguments } from './arguments.js';
import { OcaPropertyChangeType } from '../types/OcaPropertyChangeType.js';

/**
 * Objects of this class can be used to keep a synchronized object containing
 * all properties of a remote OCA object. Instances of this class are usually
 * created by calling {@link ObjectBase#GetPropertySync()}.
 *
 * After {@link PropertySync#sync} has completed, all properties will be kept
 * synchronized. Setting properties in this object will try to set them to the
 * same value in the remote object.
 *
 * Remember to call {@link PropertySync#Dispose} when this object is no longer
 * needed. This will unsubscribe all event listeners.
 */
export class PropertySync {
  init(o) {
    this.o = o;
    this.values = [];
    this.synchronized = false;
    this.subscriptions = [];
  }

  /**
   * Starts synchronizing the properties in this object with the corresponding
   * ones in the remote instance.
   *
   * @returns {Promise<void>}
   */
  sync() {
    if (this.synchronized) return Promise.resolve();

    let index = 0;
    const tasks = [];

    this.o.get_properties().forEach((prop) => {
      const getter = prop.getter(this.o);

      if (!getter) return;

      const event = prop.event(this.o);

      const change_handler = function (index, value, changeType) {
        if (changeType !== OcaPropertyChangeType.CurrentChanged) return;

        this.values[index] = value;
      };

      const get_handler = function (index, value) {
        if (value instanceof Arguments) value = value.item(0);
        this.values[index] = value;
      };

      if (event) {
        const cb = change_handler.bind(this, index);
        // NOTE: we do not want to wait for the promise to resolve
        // before storing this unsubscription handler because that
        // would have a potential race condition.
        this.subscriptions.push(event.unsubscribe.bind(event, cb));
        tasks.push(event.subscribe(cb).catch(function () {}));
      }

      tasks.push(getter().then(get_handler.bind(this, index), function () {}));

      index++;
    });

    return Promise.all(tasks);
  }

  /**
   * Iterate over all properties.
   *
   * @param {Function} cb - Callback functions, Will be called with value and
   *                        property name as arguments.
   * @param {Object} ctx - The context to call the callback in. Defaults to
   *                       this.
   */
  forEach(cb, ctx) {
    let index = 0;

    if (!ctx) ctx = this;

    this.o.get_properties().forEach((prop) => {
      const getter = prop.getter(this.o);

      if (!getter) return;

      cb.call(ctx, this.values[index], prop.name);

      index++;
    });
  }

  /**
   * Dispose of this object. Will unsubscribe all event handlers.
   */
  Dispose() {
    this.o = null;
    this.subscriptions.forEach((cb) => cb());
    this.subscriptions = null;
  }
}

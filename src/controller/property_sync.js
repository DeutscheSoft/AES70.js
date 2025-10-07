import { Arguments } from './arguments.js';
import { OcaPropertyChangeType } from '../types/OcaPropertyChangeType.js';
import { observeProperty } from './observeProperty.js';
import { RemoteError } from './remote_error.js';

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

    let i = 0;
    const tasks = [];

    this.o.get_properties().forEach((prop) => {
      const getter = prop.getter(this.o);

      if (!getter) return;

      const index = i++;

      const task = new Promise((resolve, reject) => {
        const unsubscribe = observeProperty(this.o, prop, (ok, result) => {
          if (ok) {
            this.values[index] =
              result instanceof Arguments ? result.item(0) : result;
            resolve();
          } else if (result instanceof RemoteError) {
            resolve();
          }
        });
        this.subscriptions.push(unsubscribe);
      });
      tasks.push(task);
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

import { Arguments } from './arguments.js';
import { observeProperty } from './observeProperty.js';

export class PropertyObserver {
  constructor(o, propertyName, cacheSubscriptions) {
    this.o = o;
    this.propertyName = propertyName;
    this.cacheSubscriptions = cacheSubscriptions;
    this.property = o.get_properties().find_property(propertyName);
    this._subscribers = [];
    this._currentValue = null;
    this._unsubscribe = null;

    if (!this.property)
      throw new Error(
        `Could not find property ${propertyName} in ${o.ClassName}`
      );
  }

  callSubscriber(cb, changeIndex) {
    try {
      cb(true, this._currentValue, changeIndex);
    } catch (error) {
      console.error('Subscriber to', this, 'threw and exception', error);
    }
  }

  subscribe(callback) {
    this._subscribers.push(callback);

    if (this._unsubscribe === null) {
      this._unsubscribe = observeProperty(
        this.o,
        this.property,
        (ok, result, changeIndex) => {
          if (ok) {
            this._currentValue = result;
            const subscribers = this._subscribers;
            if (!subscribers.length) this.unsubscribeAll();
            subscribers.forEach((cb) => this.callSubscriber(cb, changeIndex));
          }
        }
      );
    } else if (this._currentValue !== null) {
      this.callSubscriber(callback);
    }

    return () => {
      this._subscribers = this._subscribers.filter(
        (entry) => entry !== callback
      );
      if (this.cacheSubscriptions) return;
      if (!this._subscribers.length) this.unsubscribeAll();
    };
  }

  subscribeReturnValue(index, callback) {
    return this.subscribe((ok, value, changeIndex) => {
      if (!ok) {
        callback(ok, value);
      } else {
        if (changeIndex >= 0 && changeIndex !== index) return;
        if (value instanceof Arguments) {
          callback(true, value.item(index));
        } else {
          callback(false, new Error(`Cannot index ${value} with ${index}.`));
        }
      }
    });
  }

  subscribeCurrent(callback) {
    return this.subscribeReturnValue(0, callback);
  }

  subscribeMin(callback) {
    return this.subscribeReturnValue(1, callback);
  }

  subscribeMax(callback) {
    return this.subscribeReturnValue(2, callback);
  }

  subscribeValue(callback) {
    return this.subscribe((ok, value, changeIndex) => {
      if (ok) {
        if (value instanceof Arguments) {
          if (changeIndex > 0) return;
          callback(ok, value.item(0));
        } else {
          callback(ok, value);
        }
      } else {
        callback(ok, value);
      }
    });
  }

  unsubscribeAll() {
    this._subscribers.length = 0;
    this._currentValue = null;
    const cleanup = this._unsubscribe;
    if (cleanup) {
      try {
        cleanup();
      } catch (error) {
        console.error('Unsubscribe in', this, 'threw an exception', error);
      }
    }
  }

  dispose() {
    this.unsubscribeAll();
  }
}

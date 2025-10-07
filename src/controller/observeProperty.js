import { Arguments } from './arguments.js';

/**
 * Observe a property in an object.
 *
 * The callback function is called when a property value or change is received. In
 * that case the callback is called with the arguments `true, value, changeIndex`. When an
 * error occurs, e.g. when fetching the initial property value using the corresponding
 * getter, the callback is called with arguments `false, Error`.
 *
 * The meaning of the changeIndex argument is meaningful in situations where a property has
 * associated min and max value. In that situation the value received by the callback is
 * the return value of the getter, which is an instance of Arguments. When either the property
 * itself or min/max changes, the changeIndex will be the corresponding index in the arguments
 * list. If the property has no min and max or when the initial value is returned from the
 * getter, the value of changeIndex is undefined.
 *
 * @param {ObjectBase} o The remote object.
 * @param {string|Property} property
 * @param {Function} callback The callback function
 * @returns An unsubscribe/cleanup function.
 */
export function observeProperty(o, property, callback) {
  let propertyName;

  if (typeof property === 'string') {
    propertyName = property;
    property = o.get_properties().find_property(propertyName);

    if (!property)
      throw new Error(
        `Could not find property ${propertyName} in ${o.ClassName}`
      );
  } else {
    propertyName = property.name;
  }

  if (property.static) {
    callback(true, o[propertyName]);
    return () => {};
  }

  let lastValue = null;

  const notify = (changeIndex) => {
    try {
      callback(true, lastValue, changeIndex);
    } catch (error) {
      console.error(
        'Subscriber',
        callback,
        'to property',
        propertyName,
        'in',
        o,
        'threw exception',
        error
      );
    }
  };

  const eventCallback = (value, changeType, eventId) => {
    if (lastValue === null) return;
    switch (changeType.value) {
      case 1 /* OcaPropertyChangeType.CurrentChanged*/:
        if (lastValue instanceof Arguments) {
          lastValue.values[0] = value;
          notify(0);
          return;
        } else {
          lastValue = value;
          notify();
          return;
        }
        break;
      case 2 /*OcaPropertyChangeType.MinChanged*/:
        if (lastValue instanceof Arguments) {
          lastValue.values[1] = value;
          notify(1);
          return;
        }
        break;
      case 3 /*OcaPropertyChangeType.MaxChanged*/:
        if (lastValue instanceof Arguments) {
          lastValue.values[2] = value;
          notify(2);
          return;
        }
        break;
      default:
        // No supported.
        break;
    }
    console.warn('Unhandled event', value, changeType, eventId);
  };

  const errorCallback = (error) => {
    callback(false, error);
  };

  let active = true;
  const event = property.event(o);
  const getter = property.getter(o);

  if (!getter) {
    throw new Error(`No getter found for ${propertyName} in ${o.ClassName}`);
  }

  let unsubscribe = null;

  if (event) {
    unsubscribe = event.subscribe(eventCallback, errorCallback);
  }

  getter((ok, result) => {
    if (!active) return;
    if (!ok) {
      callback(false, result);
    } else {
      lastValue = result;
      notify();
    }
  });

  return () => {
    active = false;
    if (unsubscribe) unsubscribe();
  };
}

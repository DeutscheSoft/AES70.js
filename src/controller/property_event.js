import { BaseEvent } from './base_event.js';
import { error } from '../log.js';

/**
 * Class used to represent property changes.
 * When this event fires, event handlers will be called with
 * the new value, the :class:`OcaPropertyChangeType` and
 * the :class:`OcaPropertyID` of the property.
 *
 * @extends BaseEvent
 */
export class PropertyEvent extends BaseEvent {
  constructor(object, id, propertyType) {
    super(object, id, propertyType);
    this.callback = ([ id, dataView, changeType ]) => {
      if (
        id.DefLevel !== this.id.DefLevel ||
        id.PropertyIndex !== this.id.PropertyIndex
      )
        return;

      const value = propertyType[0].decodeFrom(dataView, 0)[1];

      this.handlers.forEach(function (callback) {
        try {
          callback.call(object, value, changeType, id);
        } catch (e) {
          error(e);
        }
      });
    };
  }

  do_subscribe() {
    return this.object.OnPropertyChanged.subscribe(this.callback);
  }

  do_unsubscribe(callback) {
    return this.object.OnPropertyChanged.unsubscribe(this.callback);
  }
}

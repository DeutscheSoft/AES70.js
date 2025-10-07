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
    this.callback = ([id, dataView, changeType]) => {
      if (
        id.DefLevel !== this.id.DefLevel ||
        id.PropertyIndex !== this.id.PropertyIndex
      )
        return;

      const value = propertyType[0].decodeFrom(dataView, 0)[1];

      this.emit([value, changeType, id]);
    };
    this.error_callback = (error) => {
      this.emit_error(error);
    };
    this._unsubscribe = null;
  }

  do_subscribe() {
    this._unsubscribe = this.object.OnPropertyChanged.subscribe(
      this.callback,
      this.error_callback
    );
  }

  do_unsubscribe() {
    const unsubscribe = this._unsubscribe;
    if (!unsubscribe) return;
    this._unsubscribe = null;
    try {
      unsubscribe();
    } catch (error) {
      console.error('Unsubscribing PropertyChanged event failed: ', error);
    }
  }
}

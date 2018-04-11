import { error } from "../OCA.js";

import { OcaPropertyChangeType } from '../Types';

import { signature } from '../signature_parser';

export class ObjectBase
{
  constructor(ObjectNumber, device)
  {
    this.ono = ObjectNumber;
    this.device = device;
  }

  get ObjectNumber()
  {
    return this.ono;
  }

  get ClassVersion()
  {
    return this.constructor.ClassVersion;
  }

  get ClassID()
  {
    return this.constructor.ClassID;
  }

  sendCommandRrq(method_level, method_index, param_count, parameters, rs)
  {
    const cmd = new CommandRrq(this.ono, method_level, method_index, param_count, parameters);
    return this.device.send_command(cmd, rs);
  }

  GetPropertyName(id)
  {
    return null;
  }

  GetPropertyID(name)
  {
    return null;
  }

  Dispose()
  {
  }
}

class BaseEvent
{
  constructor(object, id, signature)
  {
    this.object = object;
    this.id = id;
    this.handlers = new Set();
    this.result = null;
    this.signature = signature;
  }

  do_subscribe() {}
  do_unsubscribe() {}

  subscribe(callback)
  {
    this.handlers.add(callback);

    if (this.handlers.size === 1)
      return this.result = this.do_subscribe().then(() => { this.result = null; return true; });

    if (this.result !== null)
      return this.result;

    return Promise.resolve(true);
  }

  unsubscribe(callback)
  {
    this.handlers.delete(callback);

    if (!this.handlers.size)
      this.do_unsubscribe().catch(error);

    return Promise.resolve(true);
  }

  Dipose()
  {
    this.handlers.clear();

    if (this.handlers.size)
      this.do_unsubscribe().catch(error);
  }
}

export class Event extends BaseEvent
{
  constructor(object, id, signature)
  {
    super(object, id, signature);
    this.callback = (notification) => {
      if (this.handlers.size) return;
      const args = signature && notification.param_count ? signature.decode(notification.parameters) : [];
      const object = this.object;
      this.handlers.forEach(function(callback) {
          try {
            callback.apply(object, args);
          } catch (e) {
            error(e);
          }
        });
    };
  }

  do_subscribe()
  {
    return this.object.device.add_subscription(this.id, this.callback);
  }

  unsubscribe(callback)
  {
    return this.object.device.remove_subscription(this.id, this.callback);
  }
}

const change_type_signature = new signature(OcaPropertyChangeType);

export class PropertyEvent extends BaseEvent {
  constructor(object, id, signature)
  {
    super(object, id, signature);
    this.callback = (id, data) => {
      if (!id.isEqual(this.id)) return;
      const change_type = change_type_signature.decode(new DataView(data, data.byteLength - 1));
      const value = signature.decode(new DataView(data));

      this.handlers.forEach(function(callback) {
          try {
            callback.call(object, value, change_type, id);
          } catch (e) {
            error(e);
          }
        });
    };
  }

  do_subscribe()
  {
    return this.object.OnPropertyChanged.subscribe(this.callback);
  }

  unsubscribe(callback)
  {
    return this.object.OnPropertyChanged.unsubscribe(this.callback);
  }
}

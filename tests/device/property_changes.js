const ObjectTest = require('./test').ObjectTest;
const Arguments = require('../../lib/signature_parser').Arguments;
const RemoteError = require('../../lib/Controller').RemoteError;
const OcaStatus = require('../../lib/Types').OcaStatus;
const OcaPropertyChangeType = require('../../lib/Types').OcaPropertyChangeType;

class PropertyChanges extends ObjectTest
{
  async check_object(o)
  {
    const sync = o.GetPropertySync();
    await sync.sync();

    sync.forEach((value, name) => {
      this.check(sync[name] === value, "PropertySync Getters are broken: %o vs. %o", sync[name], value);
    });

    await Promise.all(o.get_properties().forEach(async (prop) => {
      const name = prop.name;
      const setter = prop.setter(o);
      const getter = prop.getter(o);
      const event = prop.event(o);

      if (!setter || !getter) return;

      let a;

      try {
        a = await getter();  
      } catch (e) {
        if (RemoteError.check_status(e, OcaStatus.NotImplemented)) return;
        throw e;
      }
      
      if (!(a instanceof Arguments)) return;

      const val = a.item(0);
      const min = a.item(1);
      const max = a.item(2);

      this.check(sync[name] === val,
                 "Property Sync value '%s' is not equal to current: %o vs. %o", name, sync[name], val);

      const test_set = async (to) => {
        let called = false;

        const cb = (value, change_type) => {
          if (!change_type.isEqual(OcaPropertyChangeType.CurrentChanged))
            return;

          this.check(value === to, "Received event for different value change: %o vs. %o", to, value);

          called = true;
        };

        await event.subscribe(cb);

        try {
          await setter(to);
        } catch (e) {
          if (RemoteError.check_status(e, OcaStatus.NotImplemented)) return;
          throw e;
        }

        let tmp = (await getter()).item(0);

        await event.unsubscribe(cb);

        this.check(called, "PropertyChanged event was not received for '%s'", name);

        this.check(to === tmp,
                   "Property '%s' set to %o succeeded but get returned %o", name, to, tmp);
        this.check(to === sync[name],
                   "Property '%s' set to %o succeeded but sync contains %o", name, to, sync[name]);
      };

      // set to min first
      await test_set(min);
      await test_set(max);
      await test_set(val);
    }));

    sync.Dispose();
  }
}

module.exports = [ PropertyChanges ];

import { ObjectTest } from './test.js';
import { Arguments } from '../../src/controller/arguments.js';
import { RemoteError } from '../../src/Controller.js';
import { OcaStatus } from '../../src/types/OcaStatus.js';
import { OcaPropertyChangeType } from '../../src/types/OcaPropertyChangeType.js';

function isEqual(a, b) {
  if (a === b) return true;

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return false;
    if (a.length !== b.length) return false;

    return a.every((element, i) => isEqual(element, b[i]));
  }

  if (typeof a === 'object') {
    if (typeof b !== 'object') return false;
    if (a.constructor !== b.constructor) return false;

    for (let name in a) {
      if (a[name] !== b[name]) return false;
    }

    return true;
  }

  return false;
}

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
        if (e instanceof RemoteError && e.status === OcaStatus.NotImplemented) return;
        throw e;
      }
      
      if (!(a instanceof Arguments)) return;

      const val = a.item(0);
      const min = a.item(1);
      const max = a.item(2);

      this.check(isEqual(sync[name], val),
                 "Property Sync value '%s' is not equal to current: %o vs. %o", name, sync[name], val);

      const test_set = async (to) => {
        let called = false;

        const cb = (value, changeType) => {
          if (changeType !== OcaPropertyChangeType.CurrentChanged)
            return;

          this.check(isEqual(value, to), "Received event for different value change: %o vs. %o", to, value);

          called = true;
        };

        await event.subscribe(cb);

        try {
          await setter(to);
        } catch (e) {
          if (e instanceof RemoteError && e.status === OcaStatus.NotImplemented) return;
          throw e;
        }

        let tmp = (await getter()).item(0);

        await event.unsubscribe(cb);

        this.check(called, "PropertyChanged event was not received for '%s'", name);

        this.check(isEqual(to, tmp),
                   "Property '%s' set to %o succeeded but get returned %o", name, to, tmp);
        this.check(isEqual(to, sync[name]),
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

export default [ PropertyChanges ];

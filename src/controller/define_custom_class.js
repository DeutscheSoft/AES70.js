import { make_control_class } from './make_control_class.js';

import * as RemoteControlClasses from './ControlClasses.js';

const Classes = Object.values(RemoteControlClasses);

/**
 * Creates a custom control class.
 *
 * @param {String} name - The name of this control class.
 * @param {number} level - The level in the class hierachy.
 * @param {String} class_id - The class ID.
 * @param {number} class_version - The class version.
 * @param {Function|String|undefined} base - Class to extend. Can be either the
 *      base class, the name of a standard class or undefined, in which case
 *      the base class will be derived using the class id.
 * @param {Array} methods - List of methods.
 * @param {Array} properties - List of properties.
 * @param {Array} events - List of events.
 */
export function define_custom_class(
  name,
  level,
  class_id,
  class_version,
  base,
  methods,
  properties,
  events
) {
  class_id = String.fromCharCode.apply(
    String,
    class_id.split('.').map((v) => parseInt(v))
  );

  if (!base) {
    const parent_class_id = class_id.substr(0, class_id.length - 1);

    for (let i = 0; i < Classes.length; i++) {
      if (Classes[i].ClassID === parent_class_id) {
        base = Classes[i];
        break;
      }
    }
  } else if (typeof base === 'string') {
    for (let i = 0; i < Classes.length; i++) {
      if (Classes[i].ClassName === base) {
        base = Classes[i];
        break;
      }
    }
  }

  if (typeof base !== 'function') {
    throw new Error('Unknown parent class.');
  }

  return make_control_class(
    name,
    level,
    class_id,
    class_version,
    base,
    methods,
    properties,
    events
  );
}

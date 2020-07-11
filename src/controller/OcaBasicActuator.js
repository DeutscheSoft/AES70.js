import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Abstract base class for weakly typed actuators.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaBasicActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaBasicActuator = make_control_class(
  'OcaBasicActuator',
  4,
  '\u0001\u0001\u0001\u0001',
  2,
  OcaActuator,
  [],
  [],
  []
);

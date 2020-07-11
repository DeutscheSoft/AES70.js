import { make_control_class } from './Base.js';
import { OcaRoot } from './OcaRoot.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Abstract base class for classes that represent non-audio (i.e. control
 * and monitoring) functions. All concrete manager objects are lockable
 * (the constructor of this class initializes the Root object with
 * property Lockable true).
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaManager
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaManager = make_control_class(
  'OcaManager',
  2,
  '\u0001\u0003',
  2,
  OcaRoot,
  [],
  [],
  []
);

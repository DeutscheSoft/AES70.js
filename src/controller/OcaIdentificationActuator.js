import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Represents a function that turns on some kind of human-detectable
 * indicator for purposes of device identification during network setup.
 * Physical form of indicator is not defined by OCA, so it could be
 * anything, e.g. <ul> <li>LED</li> <li>Foghorn</li> <li>Smoke
 * emitter</li> <li>Little waving robot hand wearing white glove</li>
 * <li>Jack-in-the-box popout</li> <li>et cetera</li> </ul>
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaIdentificationActuator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaIdentificationActuator = make_control_class(
  'OcaIdentificationActuator',
  4,
  '\u0001\u0001\u0001\u0015',
  2,
  OcaActuator,
  [
    ['GetActive', 4, 1, [], [OcaBoolean]],
    ['SetActive', 4, 2, [OcaBoolean], []],
  ],
  [['Active', [OcaBoolean], 4, 1, false, false, null]],
  []
);

/**
 * Gets the current identification indicator activity state. The return
 * value indicates whether the state was successfully retrieved.
 * @method RemoteControlClasses.OcaIdentificationActuator#GetActive
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the Active state (i.e. value of the Active property). The return
 * value indicates whether the state was successfully set.
 * @method RemoteControlClasses.OcaIdentificationActuator#SetActive
 * @param active {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * True iff indicator is active.
 * @member RemoteControlClasses.OcaIdentificationActuator#OnActiveChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Active changes in the remote object.
 */

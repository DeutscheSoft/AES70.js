import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Represents a function that turns on some kind of human-detectable indicator for purposes of device identification during network setup. Physical form of indicator is not defined by OCA, so it could be anything, e.g.
 *
 *  - LED
 *
 *
 *  - Foghorn
 *
 *
 *  - Smoke emitter
 *
 *
 *  - Little waving robot hand wearing white glove
 *
 *
 *  - Jack-in-the-box popout
 *
 *
 *  - et cetera
 *
 * @extends OcaActuator
 * @class OcaIdentificationActuator
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
 * Gets the current identification indicator activity state. The return value indicates whether the state was successfully retrieved.
 *
 * @method OcaIdentificationActuator#GetActive
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the Active state (i.e. value of the Active property). The return value indicates whether the state was successfully set.
 *
 * @method OcaIdentificationActuator#SetActive
 * @param {boolean} active
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Active changes in the remote object.
 * The property ``Active`` is described in the AES70 standard as follows.
 * True iff indicator is active.
 *
 * @member {PropertyEvent<boolean>} OcaIdentificationActuator#OnActiveChanged
 */

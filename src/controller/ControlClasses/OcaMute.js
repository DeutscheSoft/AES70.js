import { OcaMuteState } from '../../OCP1/OcaMuteState.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Signal mute.
 * @extends OcaActuator
 * @class OcaMute
 */
export const OcaMute = make_control_class(
  'OcaMute',
  4,
  '\u0001\u0001\u0001\u0002',
  2,
  OcaActuator,
  [
    ['GetState', 4, 1, [], [OcaMuteState]],
    ['SetState', 4, 2, [OcaMuteState], []],
  ],
  [['State', [OcaMuteState], 4, 1, false, false, null]],
  []
);

/**
 * Gets the current mute state. The return value indicates whether the state was successfully retrieved.
 *
 * @method OcaMute#GetState
 * @returns {Promise<OcaMuteState>}
 *   A promise which resolves to a single value of type :class:`OcaMuteState`.
 */
/**
 * Sets the mute state (i.e. value of the State property). The return value indicates whether the state was successfully set.
 *
 * @method OcaMute#SetState
 * @param {OcaMuteState} state
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property State changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * Current state of the mute.
 *
 * @member {PropertyEvent<OcaMuteState>} OcaMute#OnStateChanged
 */

import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaMuteState } from '../../OCP1/OcaMuteState.js';

/**
 * Signal mute.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaMute
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the current mute state. The return value indicates whether the
 * state was successfully retrieved.
 * @method RemoteControlClasses.OcaMute#GetState
 * @returns {Promise<OcaMuteState>}
 */
/**
 * Sets the mute state (i.e. value of the State property). The return
 * value indicates whether the state was successfully set.
 * @method RemoteControlClasses.OcaMute#SetState
 * @param state {OcaMuteState}
 *
 * @returns {Promise}
 */
/**
 * Current state of the mute.
 * @member RemoteControlClasses.OcaMute#OnStateChanged {PropertyEvent<OcaMuteState>} - This event is emitted when State changes in the remote object.
 */

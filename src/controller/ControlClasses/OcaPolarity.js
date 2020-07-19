import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaPolarityState } from '../../OCP1/OcaPolarityState.js';

/**
 * Signal inverter
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaPolarity
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaPolarity = make_control_class(
  'OcaPolarity',
  4,
  '\u0001\u0001\u0001\u0003',
  2,
  OcaActuator,
  [
    ['GetState', 4, 1, [], [OcaPolarityState]],
    ['SetState', 4, 2, [OcaPolarityState], []],
  ],
  [['State', [OcaPolarityState], 4, 1, false, false, null]],
  []
);

/**
 * Gets the current inverter state. The return value indicates whether
 * the state was successfully retrieved.
 * @method RemoteControlClasses.OcaPolarity#GetState
 * @returns {Promise<OcaPolarityState>}
 */
/**
 * Sets the inversion state (i.e. value of the State property). The
 * return value indicates whether the state was successfully set.
 * @method RemoteControlClasses.OcaPolarity#SetState
 * @param state {OcaPolarityState}
 *
 * @returns {Promise}
 */
/**
 * Current state of the inverter - {noninverted, inverted].
 * @member RemoteControlClasses.OcaPolarity#OnStateChanged {PropertyEvent<OcaPolarityState>} - This event is emitted when State changes in the remote object.
 */

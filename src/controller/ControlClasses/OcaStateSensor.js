import { OcaList } from '../../OCP1/OcaList.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { make_control_class } from '../make_control_class.js';
import { OcaSensor } from './OcaSensor.js';

/**
 * Sensor that reports a 1-of-n state. Sensor counterpart of the actuator
 * **OcaSwitch**.
 * @extends OcaSensor
 * @class OcaStateSensor
 */
export const OcaStateSensor = make_control_class(
  'OcaStateSensor',
  4,
  '\u0001\u0001\u0002\f',
  1,
  OcaSensor,
  [
    ['GetState', 4, 1, [], [OcaUint16, OcaUint16, OcaUint16]],
    ['GetStateNames', 4, 2, [], [OcaList(OcaString)]],
    ['SetStateNames', 4, 3, [OcaList(OcaString)], []],
  ],
  [
    ['State', [OcaUint16], 4, 1, false, false, null],
    ['StateNames', [OcaList(OcaString)], 4, 2, false, false, null],
  ],
  []
);

/**
 * Gets the value of the State property and, optionally, its implementation min
 * and max.
 * The return values of this method are
 *
 * - State of type ``number``
 * - minState of type ``number``
 * - maxState of type ``number``
 *
 * @method OcaStateSensor#GetState
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Gets list of names assigned to the States.
 *
 * @method OcaStateSensor#GetStateNames
 * @returns {Promise<string[]>}
 *   A promise which resolves to a single value of type ``string[]``.
 */
/**
 * Value to which the StateNames property shall be set if the method succeeds.
 * Optional method - StateNames may be readonly in some implementations.
 *
 * @method OcaStateSensor#SetStateNames
 * @param {string[]} Names
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``State`` changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * The current state reading. States shall be numbered from **minState** to
 * (including) **maxState**, as returned by the **GetState(...)** method.
 *
 * @member {PropertyEvent<number>} OcaStateSensor#OnStateChanged
 */
/**
 * This event is emitted when the property ``StateNames`` changes in the remote object.
 * The property ``StateNames`` is described in the AES70 standard as follows.
 * Vector of state names. May be readonly or readwrite, depending on
 * implementation. FIrst element of list corresponds to the state value of
 * **minState** as returned by **GetState(...)**.
 *
 * @member {PropertyEvent<string[]>} OcaStateSensor#OnStateNamesChanged
 */

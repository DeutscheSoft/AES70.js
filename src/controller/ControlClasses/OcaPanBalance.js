import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaActuator } from './OcaActuator.js';

/**
 * Pan or Balance control.
 * @extends OcaActuator
 * @class OcaPanBalance
 */
export const OcaPanBalance = make_control_class(
  'OcaPanBalance',
  4,
  '\u0001\u0001\u0001\u0006',
  3,
  OcaActuator,
  [
    ['GetPosition', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetPosition', 4, 2, [OcaFloat32], []],
    ['GetMidpointGain', 4, 3, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetMidpointGain', 4, 4, [OcaFloat32], []],
  ],
  [
    ['Position', [OcaFloat32], 4, 1, false, false, null],
    ['MidpointGain', [OcaFloat32], 4, 2, false, false, null],
  ],
  []
);

/**
 * Gets the value and limits of the **Position** property.
 * The return values of this method are
 *
 * - Position of type ``number``
 * - minPosition of type ``number``
 * - maxPosition of type ``number``
 *
 * @method OcaPanBalance#GetPosition
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the **Position** property.
 *
 * @method OcaPanBalance#SetPosition
 * @param {number} Position
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value and limits of the **MidpointGain** property.
 * The return values of this method are
 *
 * - Gain of type ``number``
 * - minGain of type ``number``
 * - maxGain of type ``number``
 *
 * @method OcaPanBalance#GetMidpointGain
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the **MidpointGain** property.
 *
 * @method OcaPanBalance#SetMidpointGain
 * @param {number} Gain
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Position`` changes in the remote object.
 * The property ``Position`` is described in the AES70 standard as follows.
 * Pan position. Range = -1.0 to +1.0. -1.0 is 100% left, +1.0 is 100% right.
 *
 * @member {PropertyEvent<number>} OcaPanBalance#OnPositionChanged
 */
/**
 * This event is emitted when the property ``MidpointGain`` changes in the remote object.
 * The property ``MidpointGain`` is described in the AES70 standard as follows.
 * Midpoint gain. Normally, max=0dB, min=-6dB. May be readonly for pan/balance
 * objects with fixed midpoint gains.
 *
 * @member {PropertyEvent<number>} OcaPanBalance#OnMidpointGainChanged
 */

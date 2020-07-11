import { make_control_class } from './Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Pan or Balance control.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaPanBalance
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaPanBalance = make_control_class(
  'OcaPanBalance',
  4,
  '\u0001\u0001\u0001\u0006',
  2,
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
 * Gets the value and limits of the Position property. The return value
 * indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPanBalance#GetPosition
 * @returns {Promise<Arguments<OcaFloat32,OcaFloat32,OcaFloat32>>}
 */
/**
 * Sets the value of the Position property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaPanBalance#SetPosition
 * @param Position {OcaFloat32}
 *
 * @returns {Promise}
 */
/**
 * Gets the value and limits of the MidpointGain property. The return
 * value indicates whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaPanBalance#GetMidpointGain
 * @returns {Promise<Arguments<OcaDB,OcaDB,OcaDB>>}
 */
/**
 * Sets the value of the MidpointGain property. The return value
 * indicates whether the property was successfully set.
 * @method RemoteControlClasses.OcaPanBalance#SetMidpointGain
 * @param Gain {OcaDB}
 *
 * @returns {Promise}
 */
/**
 * Pan position. Range = -1.0 to +1.0. -1.0 is 100% left, +1.0 is 100%
 * right.
 * @member RemoteControlClasses.OcaPanBalance#OnPositionChanged {PropertyEvent<OcaFloat32>} - This event is emitted when Position changes in the remote object.
 */
/**
 * Midpoint gain. Normally, max=0dB, min=-6dB. May be readonly for
 * pan/balance objects with fixed midpoint gains.
 * @member RemoteControlClasses.OcaPanBalance#OnMidpointGainChanged {PropertyEvent<OcaDB>} - This event is emitted when MidpointGain changes in the remote object.
 */

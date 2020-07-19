import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * A finite impulse response (FIR) filter.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaFilterFIR
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaFilterFIR = make_control_class(
  'OcaFilterFIR',
  4,
  '\u0001\u0001\u0001\f',
  2,
  OcaActuator,
  [
    ['GetLength', 4, 1, [], [OcaUint32, OcaUint32, OcaUint32]],
    ['GetCoefficients', 4, 2, [], [OcaList(OcaFloat32)]],
    ['SetCoefficients', 4, 3, [OcaList(OcaFloat32)], []],
    ['GetSampleRate', 4, 4, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSampleRate', 4, 5, [OcaFloat32], []],
  ],
  [
    ['Length', [OcaUint32], 4, 1, true, false, null],
    ['Coefficients', [OcaList(OcaFloat32)], 4, 2, false, false, null],
    ['SampleRate', [OcaFloat32], 4, 3, false, false, null],
  ],
  []
);

/**
 * Gets the length of the FIR filter. The return value indicates whether
 * the value was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterFIR#GetLength
 * @returns {Promise<Arguments<OcaUint32,OcaUint32,OcaUint32>>}
 */
/**
 * Gets the coefficients of the FIR filter. The return value indicates
 * whether the coefficients were successfully retrieved.
 * @method RemoteControlClasses.OcaFilterFIR#GetCoefficients
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the value of the properties of the FIR filter. The return value
 * indicates whether the properties were successfully set.
 * @method RemoteControlClasses.OcaFilterFIR#SetCoefficients
 * @param Coefficients {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Gets the sample rate of the FIR filter. The return value indicates
 * whether the data was successfully retrieved.
 * @method RemoteControlClasses.OcaFilterFIR#GetSampleRate
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the sample rate of the FIR filter. The return value indicates
 * whether the rate was successfully set.
 * @method RemoteControlClasses.OcaFilterFIR#SetSampleRate
 * @param Rate {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Length of the filter, in samples. Readonly. Value is set when
 * SetCoefficients(...) method executes.
 */
/**
 * Array of FIR Coefficients. The size of the array (number of entries)
 * is equal to the Order property plus 1.
 * @member RemoteControlClasses.OcaFilterFIR#OnCoefficientsChanged {PropertyEvent<OcaList>} - This event is emitted when Coefficients changes in the remote object.
 */
/**
 * Sample rate inside the filter. We can't assume it's the same as the
 * device input or output rate.
 * @member RemoteControlClasses.OcaFilterFIR#OnSampleRateChanged {PropertyEvent<OcaFrequency>} - This event is emitted when SampleRate changes in the remote object.
 */

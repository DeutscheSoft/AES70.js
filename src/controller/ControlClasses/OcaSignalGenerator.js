import { make_control_class } from '../Base.js';
import { OcaActuator } from './OcaActuator.js';
import { OcaBitSet16 } from '../../OCP1/OcaBitSet16.js';
import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaSweepType } from '../../OCP1/OcaSweepType.js';
import { OcaWaveformType } from '../../OCP1/OcaWaveformType.js';

/**
 * Multiwaveform signal generator with optional sweep capability.
 * @extends RemoteControlClasses.OcaActuator
 * @class OcaSignalGenerator
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaSignalGenerator = make_control_class(
  'OcaSignalGenerator',
  4,
  '\u0001\u0001\u0001\u0011',
  2,
  OcaActuator,
  [
    ['GetFrequency1', 4, 1, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetFrequency1', 4, 2, [OcaFloat32], []],
    ['GetFrequency2', 4, 3, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetFrequency2', 4, 4, [OcaFloat32], []],
    ['GetLevel', 4, 5, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetLevel', 4, 6, [OcaFloat32], []],
    ['GetWaveform', 4, 7, [], [OcaWaveformType]],
    ['SetWaveform', 4, 8, [OcaWaveformType], []],
    ['GetSweepType', 4, 9, [], [OcaSweepType]],
    ['SetSweepType', 4, 10, [OcaSweepType], []],
    ['GetSweepTime', 4, 11, [], [OcaFloat32, OcaFloat32, OcaFloat32]],
    ['SetSweepTime', 4, 12, [OcaFloat32], []],
    ['GetSweepRepeat', 4, 13, [], [OcaBoolean]],
    ['SetSweepRepeat', 4, 14, [OcaBoolean], []],
    ['GetGenerating', 4, 15, [], [OcaBoolean]],
    ['Start', 4, 16, [], []],
    ['Stop', 4, 17, [], []],
    [
      'SetMultiple',
      4,
      18,
      [
        OcaBitSet16,
        OcaFloat32,
        OcaFloat32,
        OcaFloat32,
        OcaWaveformType,
        OcaSweepType,
        OcaFloat32,
        OcaBoolean,
      ],
      [],
    ],
  ],
  [
    ['Frequency1', [OcaFloat32], 4, 1, false, false, null],
    ['Frequency2', [OcaFloat32], 4, 2, false, false, null],
    ['Level', [OcaFloat32], 4, 3, false, false, null],
    ['Waveform', [OcaWaveformType], 4, 4, false, false, null],
    ['SweepType', [OcaSweepType], 4, 5, false, false, null],
    ['SweepTime', [OcaFloat32], 4, 6, false, false, null],
    ['SweepRepeat', [OcaBoolean], 4, 7, false, false, null],
    ['Generating', [OcaBoolean], 4, 8, false, false, null],
  ],
  []
);

/**
 * Gets the value of the Frequency1 property. The return value indicates whether the property was successfully retrieved.
 * The return values of this method are
 *
 * - frequency of type ``number``
 * - minFrequency of type ``number``
 * - maxFrequency of type ``number``
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetFrequency1
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Frequency1 property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetFrequency1
 * @param {number} frequency
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Frequency2 property. The return value indicates whether the property was successfully retrieved.
 * The return values of this method are
 *
 * - frequency of type ``number``
 * - minFrequency of type ``number``
 * - maxFrequency of type ``number``
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetFrequency2
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Frequency2 property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetFrequency2
 * @param {number} frequency
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Level property. The return value indicates whether the property was successfully retrieved.
 * The return values of this method are
 *
 * - Level of type ``number``
 * - minLevel of type ``number``
 * - maxLevel of type ``number``
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetLevel
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the Level property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetLevel
 * @param {number} Level
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Waveform property. The return value indicates whether the property was successfully retrieved.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetWaveform
 * @returns {Promise<OcaWaveformType>}
 *   A promise which resolves to a single value of type :class:`OcaWaveformType`.
 */
/**
 * Sets the value of the Waveform property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetWaveform
 * @param {OcaWaveformType} waveform
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the SweepType property. The return value indicates whether the property was successfully retrieved.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepType
 * @returns {Promise<OcaSweepType>}
 *   A promise which resolves to a single value of type :class:`OcaSweepType`.
 */
/**
 * Sets the value of the SweepType property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepType
 * @param {OcaSweepType} sweepType
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the SweepTime property. The return value indicates whether the property was successfully retrieved.
 * The return values of this method are
 *
 * - sweepTime of type ``number``
 * - minSweepTime of type ``number``
 * - maxSweepTime of type ``number``
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepTime
 * @returns {Promise<Arguments<number,number,number>>}
 */
/**
 * Sets the value of the SweepTime property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepTime
 * @param {number} sweepTime
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the SweepRepeat property. The return value indicates whether the property was successfully retrieved.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepRepeat
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the SweepRepeat property. The return value indicates whether the property was successfully set.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepRepeat
 * @param {boolean} sweepRepeat
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Generating property. The return value indicates whether the property was successfully retrieved.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#GetGenerating
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Starts the signal generator. The return value indicates whether the signal generator was successfully started.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#Start
 * @returns {Promise<void>}
 */
/**
 * Stops the signal generator. The return value indicates whether the signal generator was successfully stopped.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#Stop
 * @returns {Promise<void>}
 */
/**
 * Sets some or all signal generation parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
 *
 * @method RemoteControlClasses.OcaSignalGenerator#SetMultiple
 * @param {int} Mask
 *
 * @param {number} Frequency1
 *
 * @param {number} Frequency2
 *
 * @param {number} Level
 *
 * @param {OcaWaveformType} Waveform
 *
 * @param {OcaSweepType} SweepType
 *
 * @param {number} SweepTime
 *
 * @param {boolean} SweepRepeat
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property Frequency1 changes in the remote object.
 * The property ``Frequency1`` is described in the AES70 standard as follows.
 * Center frequency or sweep start frequency.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaSignalGenerator#OnFrequency1Changed
 */
/**
 * This event is emitted when the property Frequency2 changes in the remote object.
 * The property ``Frequency2`` is described in the AES70 standard as follows.
 * Sweep end frequency.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaSignalGenerator#OnFrequency2Changed
 */
/**
 * This event is emitted when the property Level changes in the remote object.
 * The property ``Level`` is described in the AES70 standard as follows.
 * Output level in dB relative to device-defined zero level.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaSignalGenerator#OnLevelChanged
 */
/**
 * This event is emitted when the property Waveform changes in the remote object.
 * The property ``Waveform`` is described in the AES70 standard as follows.
 * The waveform type this generator generates (e.g. sine, square, noise,
 * etc.).
 *
 * @member {PropertyEvent<OcaWaveformType>} RemoteControlClasses.OcaSignalGenerator#OnWaveformChanged
 */
/**
 * This event is emitted when the property SweepType changes in the remote object.
 * The property ``SweepType`` is described in the AES70 standard as follows.
 * The sweep type of the signal generator: None for no sweep, linear or
 * logarithmic if sweep is generated.
 *
 * @member {PropertyEvent<OcaSweepType>} RemoteControlClasses.OcaSignalGenerator#OnSweepTypeChanged
 */
/**
 * This event is emitted when the property SweepTime changes in the remote object.
 * The property ``SweepTime`` is described in the AES70 standard as follows.
 * Duration of sweep in seconds.
 *
 * @member {PropertyEvent<number>} RemoteControlClasses.OcaSignalGenerator#OnSweepTimeChanged
 */
/**
 * This event is emitted when the property SweepRepeat changes in the remote object.
 * The property ``SweepRepeat`` is described in the AES70 standard as follows.
 * Indicates whether the sweep is repeated (true) or is one-shot (false).
 *
 * @member {PropertyEvent<boolean>} RemoteControlClasses.OcaSignalGenerator#OnSweepRepeatChanged
 */
/**
 * This event is emitted when the property Generating changes in the remote object.
 * The property ``Generating`` is described in the AES70 standard as follows.
 * Read-only property that indicates whether the generator is producing
 * output (true) or not (false).
 *
 * @member {PropertyEvent<boolean>} RemoteControlClasses.OcaSignalGenerator#OnGeneratingChanged
 */

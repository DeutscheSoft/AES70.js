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
 * Gets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetFrequency1
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency1 property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetFrequency1
 * @param frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetFrequency2
 * @returns {Promise<Arguments<OcaFrequency,OcaFrequency,OcaFrequency>>}
 */
/**
 * Sets the value of the Frequency2 property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetFrequency2
 * @param frequency {OcaFrequency}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Level property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetLevel
 * @returns {Promise<Arguments<OcaDBz,OcaDBz,OcaDBz>>}
 */
/**
 * Sets the value of the Level property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetLevel
 * @param Level {OcaDBz}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Waveform property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetWaveform
 * @returns {Promise<OcaWaveformType>}
 */
/**
 * Sets the value of the Waveform property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetWaveform
 * @param waveform {OcaWaveformType}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the SweepType property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepType
 * @returns {Promise<OcaSweepType>}
 */
/**
 * Sets the value of the SweepType property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepType
 * @param sweepType {OcaSweepType}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the SweepTime property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepTime
 * @returns {Promise<Arguments<OcaTimeInterval,OcaTimeInterval,OcaTimeInterval>>}
 */
/**
 * Sets the value of the SweepTime property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepTime
 * @param sweepTime {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetSweepRepeat
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the SweepRepeat property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaSignalGenerator#SetSweepRepeat
 * @param sweepRepeat {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Generating property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaSignalGenerator#GetGenerating
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Starts the signal generator. The return value indicates whether the
 * signal generator was successfully started.
 * @method RemoteControlClasses.OcaSignalGenerator#Start
 * @returns {Promise}
 */
/**
 * Stops the signal generator. The return value indicates whether the
 * signal generator was successfully stopped.
 * @method RemoteControlClasses.OcaSignalGenerator#Stop
 * @returns {Promise}
 */
/**
 * Sets some or all signal generation parameters. The return value
 * indicates if the parameters were successfully set. The action of this
 * method is atomic - if any of the value changes fails, none of the
 * changes are made.
 * @method RemoteControlClasses.OcaSignalGenerator#SetMultiple
 * @param Mask {OcaParameterMask}
 *
 * @param Frequency1 {OcaFrequency}
 *
 * @param Frequency2 {OcaFrequency}
 *
 * @param Level {OcaDBz}
 *
 * @param Waveform {OcaWaveformType}
 *
 * @param SweepType {OcaSweepType}
 *
 * @param SweepTime {OcaTimeInterval}
 *
 * @param SweepRepeat {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Center frequency or sweep start frequency.
 * @member RemoteControlClasses.OcaSignalGenerator#OnFrequency1Changed {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency1 changes in the remote object.
 */
/**
 * Sweep end frequency.
 * @member RemoteControlClasses.OcaSignalGenerator#OnFrequency2Changed {PropertyEvent<OcaFrequency>} - This event is emitted when Frequency2 changes in the remote object.
 */
/**
 * Output level in dB relative to device-defined zero level.
 * @member RemoteControlClasses.OcaSignalGenerator#OnLevelChanged {PropertyEvent<OcaDBz>} - This event is emitted when Level changes in the remote object.
 */
/**
 * The waveform type this generator generates (e.g. sine, square, noise,
 * etc.).
 * @member RemoteControlClasses.OcaSignalGenerator#OnWaveformChanged {PropertyEvent<OcaWaveformType>} - This event is emitted when Waveform changes in the remote object.
 */
/**
 * The sweep type of the signal generator: None for no sweep, linear or
 * logarithmic if sweep is generated.
 * @member RemoteControlClasses.OcaSignalGenerator#OnSweepTypeChanged {PropertyEvent<OcaSweepType>} - This event is emitted when SweepType changes in the remote object.
 */
/**
 * Duration of sweep in seconds.
 * @member RemoteControlClasses.OcaSignalGenerator#OnSweepTimeChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when SweepTime changes in the remote object.
 */
/**
 * Indicates whether the sweep is repeated (true) or is one-shot (false).
 * @member RemoteControlClasses.OcaSignalGenerator#OnSweepRepeatChanged {PropertyEvent<OcaBoolean>} - This event is emitted when SweepRepeat changes in the remote object.
 */
/**
 * Read-only property that indicates whether the generator is producing
 * output (true) or not (false).
 * @member RemoteControlClasses.OcaSignalGenerator#OnGeneratingChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Generating changes in the remote object.
 */

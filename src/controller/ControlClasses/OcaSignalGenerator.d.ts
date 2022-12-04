import { IOcaParameterMask } from '../../types/OcaParameterMask';
import { IOcaSweepType, OcaSweepType } from '../../types/OcaSweepType';
import { IOcaWaveformType, OcaWaveformType } from '../../types/OcaWaveformType';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaActuator } from './OcaActuator';

/**
 * Multiwaveform signal generator with optional sweep capability.
 * @extends OcaActuator
 * @class OcaSignalGenerator
 */
export declare class OcaSignalGenerator extends OcaActuator {
  /**
   * This event is emitted whenever Frequency1 changes.
   */
  OnFrequency1Changed: PropertyEvent<number>;

  /**
   * This event is emitted whenever Frequency2 changes.
   */
  OnFrequency2Changed: PropertyEvent<number>;

  /**
   * This event is emitted whenever Level changes.
   */
  OnLevelChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever Waveform changes.
   */
  OnWaveformChanged: PropertyEvent<OcaWaveformType>;

  /**
   * This event is emitted whenever SweepType changes.
   */
  OnSweepTypeChanged: PropertyEvent<OcaSweepType>;

  /**
   * This event is emitted whenever SweepTime changes.
   */
  OnSweepTimeChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever SweepRepeat changes.
   */
  OnSweepRepeatChanged: PropertyEvent<boolean>;

  /**
   * This event is emitted whenever Generating changes.
   */
  OnGeneratingChanged: PropertyEvent<boolean>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Gets the value of the Frequency1 property. The return value indicates whether the property was successfully retrieved.
   * The return values of this method are
   *
   * - frequency of type ``number``
   * - minFrequency of type ``number``
   * - maxFrequency of type ``number``
   *
   * @method OcaSignalGenerator#GetFrequency1
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetFrequency1(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the Frequency1 property. The return value indicates whether the property was successfully set.
   *
   * @method OcaSignalGenerator#SetFrequency1
   * @param {number} frequency
   *
   * @returns {Promise<void>}
   */
  SetFrequency1(frequency: number): Promise<void>;

  /**
   * Gets the value of the Frequency2 property. The return value indicates whether the property was successfully retrieved.
   * The return values of this method are
   *
   * - frequency of type ``number``
   * - minFrequency of type ``number``
   * - maxFrequency of type ``number``
   *
   * @method OcaSignalGenerator#GetFrequency2
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetFrequency2(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the Frequency2 property. The return value indicates whether the property was successfully set.
   *
   * @method OcaSignalGenerator#SetFrequency2
   * @param {number} frequency
   *
   * @returns {Promise<void>}
   */
  SetFrequency2(frequency: number): Promise<void>;

  /**
   * Gets the value of the Level property. The return value indicates whether the property was successfully retrieved.
   * The return values of this method are
   *
   * - Level of type ``number``
   * - minLevel of type ``number``
   * - maxLevel of type ``number``
   *
   * @method OcaSignalGenerator#GetLevel
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetLevel(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the Level property. The return value indicates whether the property was successfully set.
   *
   * @method OcaSignalGenerator#SetLevel
   * @param {number} Level
   *
   * @returns {Promise<void>}
   */
  SetLevel(Level: number): Promise<void>;

  /**
   * Gets the value of the Waveform property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaSignalGenerator#GetWaveform
   * @returns {Promise<OcaWaveformType>}
   *   A promise which resolves to a single value of type :class:`OcaWaveformType`.
   */
  GetWaveform(): Promise<OcaWaveformType>;

  /**
   * Sets the value of the Waveform property. The return value indicates whether the property was successfully set.
   *
   * @method OcaSignalGenerator#SetWaveform
   * @param {OcaWaveformType} waveform
   *
   * @returns {Promise<void>}
   */
  SetWaveform(waveform: IOcaWaveformType): Promise<void>;

  /**
   * Gets the value of the SweepType property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaSignalGenerator#GetSweepType
   * @returns {Promise<OcaSweepType>}
   *   A promise which resolves to a single value of type :class:`OcaSweepType`.
   */
  GetSweepType(): Promise<OcaSweepType>;

  /**
   * Sets the value of the SweepType property. The return value indicates whether the property was successfully set.
   *
   * @method OcaSignalGenerator#SetSweepType
   * @param {OcaSweepType} sweepType
   *
   * @returns {Promise<void>}
   */
  SetSweepType(sweepType: IOcaSweepType): Promise<void>;

  /**
   * Gets the value of the SweepTime property. The return value indicates whether the property was successfully retrieved.
   * The return values of this method are
   *
   * - sweepTime of type ``number``
   * - minSweepTime of type ``number``
   * - maxSweepTime of type ``number``
   *
   * @method OcaSignalGenerator#GetSweepTime
   * @returns {Promise<Arguments<number,number,number>>}
   */
  GetSweepTime(): Promise<Arguments<[number, number, number]>>;

  /**
   * Sets the value of the SweepTime property. The return value indicates whether the property was successfully set.
   *
   * @method OcaSignalGenerator#SetSweepTime
   * @param {number} sweepTime
   *
   * @returns {Promise<void>}
   */
  SetSweepTime(sweepTime: number): Promise<void>;

  /**
   * Gets the value of the SweepRepeat property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaSignalGenerator#GetSweepRepeat
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetSweepRepeat(): Promise<boolean>;

  /**
   * Sets the value of the SweepRepeat property. The return value indicates whether the property was successfully set.
   *
   * @method OcaSignalGenerator#SetSweepRepeat
   * @param {boolean} sweepRepeat
   *
   * @returns {Promise<void>}
   */
  SetSweepRepeat(sweepRepeat: boolean): Promise<void>;

  /**
   * Gets the value of the Generating property. The return value indicates whether the property was successfully retrieved.
   *
   * @method OcaSignalGenerator#GetGenerating
   * @returns {Promise<boolean>}
   *   A promise which resolves to a single value of type ``boolean``.
   */
  GetGenerating(): Promise<boolean>;

  /**
   * Starts the signal generator. The return value indicates whether the signal generator was successfully started.
   *
   * @method OcaSignalGenerator#Start
   * @returns {Promise<void>}
   */
  Start(): Promise<void>;

  /**
   * Stops the signal generator. The return value indicates whether the signal generator was successfully stopped.
   *
   * @method OcaSignalGenerator#Stop
   * @returns {Promise<void>}
   */
  Stop(): Promise<void>;

  /**
   * Sets some or all signal generation parameters. The return value indicates if the parameters were successfully set. The action of this method is atomic - if any of the value changes fails, none of the changes are made.
   *
   * @method OcaSignalGenerator#SetMultiple
   * @param {IOcaParameterMask} Mask
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
  SetMultiple(
    Mask: IOcaParameterMask,
    Frequency1: number,
    Frequency2: number,
    Level: number,
    Waveform: IOcaWaveformType,
    SweepType: IOcaSweepType,
    SweepTime: number,
    SweepRepeat: boolean
  ): Promise<void>;
}

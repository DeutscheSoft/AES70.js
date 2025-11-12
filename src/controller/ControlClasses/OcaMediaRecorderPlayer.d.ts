import { IOcaLockState } from '../../types/OcaLockState.js';
import { IOcaMediaAccessMode } from '../../types/OcaMediaAccessMode.js';
import {
  IOcaMediaPlayOption,
  OcaMediaPlayOption,
} from '../../types/OcaMediaPlayOption.js';
import { OcaMediaRecorderPlayerState } from '../../types/OcaMediaRecorderPlayerState.js';
import { IOcaMediaTrackFunction } from '../../types/OcaMediaTrackFunction.js';
import {
  IOcaMediaVolumePosition,
  OcaMediaVolumePosition,
} from '../../types/OcaMediaVolumePosition.js';
import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaDatasetWorker } from './OcaDatasetWorker.js';

/**
 * Media volume recorder/player that shall provide streaming data access into
 * and out of **OcaDataset** objects whose Datasets are media files.
 * @extends OcaDatasetWorker
 * @class OcaMediaRecorderPlayer
 */
export declare class OcaMediaRecorderPlayer extends OcaDatasetWorker {
  /**
   * This event is emitted whenever State changes.
   */
  OnStateChanged: PropertyEvent<OcaMediaRecorderPlayerState>;

  /**
   * This event is emitted whenever TrackCount changes.
   */
  OnTrackCountChanged: PropertyEvent<number>;

  /**
   * This event is emitted whenever TrackFunctions changes.
   */
  OnTrackFunctionsChanged: PropertyEvent<IOcaMediaTrackFunction[]>;

  /**
   * This event is emitted whenever PlayOption changes.
   */
  OnPlayOptionChanged: PropertyEvent<OcaMediaPlayOption>;

  /**
   * This event is emitted whenever WindowStart changes.
   */
  OnWindowStartChanged: PropertyEvent<OcaMediaVolumePosition>;

  /**
   * This event is emitted whenever WindowEnd changes.
   */
  OnWindowEndChanged: PropertyEvent<OcaMediaVolumePosition>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Opens a session with a media volume for playing or recording. Request a
   * readonly or exclusive lock, if desired.
   *
   * @method OcaMediaRecorderPlayer#Open
   * @param {number} DatasetONo
   * @param {IOcaMediaAccessMode} AccessMode
   * @param {IOcaLockState} LockState
   *
   * @returns {Promise<void>}
   */
  Open(
    DatasetONo: number,
    AccessMode: IOcaMediaAccessMode,
    LockState: IOcaLockState
  ): Promise<void>;

  /**
   * Closes this object's session on the open media volume.
   *
   * @method OcaMediaRecorderPlayer#Close
   * @returns {Promise<void>}
   */
  Close(): Promise<void>;

  /**
   * Starts recording immediately. Overwrites the current record/play window,
   * from current position to end.
   *
   * @method OcaMediaRecorderPlayer#Record
   * @returns {Promise<void>}
   */
  Record(): Promise<void>;

  /**
   * Starts playing immediately. Plays the current record/play window, from
   * current position to end.
   *
   * @method OcaMediaRecorderPlayer#Play
   * @returns {Promise<void>}
   */
  Play(): Promise<void>;

  /**
   * Stops playing / recording immediately, does not close session. Leaves
   * **Position** at (last accessed +1 ).
   *
   * @method OcaMediaRecorderPlayer#Stop
   * @returns {Promise<void>}
   */
  Stop(): Promise<void>;

  /**
   * Stops playing/recording immediately. Resets record/play window range to
   * entire volume. Sets P**osition** to start of volume. Sets **PlayOption** to
   * **Normal**. Does **not **reset track functions.
   *
   * @method OcaMediaRecorderPlayer#Reset
   * @returns {Promise<void>}
   */
  Reset(): Promise<void>;

  /**
   * Returns current state of this **OcaMediaRecorderPlayer** object.
   *
   * @method OcaMediaRecorderPlayer#GetState
   * @returns {Promise<OcaMediaRecorderPlayerState>}
   *   A promise which resolves to a single value of type :class:`OcaMediaRecorderPlayerState`.
   */
  GetState(): Promise<OcaMediaRecorderPlayerState>;

  /**
   * Returns track count of currently open media volume, or zero if no volume is
   * open.
   *
   * @method OcaMediaRecorderPlayer#GetTrackCount
   * @returns {Promise<number>}
   *   A promise which resolves to a single value of type ``number``.
   */
  GetTrackCount(): Promise<number>;

  /**
   * Sets track count of currently open media volume. Fails if media volume is
   * not open in RECORD mode, or if no media volume is open.
   *
   * @method OcaMediaRecorderPlayer#SetTrackCount
   * @param {number} TrackCount
   *
   * @returns {Promise<void>}
   */
  SetTrackCount(TrackCount: number): Promise<void>;

  /**
   * Returns the list of track functions.
   *
   * @method OcaMediaRecorderPlayer#GetTrackFunctions
   * @returns {Promise<IOcaMediaTrackFunction[]>}
   *   A promise which resolves to a single value of type ``IOcaMediaTrackFunction[]``.
   */
  GetTrackFunctions(): Promise<IOcaMediaTrackFunction[]>;

  /**
   * Sets the list of track functions. Fails if no media volume is open.
   *
   * @method OcaMediaRecorderPlayer#SetTrackFunctions
   * @param {IOcaMediaTrackFunction[]} Functions
   *
   * @returns {Promise<void>}
   */
  SetTrackFunctions(Functions: IOcaMediaTrackFunction[]): Promise<void>;

  /**
   * Returns value of **PlayOption** property.
   *
   * @method OcaMediaRecorderPlayer#GetPlayOption
   * @returns {Promise<OcaMediaPlayOption>}
   *   A promise which resolves to a single value of type :class:`OcaMediaPlayOption`.
   */
  GetPlayOption(): Promise<OcaMediaPlayOption>;

  /**
   * Sets value of **PlayOption** property.
   *
   * @method OcaMediaRecorderPlayer#SetPlayOption
   * @param {IOcaMediaPlayOption} Option
   *
   * @returns {Promise<void>}
   */
  SetPlayOption(Option: IOcaMediaPlayOption): Promise<void>;

  /**
   * Returns current media position or null value if no media volume is open.
   * Value is relative to the start of the current interval.
   *
   * @method OcaMediaRecorderPlayer#GetPosition
   * @returns {Promise<OcaMediaVolumePosition>}
   *   A promise which resolves to a single value of type :class:`OcaMediaVolumePosition`.
   */
  GetPosition(): Promise<OcaMediaVolumePosition>;

  /**
   * Sets media position. Value is relative to the start of the current
   * interval.
   *
   * @method OcaMediaRecorderPlayer#SetPosition
   * @param {IOcaMediaVolumePosition} Position
   *
   * @returns {Promise<void>}
   */
  SetPosition(Position: IOcaMediaVolumePosition): Promise<void>;

  /**
   * Returns start and end point positions of current record/play window.
   * The return values of this method are
   *
   * - FirstPosition of type ``IOcaMediaVolumePosition``
   * - LastPosition of type ``IOcaMediaVolumePosition``
   *
   * @method OcaMediaRecorderPlayer#GetWindowRange
   * @returns {Promise<Arguments<OcaMediaVolumePosition,OcaMediaVolumePosition>>}
   */
  GetWindowRange(): Promise<
    Arguments<[OcaMediaVolumePosition, OcaMediaVolumePosition]>
  >;

  /**
   * Sets start and end point positions of current record/play window.
   *
   * @method OcaMediaRecorderPlayer#SetWindowRange
   * @param {IOcaMediaVolumePosition} FirstPosition
   * @param {IOcaMediaVolumePosition} LastPosition
   *
   * @returns {Promise<void>}
   */
  SetWindowRange(
    FirstPosition: IOcaMediaVolumePosition,
    LastPosition: IOcaMediaVolumePosition
  ): Promise<void>;
}

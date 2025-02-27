import { OcaList } from '../../OCP1/OcaList.js';
import { OcaLockState } from '../../OCP1/OcaLockState.js';
import { OcaMediaAccessMode } from '../../OCP1/OcaMediaAccessMode.js';
import { OcaMediaPlayOption } from '../../OCP1/OcaMediaPlayOption.js';
import { OcaMediaRecorderPlayerState } from '../../OCP1/OcaMediaRecorderPlayerState.js';
import { OcaMediaTrackFunction } from '../../OCP1/OcaMediaTrackFunction.js';
import { OcaMediaVolumePosition } from '../../OCP1/OcaMediaVolumePosition.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaDatasetWorker } from './OcaDatasetWorker.js';

/**
 * Media volume recorder/player that shall provide streaming data access into
 * and out of **OcaDataset** objects whose Datasets are media files.
 * @extends OcaDatasetWorker
 * @class OcaMediaRecorderPlayer
 */
export const OcaMediaRecorderPlayer = make_control_class(
  'OcaMediaRecorderPlayer',
  4,
  '\u0001\u0001\u0007\u0001',
  3,
  OcaDatasetWorker,
  [
    ['Open', 4, 1, [OcaUint32, OcaMediaAccessMode, OcaLockState], []],
    ['Close', 4, 2, [], []],
    ['Record', 4, 3, [], []],
    ['Play', 4, 4, [], []],
    ['Stop', 4, 5, [], []],
    ['Reset', 4, 6, [], []],
    ['GetState', 4, 7, [], [OcaMediaRecorderPlayerState]],
    ['GetTrackCount', 4, 8, [], [OcaUint16]],
    ['SetTrackCount', 4, 9, [OcaUint16], []],
    ['GetTrackFunctions', 4, 10, [], [OcaList(OcaMediaTrackFunction)]],
    ['SetTrackFunctions', 4, 11, [OcaList(OcaMediaTrackFunction)], []],
    ['GetPlayOption', 4, 12, [], [OcaMediaPlayOption]],
    ['SetPlayOption', 4, 13, [OcaMediaPlayOption], []],
    ['GetPosition', 4, 14, [], [OcaMediaVolumePosition]],
    ['SetPosition', 4, 15, [OcaMediaVolumePosition], []],
    [
      'GetWindowRange',
      4,
      16,
      [],
      [OcaMediaVolumePosition, OcaMediaVolumePosition],
    ],
    [
      'SetWindowRange',
      4,
      17,
      [OcaMediaVolumePosition, OcaMediaVolumePosition],
      [],
    ],
  ],
  [
    ['State', [OcaMediaRecorderPlayerState], 4, 1, false, false, null],
    ['TrackCount', [OcaUint16], 4, 2, false, false, null],
    [
      'TrackFunctions',
      [OcaList(OcaMediaTrackFunction)],
      4,
      3,
      false,
      false,
      null,
    ],
    ['PlayOption', [OcaMediaPlayOption], 4, 4, false, false, null],
    ['WindowStart', [OcaMediaVolumePosition], 4, 5, false, false, null],
    ['WindowEnd', [OcaMediaVolumePosition], 4, 6, false, false, null],
  ],
  []
);

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
/**
 * Closes this object's session on the open media volume.
 *
 * @method OcaMediaRecorderPlayer#Close
 * @returns {Promise<void>}
 */
/**
 * Starts recording immediately. Overwrites the current record/play window, from
 * current position to end.
 *
 * @method OcaMediaRecorderPlayer#Record
 * @returns {Promise<void>}
 */
/**
 * Starts playing immediately. Plays the current record/play window, from
 * current position to end.
 *
 * @method OcaMediaRecorderPlayer#Play
 * @returns {Promise<void>}
 */
/**
 * Stops playing / recording immediately, does not close session. Leaves
 * **Position** at (last accessed +1 ).
 *
 * @method OcaMediaRecorderPlayer#Stop
 * @returns {Promise<void>}
 */
/**
 * Stops playing/recording immediately. Resets record/play window range to
 * entire volume. Sets P**osition** to start of volume. Sets **PlayOption** to
 * **Normal**. Does **not **reset track functions.
 *
 * @method OcaMediaRecorderPlayer#Reset
 * @returns {Promise<void>}
 */
/**
 * Returns current state of this **OcaMediaRecorderPlayer** object.
 *
 * @method OcaMediaRecorderPlayer#GetState
 * @returns {Promise<OcaMediaRecorderPlayerState>}
 *   A promise which resolves to a single value of type :class:`OcaMediaRecorderPlayerState`.
 */
/**
 * Returns track count of currently open media volume, or zero if no volume is
 * open.
 *
 * @method OcaMediaRecorderPlayer#GetTrackCount
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets track count of currently open media volume. Fails if media volume is not
 * open in RECORD mode, or if no media volume is open.
 *
 * @method OcaMediaRecorderPlayer#SetTrackCount
 * @param {number} TrackCount
 *
 * @returns {Promise<void>}
 */
/**
 * Returns the list of track functions.
 *
 * @method OcaMediaRecorderPlayer#GetTrackFunctions
 * @returns {Promise<IOcaMediaTrackFunction[]>}
 *   A promise which resolves to a single value of type ``IOcaMediaTrackFunction[]``.
 */
/**
 * Sets the list of track functions. Fails if no media volume is open.
 *
 * @method OcaMediaRecorderPlayer#SetTrackFunctions
 * @param {IOcaMediaTrackFunction[]} Functions
 *
 * @returns {Promise<void>}
 */
/**
 * Returns value of **PlayOption** property.
 *
 * @method OcaMediaRecorderPlayer#GetPlayOption
 * @returns {Promise<OcaMediaPlayOption>}
 *   A promise which resolves to a single value of type :class:`OcaMediaPlayOption`.
 */
/**
 * Sets value of **PlayOption** property.
 *
 * @method OcaMediaRecorderPlayer#SetPlayOption
 * @param {IOcaMediaPlayOption} Option
 *
 * @returns {Promise<void>}
 */
/**
 * Returns current media position or null value if no media volume is open.
 * Value is relative to the start of the current interval.
 *
 * @method OcaMediaRecorderPlayer#GetPosition
 * @returns {Promise<OcaMediaVolumePosition>}
 *   A promise which resolves to a single value of type :class:`OcaMediaVolumePosition`.
 */
/**
 * Sets media position. Value is relative to the start of the current interval.
 *
 * @method OcaMediaRecorderPlayer#SetPosition
 * @param {IOcaMediaVolumePosition} Position
 *
 * @returns {Promise<void>}
 */
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
/**
 * Sets start and end point positions of current record/play window.
 *
 * @method OcaMediaRecorderPlayer#SetWindowRange
 * @param {IOcaMediaVolumePosition} FirstPosition
 * @param {IOcaMediaVolumePosition} LastPosition
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``State`` changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * State of this object
 *
 * @member {PropertyEvent<OcaMediaRecorderPlayerState>} OcaMediaRecorderPlayer#OnStateChanged
 */
/**
 * This event is emitted when the property ``TrackCount`` changes in the remote object.
 * The property ``TrackCount`` is described in the AES70 standard as follows.
 * Number of tracks (signal channels) in the current media volume. Zero if no
 * media volume is open.
 *
 * @member {PropertyEvent<number>} OcaMediaRecorderPlayer#OnTrackCountChanged
 */
/**
 * This event is emitted when the property ``TrackFunctions`` changes in the remote object.
 * The property ``TrackFunctions`` is described in the AES70 standard as follows.
 * List of track functions. Track function determines whether a track (signal
 * channels) will play in a play and/or record operation, and/or record in a
 * record operation.
 *
 * @member {PropertyEvent<IOcaMediaTrackFunction[]>} OcaMediaRecorderPlayer#OnTrackFunctionsChanged
 */
/**
 * This event is emitted when the property ``PlayOption`` changes in the remote object.
 * The property ``PlayOption`` is described in the AES70 standard as follows.
 *
 *  - Play to end of record/play window and leave Dataset open,
 *
 *  - Play to end of record/play window, then close Dataset, or
 *
 *  - Repeat record/play window until Stop() or Close() is called.
 *
 *
 *
 * @member {PropertyEvent<OcaMediaPlayOption>} OcaMediaRecorderPlayer#OnPlayOptionChanged
 */
/**
 * This event is emitted when the property ``WindowStart`` changes in the remote object.
 * The property ``WindowStart`` is described in the AES70 standard as follows.
 * First position of current record/play window
 *
 * @member {PropertyEvent<OcaMediaVolumePosition>} OcaMediaRecorderPlayer#OnWindowStartChanged
 */
/**
 * This event is emitted when the property ``WindowEnd`` changes in the remote object.
 * The property ``WindowEnd`` is described in the AES70 standard as follows.
 * Last position of current record/play window
 *
 * @member {PropertyEvent<OcaMediaVolumePosition>} OcaMediaRecorderPlayer#OnWindowEndChanged
 */

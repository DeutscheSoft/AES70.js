/*
 * This file has been generated.
 */
import {
  IOcaMediaVolumePositionType,
  OcaMediaVolumePositionType,
} from './OcaMediaVolumePositionType.js';

export declare interface IOcaMediaVolumePosition {
  /**
   * What kind of position specification - samples or seconds.
   * @type OcaMediaVolumePositionType
   */
  PositionType: IOcaMediaVolumePositionType;

  /**
   * Position - sample count or time in floating-point seconds after start of
   * Media Volume.
   * @type number|BigInt
   */
  Position: number | BigInt;
}

export declare class OcaMediaVolumePosition implements IOcaMediaVolumePosition {
  /**
   * Position within a media volume - samples or seconds.
   * @class OcaMediaVolumePosition
   */
  constructor(
    PositionType: OcaMediaVolumePositionType,
    Position: number | BigInt
  );

  /**
   * What kind of position specification - samples or seconds.
   * @type OcaMediaVolumePositionType
   */
  PositionType: OcaMediaVolumePositionType;

  /**
   * Position - sample count or time in floating-point seconds after start of
   * Media Volume.
   * @type number|BigInt
   */
  Position: number | BigInt;
}

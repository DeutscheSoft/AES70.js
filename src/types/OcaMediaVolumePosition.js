/*
 * This file has been generated.
 */

export class OcaMediaVolumePosition {
  /**
   * Position within a media volume - samples or seconds.
   * @class OcaMediaVolumePosition
   */
  constructor(PositionType, Position) {
    /**
     * What kind of position specification - samples or seconds.
     * @type OcaMediaVolumePositionType
     */
    this.PositionType = PositionType;
    /**
     * Position - sample count or time in floating-point seconds after start of
     * Media Volume.
     * @type number|BigInt
     */
    this.Position = Position;
  }
}

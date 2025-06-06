/*
 * This file has been generated.
 */

export class OcaPositionDescriptor {
  /**
   * A six-axis c1,c2,c3,c4,c5,c6) coordinate. For mechanical systems, these
   * axes shall be interpreted as follows:
   *
   *  - c1 = X; axial (fore-and-aft) position
   *
   *  - c2 = Y; lateral (side-to-side) position
   *
   *  - c3 = Z; vertical position
   *
   *  - c4 = rX; rotation around the X-axis, also known as *Roll*
   *
   *  - c5 = rY; rotation around the Y-axis, also known as *Pitch*
   *
   *  - c6 = rZ; rotation around the Z-axis. also known as *Yaw*
   *
   *
   * Rotation angles are measured according to the *right-hand rule:* if the
   * right hand "holds" an axis with the thumb pointing in the direction of
   * ascending coordinate values, then the fingers point in the direction of
   * ascending angle values. For GPS systems, these axes shall be interpreted as
   * follows:
   *
   *  - c1 = longitude
   *
   *  - c2 = latitude
   *
   *  - c3 = altitude
   *
   *  - c4 : not used
   *
   *  - c5 : not used
   *
   *  - c6 : not used
   *
   *
   * @class OcaPositionDescriptor
   */
  constructor(CoordinateSystem, FieldFlags, Values) {
    /**
     * Type of position coordinate system - see AES70-1, section 5.5.9.
     * @type OcaPositionCoordinateSystem
     */
    this.CoordinateSystem = CoordinateSystem;
    /**
     * Which fields of the Values[] array contain valid values.
     * @type IOcaPositionDescriptorFieldFlags
     */
    this.FieldFlags = FieldFlags;
    /**
     * The coordinates
     * @type number[]
     */
    this.Values = Values;
  }
}

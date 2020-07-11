/*
 * This file has been generated.
 */

/**
 * A six-axis c1,c2,c3,c4,c5,c6) coordinate. For mechanical systems,
 * these axes shall be interpreted as follows: <ul> <li>c1 = X; axial
 * (fore-and-aft) position</li> <li>c2 = Y; lateral (side-to-side)
 * position</li> <li>c3 = Z; vertical position</li> <li>c4 = rX; rotation
 * around the X-axis, also known as <i>Roll</i></li> <li>c5 = rY;
 * rotation around the Y-axis, also known as <i>Pitch</i></li> <li>c6 =
 * rZ; rotation around the Z-axis. also known as <i>Yaw</i></li> </ul>
 * Rotation angles are measured according to the <i>right-hand rule: </i>
 * if the right hand "holds" an axis with the thumb pointing in the
 * direction of ascending coordinate values, then the fingers point in
 * the direction of ascending angle values. For GPS systems, these axes
 * shall be interpreted as follows: <ul> <li>c1 = longitude</li> <li>c2 =
 * latitude</li> <li>c3 = altitude</li> <li>c4 : not used</li> <li>c5 :
 * not used</li> <li>c6 : not used</li> </ul>
 */
export class OcaPositionDescriptor {
  constructor(CoordinateSystem, FieldFlags, Values) {
    /**
     * Type of position coordinate system - see AES70-1, section 5.5.9.
     * @member RemoteControlClasses.OcaPositionDescriptor#OnCoordinateSystemChanged {PropertyEvent<OcaPositionCoordinateSystem>} - This event is emitted when CoordinateSystem changes in the remote object.
     */
    this.CoordinateSystem = CoordinateSystem;
    /**
     * Which fields of the Values[] array contain valid values.
     * @member RemoteControlClasses.OcaPositionDescriptor#OnFieldFlagsChanged {PropertyEvent<OcaPositionDescriptorFieldFlags>} - This event is emitted when FieldFlags changes in the remote object.
     */
    this.FieldFlags = FieldFlags;
    /**
     * The coordinates
     * @member RemoteControlClasses.OcaPositionDescriptor#OnValuesChanged {PropertyEvent<float>} - This event is emitted when Values changes in the remote object.
     */
    this.Values = Values;
  }
}

/*
 * This file has been generated.
 */

/**
 * An absolute level expressed in dB above the given absolute reference
 * level.
 */
export class OcaDBr {
  constructor(Value, Ref) {
    /**
     * Absolute level in decibels relative to value of <b>Ref</b> property.
     * @member RemoteControlClasses.OcaDBr#OnValueChanged {PropertyEvent<OcaDB>} - This event is emitted when Value changes in the remote object.
     */
    this.Value = Value;
    /**
     * Reference level in dBz. See the definition of OcaDBz for an
     * explanation of the dBz unit.
     * @member RemoteControlClasses.OcaDBr#OnRefChanged {PropertyEvent<OcaDBz>} - This event is emitted when Ref changes in the remote object.
     */
    this.Ref = Ref;
  }
}

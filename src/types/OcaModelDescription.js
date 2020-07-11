/*
 * This file has been generated.
 */

/**
 * Friendly description of this particular product model.
 */
export class OcaModelDescription {
  constructor(Manufacturer, Name, Version) {
    /**
     * Name of manufacturer.
     * @member RemoteControlClasses.OcaModelDescription#OnManufacturerChanged {PropertyEvent<string>} - This event is emitted when Manufacturer changes in the remote object.
     */
    this.Manufacturer = Manufacturer;
    /**
     * Name of this model (whatever the manufacturer wants to call it).
     * @member RemoteControlClasses.OcaModelDescription#OnNameChanged {PropertyEvent<string>} - This event is emitted when Name changes in the remote object.
     */
    this.Name = Name;
    /**
     * Text name for the version of this model, e.g. "1.2.1a".
     * @member RemoteControlClasses.OcaModelDescription#OnVersionChanged {PropertyEvent<string>} - This event is emitted when Version changes in the remote object.
     */
    this.Version = Version;
  }
}

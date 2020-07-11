/*
 * This file has been generated.
 */

/**
 * Globally unique identifier of a library type.
 */
export class OcaLibVolType {
  constructor(Authority, ID) {
    /**
     * Unique identifier of organization that has authority over this library
     * volume type. A zero value indicates a standard library volume type
     * defined by the AES70 standard.
     * @member RemoteControlClasses.OcaLibVolType#OnAuthorityChanged {PropertyEvent<OcaOrganizationID>} - This event is emitted when Authority changes in the remote object.
     */
    this.Authority = Authority;
    /**
     * ID of library volume type defined by given Authority. Value is unique
     * within the given Authority. If Authority=0, the values of this
     * property are given by enum <b>OcaLibVolStandardID.</b>
     * @member RemoteControlClasses.OcaLibVolType#OnIDChanged {PropertyEvent<number>} - This event is emitted when ID changes in the remote object.
     */
    this.ID = ID;
  }
}

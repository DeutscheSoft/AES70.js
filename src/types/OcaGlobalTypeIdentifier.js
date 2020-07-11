/*
 * This file has been generated.
 */

/**
 * Globally unique identifier of something that belongs to an
 * organization.
 */
export class OcaGlobalTypeIdentifier {
  constructor(Authority, ID) {
    /**
     * Unique identifier of organization that has authority over this
     * reusable block type. A zero value indicates a global type defined by
     * the AES70 standard itself.
     * @member RemoteControlClasses.OcaGlobalTypeIdentifier#OnAuthorityChanged {PropertyEvent<OcaOrganizationID>} - This event is emitted when Authority changes in the remote object.
     */
    this.Authority = Authority;
    /**
     * ID of library volume type defined by given Authority. Value is unique
     * within the given Authority.
     * @member RemoteControlClasses.OcaGlobalTypeIdentifier#OnIDChanged {PropertyEvent<number>} - This event is emitted when ID changes in the remote object.
     */
    this.ID = ID;
  }
}

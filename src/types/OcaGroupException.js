/*
 * This file has been generated.
 */

export class OcaGroupException {
  /**
   * Member of the OcaGroupExceptionEventData list.
   * @class OcaGroupException
   */
  constructor(ONo, MethodID, Status) {
    /**
     * ONo of Group Member raising the exception
     * @type number
     */
    this.ONo = ONo;
    /**
     * Method ID of the called method that returned a not-OK status, thereby
     * causing the exception.
     * @type OcaMethodID
     */
    this.MethodID = MethodID;
    /**
     * Status code returned by the called method.
     * @type OcaStatus
     */
    this.Status = Status;
  }
}

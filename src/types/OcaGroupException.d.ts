/*
 * This file has been generated.
 */
import { IOcaMethodID, OcaMethodID } from './OcaMethodID.js';
import { IOcaStatus, OcaStatus } from './OcaStatus.js';

export declare interface IOcaGroupException {
  /**
   * ONo of Group Member raising the exception
   * @type number
   */
  ONo: number;

  /**
   * Method ID of the called method that returned a not-OK status, thereby
   * causing the exception.
   * @type OcaMethodID
   */
  MethodID: IOcaMethodID;

  /**
   * Status code returned by the called method.
   * @type OcaStatus
   */
  Status: IOcaStatus;
}

export declare class OcaGroupException implements IOcaGroupException {
  /**
   * Member of the OcaGroupExceptionEventData list.
   * @class OcaGroupException
   */
  constructor(ONo: number, MethodID: OcaMethodID, Status: OcaStatus);

  /**
   * ONo of Group Member raising the exception
   * @type number
   */
  ONo: number;

  /**
   * Method ID of the called method that returned a not-OK status, thereby
   * causing the exception.
   * @type OcaMethodID
   */
  MethodID: OcaMethodID;

  /**
   * Status code returned by the called method.
   * @type OcaStatus
   */
  Status: OcaStatus;
}

/*
 * This file has been generated.
 */
import { IOcaLibAccess, OcaLibAccess } from './OcaLibAccess';
import { IOcaLibVolType, OcaLibVolType } from './OcaLibVolType';
import { IOcaTimePTP, OcaTimePTP } from './OcaTimePTP';

export declare interface IOcaLibVolMetadata {
  /**
   * Name of library volume
   * @type string
   */
  Name: string;

  /**
   * Type of library volume
   * @type OcaLibVolType
   */
  VolType: IOcaLibVolType;

  /**
   * Access mode of library volume - readonly or readwrite.
   * @type OcaLibAccess
   */
  Access: IOcaLibAccess;

  /**
   * Version number of library volume.
   * @type number
   */
  Version: number;

  /**
   * Name of creator of library volume.
   * @type string
   */
  Creator: string;

  /**
   * Latest update timestamp.
   * @type OcaTimePTP
   */
  UpDate: IOcaTimePTP;
}

export declare class OcaLibVolMetadata implements IOcaLibVolMetadata {
  /**
   * Descriptor of a library volume. See **03 OcaLibrary** for explanation.
   * @class OcaLibVolMetadata
   */
  constructor(
    Name: string,
    VolType: OcaLibVolType,
    Access: OcaLibAccess,
    Version: number,
    Creator: string,
    UpDate: OcaTimePTP
  );

  /**
   * Name of library volume
   * @type string
   */
  Name: string;

  /**
   * Type of library volume
   * @type OcaLibVolType
   */
  VolType: OcaLibVolType;

  /**
   * Access mode of library volume - readonly or readwrite.
   * @type OcaLibAccess
   */
  Access: OcaLibAccess;

  /**
   * Version number of library volume.
   * @type number
   */
  Version: number;

  /**
   * Name of creator of library volume.
   * @type string
   */
  Creator: string;

  /**
   * Latest update timestamp.
   * @type OcaTimePTP
   */
  UpDate: OcaTimePTP;
}

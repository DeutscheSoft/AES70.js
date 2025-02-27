/*
 * This file has been generated.
 */

export declare interface IOcaTimeDeliveryParameters_StreamEndpoint {
  /**
   * ONo of media transport network application object that owns the endpoint.
   * @type number
   */
  EndpointOwner: number;

  /**
   * Endpoint index within its owner.
   * @type number
   */
  EndpointID: number;
}

export declare class OcaTimeDeliveryParameters_StreamEndpoint
  implements IOcaTimeDeliveryParameters_StreamEndpoint {
  /**
   * Value of **OcaTimeSource.TimeDeliveryParameters** when
   * **OcaTimeSource.DeliveryMechanism** = **StreamEndpoint**. This datatype
   * shall be rendered as a JSON object in the parameter record.
   * @class OcaTimeDeliveryParameters_StreamEndpoint
   */
  constructor(EndpointOwner: number, EndpointID: number);

  /**
   * ONo of media transport network application object that owns the endpoint.
   * @type number
   */
  EndpointOwner: number;

  /**
   * Endpoint index within its owner.
   * @type number
   */
  EndpointID: number;
}

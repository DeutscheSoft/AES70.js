/*
 * This file has been generated.
 */

export class OcaTimeDeliveryParameters_StreamEndpoint {
  /**
   * Value of **OcaTimeSource.TimeDeliveryParameters** when
   * **OcaTimeSource.DeliveryMechanism** = **StreamEndpoint**. This datatype
   * shall be rendered as a JSON object in the parameter record.
   * @class OcaTimeDeliveryParameters_StreamEndpoint
   */
  constructor(EndpointOwner, EndpointID) {
    /**
     * ONo of media transport network application object that owns the endpoint.
     * @type number
     */
    this.EndpointOwner = EndpointOwner;
    /**
     * Endpoint index within its owner.
     * @type number
     */
    this.EndpointID = EndpointID;
  }
}

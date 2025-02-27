/*
 * This file has been generated.
 */

export class OcaNetworkInterfaceAssignment {
  /**
   * Assignment of a Network Interface object to a Network Application object.
   * Also specifies associated Network Advertising mechanism(s).
   * @class OcaNetworkInterfaceAssignment
   */
  constructor(
    ID,
    NetworkInterfaceONo,
    NetworkBindingParameters,
    SecurityKeyIdentities,
    AdvertisingMechanisms
  ) {
    /**
     * Internal ID of Network Assignment. Unique within the instance of
     * **OcaMediaTransportApplication** (or subclass)**** that owns the
     * Assignment.
     * @type number
     */
    this.ID = ID;
    /**
     * ONo of the Network Interface
     * @type number
     */
    this.NetworkInterfaceONo = NetworkInterfaceONo;
    /**
     * Assignment-specific parameters. Format depends on application. For
     * example, IP-based applications can use this field to designate the IP
     * port being used.
     * @type Uint8Array
     */
    this.NetworkBindingParameters = NetworkBindingParameters;
    /**
     * List of identities of security keys that apply to this assignment.
     * Assumes the identities refer to private shared keys registered in
     * **OcaSecurityManager**.
     * @type string[]
     */
    this.SecurityKeyIdentities = SecurityKeyIdentities;
    /**
     * List of advertising mechanisms associated with this Assignment. May be
     * empty.
     * @type OcaNetworkAdvertisingMechanism[]
     */
    this.AdvertisingMechanisms = AdvertisingMechanisms;
  }
}

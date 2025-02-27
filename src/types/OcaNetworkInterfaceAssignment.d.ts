/*
 * This file has been generated.
 */
import {
  IOcaNetworkAdvertisingMechanism,
  OcaNetworkAdvertisingMechanism,
} from './OcaNetworkAdvertisingMechanism';

export declare interface IOcaNetworkInterfaceAssignment {
  /**
   * Internal ID of Network Assignment. Unique within the instance of
   * **OcaMediaTransportApplication** (or subclass)**** that owns the
   * Assignment.
   * @type number
   */
  ID: number;

  /**
   * ONo of the Network Interface
   * @type number
   */
  NetworkInterfaceONo: number;

  /**
   * Assignment-specific parameters. Format depends on application. For example,
   * IP-based applications can use this field to designate the IP port being
   * used.
   * @type Uint8Array
   */
  NetworkBindingParameters: Uint8Array;

  /**
   * List of identities of security keys that apply to this assignment. Assumes
   * the identities refer to private shared keys registered in
   * **OcaSecurityManager**.
   * @type string[]
   */
  SecurityKeyIdentities: string[];

  /**
   * List of advertising mechanisms associated with this Assignment. May be
   * empty.
   * @type OcaNetworkAdvertisingMechanism[]
   */
  AdvertisingMechanisms: IOcaNetworkAdvertisingMechanism[];
}

export declare class OcaNetworkInterfaceAssignment
  implements IOcaNetworkInterfaceAssignment {
  /**
   * Assignment of a Network Interface object to a Network Application object.
   * Also specifies associated Network Advertising mechanism(s).
   * @class OcaNetworkInterfaceAssignment
   */
  constructor(
    ID: number,
    NetworkInterfaceONo: number,
    NetworkBindingParameters: Uint8Array,
    SecurityKeyIdentities: string[],
    AdvertisingMechanisms: OcaNetworkAdvertisingMechanism[]
  );

  /**
   * Internal ID of Network Assignment. Unique within the instance of
   * **OcaMediaTransportApplication** (or subclass)**** that owns the
   * Assignment.
   * @type number
   */
  ID: number;

  /**
   * ONo of the Network Interface
   * @type number
   */
  NetworkInterfaceONo: number;

  /**
   * Assignment-specific parameters. Format depends on application. For example,
   * IP-based applications can use this field to designate the IP port being
   * used.
   * @type Uint8Array
   */
  NetworkBindingParameters: Uint8Array;

  /**
   * List of identities of security keys that apply to this assignment. Assumes
   * the identities refer to private shared keys registered in
   * **OcaSecurityManager**.
   * @type string[]
   */
  SecurityKeyIdentities: string[];

  /**
   * List of advertising mechanisms associated with this Assignment. May be
   * empty.
   * @type OcaNetworkAdvertisingMechanism[]
   */
  AdvertisingMechanisms: OcaNetworkAdvertisingMechanism[];
}

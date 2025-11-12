/*
 * This file has been generated.
 */
import {
  IOcaStreamConnectorIdentification,
  OcaStreamConnectorIdentification,
} from './OcaStreamConnectorIdentification.js';
import { IOcaStreamStatus, OcaStreamStatus } from './OcaStreamStatus.js';
import { IOcaStreamType, OcaStreamType } from './OcaStreamType.js';

export declare interface IOcaStream {
  /**
   * Index of most recent error encountered.
   * @type number
   */
  ErrorNumber: number;

  /**
   * Public identifier of this stream.
   * @type Uint8Array
   */
  IDAdvertised: Uint8Array;

  /**
   * Index of this stream. Unique within owner OcaNetwork2 object.
   * @type number
   */
  Index: number;

  /**
   * Arbitrary user-settable name for this stream.
   * @type string
   */
  Label: string;

  /**
   * Object number of **OcaStreamConnector** object to which this stream is
   * connected. A value of zero means the stream is not connected to any
   * connector in this device.
   * @type number
   */
  LocalConnectorONo: number;

  /**
   * Traffic priority of stream. Values are network implementation dependant.
   * @type number
   */
  Priority: number;

  /**
   * Full identifier of the connector at the far end of this stream.
   * @type OcaStreamConnectorIdentification
   */
  RemoteConnectorIdentification: IOcaStreamConnectorIdentification;

  /**
   * True if and only if connection is secure.
   * @type boolean
   */
  Secure: boolean;

  /**
   * Current status of the stream.
   * @type OcaStreamStatus
   */
  Status: IOcaStreamStatus;

  /**
   * Stream parameters (encoding, sampling, etc). Details TBD
   * @type Uint8Array
   */
  StreamParameters: Uint8Array;

  /**
   * Unicast or multicast
   * @type OcaStreamType
   */
  StreamType: IOcaStreamType;
}

export declare class OcaStream implements IOcaStream {
  /**
   * A single-channel or multichannel signal flow between a local stream
   * connector (i.e. **OcaStreamConnector** instance) of an **OcaStreamNetwork**
   * object in this node and another ("remote") stream connector. Normally, the
   * remote stream connector is in another node. Each stream is unidirectional.
   * With respect to the **OcaStreamNetwork** object in question, a stream is
   * either:
   *
   *  - *Outbound: * A signal flow from an output connector port in the
   *    **OcaStreamNetwork** object to an external destination; or
   *
   *  - *Inbound: * A signal flow from an external source to an *input*
   *    connector in the **OcaStreamNetwork** object.
   *
   *
   * An **OcaStream** object may represent either a unicast or a multicast
   * stream. Any given **OcaStreamConnector** object may support multiple
   * outbound flows, but not multiple inbound flows.
   * @class OcaStream
   */
  constructor(
    ErrorNumber: number,
    IDAdvertised: Uint8Array,
    Index: number,
    Label: string,
    LocalConnectorONo: number,
    Priority: number,
    RemoteConnectorIdentification: OcaStreamConnectorIdentification,
    Secure: boolean,
    Status: OcaStreamStatus,
    StreamParameters: Uint8Array,
    StreamType: OcaStreamType
  );

  /**
   * Index of most recent error encountered.
   * @type number
   */
  ErrorNumber: number;

  /**
   * Public identifier of this stream.
   * @type Uint8Array
   */
  IDAdvertised: Uint8Array;

  /**
   * Index of this stream. Unique within owner OcaNetwork2 object.
   * @type number
   */
  Index: number;

  /**
   * Arbitrary user-settable name for this stream.
   * @type string
   */
  Label: string;

  /**
   * Object number of **OcaStreamConnector** object to which this stream is
   * connected. A value of zero means the stream is not connected to any
   * connector in this device.
   * @type number
   */
  LocalConnectorONo: number;

  /**
   * Traffic priority of stream. Values are network implementation dependant.
   * @type number
   */
  Priority: number;

  /**
   * Full identifier of the connector at the far end of this stream.
   * @type OcaStreamConnectorIdentification
   */
  RemoteConnectorIdentification: OcaStreamConnectorIdentification;

  /**
   * True if and only if connection is secure.
   * @type boolean
   */
  Secure: boolean;

  /**
   * Current status of the stream.
   * @type OcaStreamStatus
   */
  Status: OcaStreamStatus;

  /**
   * Stream parameters (encoding, sampling, etc). Details TBD
   * @type Uint8Array
   */
  StreamParameters: Uint8Array;

  /**
   * Unicast or multicast
   * @type OcaStreamType
   */
  StreamType: OcaStreamType;
}

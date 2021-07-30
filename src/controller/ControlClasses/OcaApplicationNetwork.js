import { make_control_class } from '../make_control_class.js';
import { OcaRoot } from './OcaRoot.js';
import { OcaApplicationNetworkCommand } from '../../OCP1/OcaApplicationNetworkCommand.js';
import { OcaApplicationNetworkState } from '../../OCP1/OcaApplicationNetworkState.js';
import { OcaBlob } from '../../OCP1/OcaBlob.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaNetworkSystemInterfaceDescriptor } from '../../OCP1/OcaNetworkSystemInterfaceDescriptor.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint16 } from '../../OCP1/OcaUint16.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';

/**
 * Abstract base class from which the application network classes inherit.
 * @extends OcaRoot
 * @class OcaApplicationNetwork
 */
export const OcaApplicationNetwork = make_control_class(
  'OcaApplicationNetwork',
  2,
  '\u0001\u0004',
  1,
  OcaRoot,
  [
    ['GetLabel', 2, 1, [], [OcaString]],
    ['SetLabel', 2, 2, [OcaString], []],
    ['GetOwner', 2, 3, [], [OcaUint32]],
    ['GetServiceID', 2, 4, [], [OcaBlob]],
    ['SetServiceID', 2, 5, [OcaBlob], []],
    [
      'GetSystemInterfaces',
      2,
      6,
      [],
      [OcaList(OcaNetworkSystemInterfaceDescriptor)],
    ],
    [
      'SetSystemInterfaces',
      2,
      7,
      [OcaList(OcaNetworkSystemInterfaceDescriptor)],
      [],
    ],
    ['GetState', 2, 8, [], [OcaApplicationNetworkState]],
    ['GetErrorCode', 2, 9, [], [OcaUint16]],
    ['Control', 2, 10, [OcaApplicationNetworkCommand], []],
    ['GetPath', 2, 11, [], [OcaList(OcaString), OcaList(OcaUint32)]],
  ],
  [
    ['Label', [OcaString], 2, 1, false, true, null],
    ['Owner', [OcaUint32], 2, 2, false, true, null],
    ['ServiceID', [OcaBlob], 2, 3, false, false, null],
    [
      'SystemInterfaces',
      [OcaList(OcaNetworkSystemInterfaceDescriptor)],
      2,
      4,
      false,
      false,
      null,
    ],
    ['State', [OcaApplicationNetworkState], 2, 5, false, false, null],
    ['ErrorCode', [OcaUint16], 2, 6, false, false, null],
  ],
  []
);

/**
 * Gets the network's user-specified label. Return status indicates whether the operation was successful.
 *
 * @method OcaApplicationNetwork#GetLabel
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the network's user-specified label. Return status indicates whether the operation was successful.
 *
 * @method OcaApplicationNetwork#SetLabel
 * @param {string} Label
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the ONo of this network's containing block. Return status indicates whether the operation was successful.
 *
 * @method OcaApplicationNetwork#GetOwner
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the network's IDAdvertised. Return status indicates whether the operation was successful.
 *
 * @method OcaApplicationNetwork#GetServiceID
 * @returns {Promise<Uint8Array>}
 *   A promise which resolves to a single value of type ``Uint8Array``.
 */
/**
 * Sets the network's IDAdvertised. Return status indicates whether the operation was successful.
 *
 * @method OcaApplicationNetwork#SetServiceID
 * @param {Uint8Array} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves the list of this network's system interface descriptor. Return status indicates whether the list was successfully retrieved.
 *
 * @method OcaApplicationNetwork#GetSystemInterfaces
 * @returns {Promise<OcaNetworkSystemInterfaceDescriptor[]>}
 *   A promise which resolves to a single value of type ``OcaNetworkSystemInterfaceDescriptor[]``.
 */
/**
 * Sets the network's System Interface Descriptor(s). Return status indicates whether the operation was successful. Optional method; System Interface Descriptor may be set at construction time.
 *
 * @method OcaApplicationNetwork#SetSystemInterfaces
 * @param {OcaNetworkSystemInterfaceDescriptor[]} Descriptors
 *
 * @returns {Promise<void>}
 */
/**
 * Retrieves the network's state. Return status indicates whether the status was successfully retrieved.
 *
 * @method OcaApplicationNetwork#GetState
 * @returns {Promise<OcaApplicationNetworkState>}
 *   A promise which resolves to a single value of type :class:`OcaApplicationNetworkState`.
 */
/**
 * Retrieves the most recent error code. Return status indicates whether the operation was successful. Note that a second parameter 'Reset' is removed in v02 of this class.
 *
 * @method OcaApplicationNetwork#GetErrorCode
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Control the application network. Return value indicates success of command execution.
 *
 * @method OcaApplicationNetwork#Control
 * @param {OcaApplicationNetworkCommand} Command
 *
 * @returns {Promise<void>}
 */
/**
 * Returns path from given object down to root. The return value indicates whether the operation succeeded.
 * The return values of this method are
 *
 * - NamePath of type ``string[]``
 * - ONoPath of type ``number[]``
 *
 * @method OcaApplicationNetwork#GetPath
 * @returns {Promise<Arguments<string[],number[]>>}
 */
/**
 * This event is emitted when the property ServiceID changes in the remote object.
 * The property ``ServiceID`` is described in the AES70 standard as follows.
 * Name or GUID that this device publishes in the network's
 * directory/discovery system to designate the services offered via this
 * application network object. This may or may not be the same as the
 * device's host name, if any. For data network types that have host
 * names (e.g. IP networks), the authoritative copy of the host name is
 * in the system interface ID.
 *
 * @member {PropertyEvent<Uint8Array>} OcaApplicationNetwork#OnServiceIDChanged
 */
/**
 * This event is emitted when the property SystemInterfaces changes in the remote object.
 * The property ``SystemInterfaces`` is described in the AES70 standard as follows.
 * Collection of identifiers of system interface descriptor(s) used by
 * the network. A "system interface" is the system service through which
 * network traffic passes into and out of the device -- e.g. a socket.
 * The descriptor format is system and network dependent; for OCA
 * purposes, it is maintained as a variable-length blob which the
 * protocol does not inspect.
 *
 * @member {PropertyEvent<OcaNetworkSystemInterfaceDescriptor[]>} OcaApplicationNetwork#OnSystemInterfacesChanged
 */
/**
 * This event is emitted when the property State changes in the remote object.
 * The property ``State`` is described in the AES70 standard as follows.
 * Operational state of the network.
 *
 * @member {PropertyEvent<OcaApplicationNetworkState>} OcaApplicationNetwork#OnStateChanged
 */
/**
 * This event is emitted when the property ErrorCode changes in the remote object.
 * The property ``ErrorCode`` is described in the AES70 standard as follows.
 * Most recent error code. 0=no error.
 *
 * @member {PropertyEvent<number>} OcaApplicationNetwork#OnErrorCodeChanged
 */

import { make_control_class } from '../Base.js';
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
 * Abstract base class from which the application network classes
 * inherit.
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaApplicationNetwork
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
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
 * Gets the network's user-specified label. Return status indicates
 * whether the operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetLabel
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the network's user-specified label. Return status indicates
 * whether the operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#SetLabel
 * @param Label {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the ONo of this network's containing block. Return status
 * indicates whether the operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetOwner
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetServiceID
 * @returns {Promise<OcaApplicationNetworkServiceID>}
 */
/**
 * Sets the network's IDAdvertised. Return status indicates whether the
 * operation was successful.
 * @method RemoteControlClasses.OcaApplicationNetwork#SetServiceID
 * @param Name {OcaApplicationNetworkServiceID}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the list of this network's system interface descriptor.
 * Return status indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetSystemInterfaces
 * @returns {Promise<OcaList>}
 */
/**
 * Sets the network's System Interface Descriptor(s). Return status
 * indicates whether the operation was successful. Optional method;
 * System Interface Descriptor may be set at construction time.
 * @method RemoteControlClasses.OcaApplicationNetwork#SetSystemInterfaces
 * @param Descriptors {OcaList}
 *
 * @returns {Promise}
 */
/**
 * Retrieves the network's state. Return status indicates whether the
 * status was successfully retrieved.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetState
 * @returns {Promise<OcaApplicationNetworkState>}
 */
/**
 * Retrieves the most recent error code. Return status indicates whether
 * the operation was successful. Note that a second parameter 'Reset' is
 * removed in v02 of this class.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetErrorCode
 * @returns {Promise<OcaUint16>}
 */
/**
 * Control the application network. Return value indicates success of
 * command execution.
 * @method RemoteControlClasses.OcaApplicationNetwork#Control
 * @param Command {OcaApplicationNetworkCommand}
 *
 * @returns {Promise}
 */
/**
 * Returns path from given object down to root. The return value
 * indicates whether the operation succeeded.
 * @method RemoteControlClasses.OcaApplicationNetwork#GetPath
 * @returns {Promise<Arguments<OcaNamePath,OcaONoPath>>}
 */
/**
 * Specific label of the network. Can be used to provide human readable
 * information about the network. The label can be get and set over any
 * network.
 */
/**
 * Object number of block that contains this network.
 */
/**
 * Name or GUID that this device publishes in the network's
 * directory/discovery system to designate the services offered via this
 * application network object. This may or may not be the same as the
 * device's host name, if any. For data network types that have host
 * names (e.g. IP networks), the authoritative copy of the host name is
 * in the system interface ID.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnServiceIDChanged {PropertyEvent<OcaApplicationNetworkServiceID>} - This event is emitted when ServiceID changes in the remote object.
 */
/**
 * Collection of identifiers of system interface descriptor(s) used by
 * the network. A "system interface" is the system service through which
 * network traffic passes into and out of the device -- e.g. a socket.
 * The descriptor format is system and network dependent; for OCA
 * purposes, it is maintained as a variable-length blob which the
 * protocol does not inspect.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnSystemInterfacesChanged {PropertyEvent<OcaList>} - This event is emitted when SystemInterfaces changes in the remote object.
 */
/**
 * Operational state of the network.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnStateChanged {PropertyEvent<OcaApplicationNetworkState>} - This event is emitted when State changes in the remote object.
 */
/**
 * Most recent error code. 0=no error.
 * @member RemoteControlClasses.OcaApplicationNetwork#OnErrorCodeChanged {PropertyEvent<OcaUint16>} - This event is emitted when ErrorCode changes in the remote object.
 */

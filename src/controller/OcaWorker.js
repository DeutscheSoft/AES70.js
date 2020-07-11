import { make_control_class } from './Base.js';
import { OcaRoot } from './OcaRoot.js';
import { OcaBoolean } from '../OCP1/OcaBoolean.js';
import { OcaFloat32 } from '../OCP1/OcaFloat32.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaPort } from '../OCP1/OcaPort.js';
import { OcaPortID } from '../OCP1/OcaPortID.js';
import { OcaPortMode } from '../OCP1/OcaPortMode.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Abstract base class for classes that represent the device's
 * application and support functions.
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaWorker
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaWorker = make_control_class(
  'OcaWorker',
  2,
  '\u0001\u0001',
  2,
  OcaRoot,
  [
    ['GetEnabled', 2, 1, [], [OcaBoolean]],
    ['SetEnabled', 2, 2, [OcaBoolean], []],
    ['AddPort', 2, 3, [OcaString, OcaPortMode], [OcaPortID]],
    ['DeletePort', 2, 4, [OcaPortID], []],
    ['GetPorts', 2, 5, [], [OcaList(OcaPort)]],
    ['GetPortName', 2, 6, [OcaPortID], [OcaString]],
    ['SetPortName', 2, 7, [OcaPortID, OcaString], []],
    ['GetLabel', 2, 8, [], [OcaString]],
    ['SetLabel', 2, 9, [OcaString], []],
    ['GetOwner', 2, 10, [], [OcaUint32]],
    ['GetLatency', 2, 11, [], [OcaFloat32]],
    ['SetLatency', 2, 12, [OcaFloat32], []],
    ['GetPath', 2, 13, [], [OcaList(OcaString), OcaList(OcaUint32)]],
  ],
  [
    ['Enabled', [OcaBoolean], 2, 1, false, false, null],
    ['Ports', [OcaList(OcaPort)], 2, 2, false, false, null],
    ['Label', [OcaString], 2, 3, false, false, null],
    ['Owner', [OcaUint32], 2, 4, false, false, null],
    ['Latency', [OcaFloat32], 2, 5, false, false, null],
  ],
  []
);

/**
 * Gets the value of the Enabled property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetEnabled
 * @returns {Promise<OcaBoolean>}
 */
/**
 * Sets the value of the Enabled property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetEnabled
 * @param enabled {OcaBoolean}
 *
 * @returns {Promise}
 */
/**
 * Adds an input or output port.. The return value indicates whether the
 * port was successfully added.
 * @method RemoteControlClasses.OcaWorker#AddPort
 * @param Label {OcaString}
 *
 * @param Mode {OcaPortMode}
 *
 * @returns {Promise<OcaPortID>}
 */
/**
 * Deletes an input or output port.. The return value indicates whether
 * the port was successfully deleted.
 * @method RemoteControlClasses.OcaWorker#DeletePort
 * @param ID {OcaPortID}
 *
 * @returns {Promise}
 */
/**
 * Gets the list of ports owned by the Worker object. The return value
 * indicates whether the list was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetPorts
 * @returns {Promise<OcaList>}
 */
/**
 * Gets the name of the designated port. The return value indicates
 * whether the name was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetPortName
 * @param PortID {OcaPortID}
 *
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the name of the designated port. The return value indicates
 * whether the name was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetPortName
 * @param PortID {OcaPortID}
 *
 * @param Name {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetLabel
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetLabel
 * @param label {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetOwner
 * @returns {Promise<OcaONo>}
 */
/**
 * Gets the value of the Latency property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaWorker#GetLatency
 * @returns {Promise<OcaTimeInterval>}
 */
/**
 * Sets the value of the Latency property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaWorker#SetLatency
 * @param latency {OcaTimeInterval}
 *
 * @returns {Promise}
 */
/**
 * Returns path from the given object down to root. The return value
 * indicates whether the operation succeeded. Added in version 2.
 * @method RemoteControlClasses.OcaWorker#GetPath
 * @returns {Promise<Arguments<OcaNamePath,OcaONoPath>>}
 */
/**
 * Read/write property that indicates whether the worker object is
 * enabled in the device. If an object is disabled it cannot be used by
 * the application. Note that the behavior of a disabled object depends
 * on the object itself (e.g. a disabled chime generator is silent, a
 * disabled equalizer is flat, etc.).
 * @member RemoteControlClasses.OcaWorker#OnEnabledChanged {PropertyEvent<OcaBoolean>} - This event is emitted when Enabled changes in the remote object.
 */
/**
 * The list of (input and output) OCA ports the worker object has. Note
 * that a worker object can have no ports (in which case the list is
 * empty).
 * @member RemoteControlClasses.OcaWorker#OnPortsChanged {PropertyEvent<OcaList>} - This event is emitted when Ports changes in the remote object.
 */
/**
 * Specific label of the worker. Can be used to provide human readable
 * information about the worker. The label can be get and set over the
 * network.
 * @member RemoteControlClasses.OcaWorker#OnLabelChanged {PropertyEvent<OcaString>} - This event is emitted when Label changes in the remote object.
 */
/**
 * Object number of block that contains this worker.
 * @member RemoteControlClasses.OcaWorker#OnOwnerChanged {PropertyEvent<OcaONo>} - This event is emitted when Owner changes in the remote object.
 */
/**
 * Processing latency of this object. Optional. Readonly or readwrite,
 * depending on implementation.
 * @member RemoteControlClasses.OcaWorker#OnLatencyChanged {PropertyEvent<OcaTimeInterval>} - This event is emitted when Latency changes in the remote object.
 */

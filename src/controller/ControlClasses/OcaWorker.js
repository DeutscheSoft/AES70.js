import { OcaBoolean } from '../../OCP1/OcaBoolean.js';
import { OcaFloat32 } from '../../OCP1/OcaFloat32.js';
import { OcaIODirection } from '../../OCP1/OcaIODirection.js';
import { OcaList } from '../../OCP1/OcaList.js';
import { OcaMap } from '../../OCP1/OcaMap.js';
import { OcaPort } from '../../OCP1/OcaPort.js';
import { OcaPortClockMapEntry } from '../../OCP1/OcaPortClockMapEntry.js';
import { OcaPortID } from '../../OCP1/OcaPortID.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaRoot } from './OcaRoot.js';

/**
 * Abstract base class for classes that represent the device's application and
 * support functions.
 * @extends OcaRoot
 * @class OcaWorker
 */
export const OcaWorker = make_control_class(
  'OcaWorker',
  2,
  '\u0001\u0001',
  3,
  OcaRoot,
  [
    ['GetEnabled', 2, 1, [], [OcaBoolean]],
    ['SetEnabled', 2, 2, [OcaBoolean], []],
    ['AddPort', 2, 3, [OcaString, OcaIODirection], [OcaPortID]],
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
    ['GetPortClockMap', 2, 14, [], [OcaMap(OcaPortID, OcaPortClockMapEntry)]],
    ['SetPortClockMap', 2, 15, [OcaMap(OcaPortID, OcaPortClockMapEntry)], []],
    ['GetPortClockMapEntry', 2, 16, [OcaPortID], [OcaPortClockMapEntry]],
    ['SetPortClockMapEntry', 2, 17, [OcaPortID, OcaPortClockMapEntry], []],
    ['DeletePortClockMapEntry', 2, 18, [OcaPortID], []],
  ],
  [
    ['Enabled', [OcaBoolean], 2, 1, false, false, null],
    ['Ports', [OcaList(OcaPort)], 2, 2, false, false, null],
    ['Label', [OcaString], 2, 3, false, false, null],
    ['Owner', [OcaUint32], 2, 4, true, false, null],
    ['Latency', [OcaFloat32], 2, 5, false, false, null],
    [
      'PortClockMap',
      [OcaMap(OcaPortID, OcaPortClockMapEntry)],
      2,
      6,
      false,
      false,
      null,
    ],
  ],
  []
);

/**
 * Gets the value of the Enabled property.
 *
 * @method OcaWorker#GetEnabled
 * @returns {Promise<boolean>}
 *   A promise which resolves to a single value of type ``boolean``.
 */
/**
 * Sets the value of the Enabled property.
 *
 * @method OcaWorker#SetEnabled
 * @param {boolean} enabled
 *
 * @returns {Promise<void>}
 */
/**
 * Adds an input or output port..
 *
 * @method OcaWorker#AddPort
 * @param {string} Name
 * @param {IOcaIODirection} Mode
 *
 * @returns {Promise<OcaPortID>}
 *   A promise which resolves to a single value of type :class:`OcaPortID`.
 */
/**
 * Deletes an input or output port..
 *
 * @method OcaWorker#DeletePort
 * @param {IOcaPortID} ID
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the list of ports owned by the Worker object.
 *
 * @method OcaWorker#GetPorts
 * @returns {Promise<OcaPort[]>}
 *   A promise which resolves to a single value of type :class:`OcaPort[]`.
 */
/**
 * Gets the name of the designated port.
 *
 * @method OcaWorker#GetPortName
 * @param {IOcaPortID} PortID
 *
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the name of the designated port.
 *
 * @method OcaWorker#SetPortName
 * @param {IOcaPortID} ID
 * @param {string} Name
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Label property.
 *
 * @method OcaWorker#GetLabel
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the Label property.
 *
 * @method OcaWorker#SetLabel
 * @param {string} label
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Owner property.
 *
 * @method OcaWorker#GetOwner
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Gets the value of the Latency property.
 *
 * @method OcaWorker#GetLatency
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Sets the value of the Latency property.
 *
 * @method OcaWorker#SetLatency
 * @param {number} latency
 *
 * @returns {Promise<void>}
 */
/**
 * Returns Role Path and ONo Path from the Root Block to this object. The return
 * value indicates whether the operation succeeded.
 * The return values of this method are
 *
 * - RolePath of type ``string[]``
 * - ONoPath of type ``number[]``
 *
 * @method OcaWorker#GetPath
 * @returns {Promise<Arguments<string[],number[]>>}
 */
/**
 * Gets the value of the PortClockMap property.
 *
 * @method OcaWorker#GetPortClockMap
 * @returns {Promise<Map<OcaPortID, OcaPortClockMapEntry>>}
 *   A promise which resolves to a single value of type ``Map<OcaPortID, OcaPortClockMapEntry>``.
 */
/**
 * Sets the value of the PortClockMap property.
 *
 * @method OcaWorker#SetPortClockMap
 * @param {Map<IOcaPortID, IOcaPortClockMapEntry>} Map
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the PortClockMap entry identified by the given PortID.
 *
 * @method OcaWorker#GetPortClockMapEntry
 * @param {IOcaPortID} ID
 *
 * @returns {Promise<OcaPortClockMapEntry>}
 *   A promise which resolves to a single value of type :class:`OcaPortClockMapEntry`.
 */
/**
 * Sets an entry in the PortClockMap property. Adds entry if none already exists
 * for the given port; replaces entry if it does already exist.
 *
 * @method OcaWorker#SetPortClockMapEntry
 * @param {IOcaPortID} PortID
 * @param {IOcaPortClockMapEntry} Entry
 *
 * @returns {Promise<void>}
 */
/**
 * Deletes PortClockMap entry identified by the given ID.
 *
 * @method OcaWorker#DeletePortClockMapEntry
 * @param {IOcaPortID} ID
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``Enabled`` changes in the remote object.
 * The property ``Enabled`` is described in the AES70 standard as follows.
 * Read/write property that indicates whether the worker object is enabled in
 * the device. If an object is disabled it cannot be used by the application.
 * Note that the behavior of a disabled object depends on the object itself
 * (e.g. a disabled signal generator is silent, a disabled equalizer is flat,
 * etc.).
 *
 * @member {PropertyEvent<boolean>} OcaWorker#OnEnabledChanged
 */
/**
 * This event is emitted when the property ``Ports`` changes in the remote object.
 * The property ``Ports`` is described in the AES70 standard as follows.
 * The list of (input and output) OCA ports the worker object has. Note that a
 * worker object can have no ports, in which case the list is empty.
 *
 * @member {PropertyEvent<OcaPort[]>} OcaWorker#OnPortsChanged
 */
/**
 * This event is emitted when the property ``Label`` changes in the remote object.
 * The property ``Label`` is described in the AES70 standard as follows.
 * Specific label of the worker. Can be used to provide human readable
 * information about the worker. The label can be get and set over the network.
 *
 * @member {PropertyEvent<string>} OcaWorker#OnLabelChanged
 */
/**
 * This event is emitted when the property ``Latency`` changes in the remote object.
 * The property ``Latency`` is described in the AES70 standard as follows.
 * Processing latency of this object. Optional. Readonly or readwrite, depending
 * on implementation.
 *
 * @member {PropertyEvent<number>} OcaWorker#OnLatencyChanged
 */
/**
 * This event is emitted when the property ``PortClockMap`` changes in the remote object.
 * The property ``PortClockMap`` is described in the AES70 standard as follows.
 * **Optional property.** Map that connects OcaMediaClock3 object numbers to
 * input and output OcaPorts and specifies sampling rate converters, if any.
 * OcaPortID = {mode,index}, where mode = Input or Output. Map entries with
 * index=0 are default values, to be used when no entry is found for a given
 * port.
 *
 * @member {PropertyEvent<Map<OcaPortID, OcaPortClockMapEntry>>} OcaWorker#OnPortClockMapChanged
 */

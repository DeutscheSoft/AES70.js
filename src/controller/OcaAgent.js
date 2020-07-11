import { make_control_class } from './Base.js';
import { OcaRoot } from './OcaRoot.js';
import { OcaList } from '../OCP1/OcaList.js';
import { OcaString } from '../OCP1/OcaString.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { OcaUint32 } from '../OCP1/OcaUint32.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Abstract base class for defining agents.
 * @extends RemoteControlClasses.OcaRoot
 * @class OcaAgent
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaAgent = make_control_class(
  'OcaAgent',
  2,
  '\u0001\u0002',
  2,
  OcaRoot,
  [
    ['GetLabel', 2, 1, [], [OcaString]],
    ['SetLabel', 2, 2, [OcaString], []],
    ['GetOwner', 2, 3, [], [OcaUint32]],
    ['GetPath', 2, 4, [], [OcaList(OcaString), OcaList(OcaUint32)]],
  ],
  [
    ['Label', [OcaString], 2, 1, false, false, null],
    ['Owner', [OcaUint32], 2, 2, false, false, null],
  ],
  []
);

/**
 * Gets the value of the Label property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaAgent#GetLabel
 * @returns {Promise<OcaString>}
 */
/**
 * Sets the value of the Label property. The return value indicates
 * whether the property was successfully set.
 * @method RemoteControlClasses.OcaAgent#SetLabel
 * @param Label {OcaString}
 *
 * @returns {Promise}
 */
/**
 * Gets the value of the Owner property. The return value indicates
 * whether the property was successfully retrieved.
 * @method RemoteControlClasses.OcaAgent#GetOwner
 * @returns {Promise<OcaONo>}
 */
/**
 * Returns path from the given object down to root. The return value
 * indicates whether the operation succeeded. Added in version 2.
 * @method RemoteControlClasses.OcaAgent#GetPath
 * @returns {Promise<Arguments<OcaNamePath,OcaONoPath>>}
 */
/**
 * User-specified label.
 * @member RemoteControlClasses.OcaAgent#OnLabelChanged {PropertyEvent<OcaString>} - This event is emitted when Label changes in the remote object.
 */
/**
 * Object number of block that contains this agent.
 * @member RemoteControlClasses.OcaAgent#OnOwnerChanged {PropertyEvent<OcaONo>} - This event is emitted when Owner changes in the remote object.
 */

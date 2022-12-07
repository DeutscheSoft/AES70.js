import { OcaList } from '../../OCP1/OcaList.js';
import { OcaString } from '../../OCP1/OcaString.js';
import { OcaUint32 } from '../../OCP1/OcaUint32.js';
import { make_control_class } from '../make_control_class.js';
import { OcaRoot } from './OcaRoot.js';

/**
 * Abstract base class for defining agents.
 * @extends OcaRoot
 * @class OcaAgent
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
 * Gets the value of the Label property. The return value indicates whether the
 * property was successfully retrieved.
 *
 * @method OcaAgent#GetLabel
 * @returns {Promise<string>}
 *   A promise which resolves to a single value of type ``string``.
 */
/**
 * Sets the value of the Label property. The return value indicates whether the
 * property was successfully set.
 *
 * @method OcaAgent#SetLabel
 * @param {string} Label
 *
 * @returns {Promise<void>}
 */
/**
 * Gets the value of the Owner property. The return value indicates whether the
 * property was successfully retrieved.
 *
 * @method OcaAgent#GetOwner
 * @returns {Promise<number>}
 *   A promise which resolves to a single value of type ``number``.
 */
/**
 * Returns path from the given object down to root. The return value indicates
 * whether the operation succeeded. Added in version 2.
 * The return values of this method are
 *
 * - NamePath of type ``string[]``
 * - ONoPath of type ``number[]``
 *
 * @method OcaAgent#GetPath
 * @returns {Promise<Arguments<string[],number[]>>}
 */
/**
 * This event is emitted when the property ``Label`` changes in the remote object.
 * The property ``Label`` is described in the AES70 standard as follows.
 * User-specified label.
 *
 * @member {PropertyEvent<string>} OcaAgent#OnLabelChanged
 */
/**
 * This event is emitted when the property ``Owner`` changes in the remote object.
 * The property ``Owner`` is described in the AES70 standard as follows.
 * Object number of block that contains this agent.
 *
 * @member {PropertyEvent<number>} OcaAgent#OnOwnerChanged
 */

import { OcaPositionCoordinateSystem } from '../../OCP1/OcaPositionCoordinateSystem.js';
import { OcaPositionDescriptor } from '../../OCP1/OcaPositionDescriptor.js';
import { OcaPositionDescriptorFieldFlags } from '../../OCP1/OcaPositionDescriptorFieldFlags.js';
import { make_control_class } from '../make_control_class.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Physical position of device or an element of it. AES70 supports a variety of
 * positional coordinate systems. For details, see AES70-1, section 5.5.9.
 * @extends OcaAgent
 * @class OcaPhysicalPosition
 */
export const OcaPhysicalPosition = make_control_class(
  'OcaPhysicalPosition',
  3,
  '\u0001\u0002\u0011',
  1,
  OcaAgent,
  [
    ['GetCoordinateSystem', 3, 1, [], [OcaPositionCoordinateSystem]],
    [
      'GetPositionDescriptorFieldFlags',
      3,
      2,
      [],
      [OcaPositionDescriptorFieldFlags],
    ],
    [
      'GetPositionDescriptor',
      3,
      3,
      [],
      [OcaPositionDescriptor, OcaPositionDescriptor, OcaPositionDescriptor],
    ],
    ['SetPositionDescriptor', 3, 4, [OcaPositionDescriptor], []],
  ],
  [
    [
      'CoordinateSystem',
      [OcaPositionCoordinateSystem],
      3,
      1,
      true,
      false,
      null,
    ],
    [
      'PositionDescriptorFieldFlags',
      [OcaPositionDescriptorFieldFlags],
      3,
      2,
      true,
      false,
      null,
    ],
    ['PositionDescriptor', [OcaPositionDescriptor], 3, 3, false, false, null],
  ],
  []
);

/**
 * Retrieves value of property **CoordinateSystem**. Result indicates whether
 * retrieval was successful.
 *
 * @method OcaPhysicalPosition#GetCoordinateSystem
 * @returns {Promise<OcaPositionCoordinateSystem>}
 *   A promise which resolves to a single value of type :class:`OcaPositionCoordinateSystem`.
 */
/**
 * Retrieves value of property **PositionDescriptorFieldFlags**. Result
 * indicates whether retrieval was successful.
 *
 * @method OcaPhysicalPosition#GetPositionDescriptorFieldFlags
 * @returns {Promise<IOcaPositionDescriptorFieldFlags>}
 *   A promise which resolves to a single value of type ``IOcaPositionDescriptorFieldFlags``.
 */
/**
 * Retrieves value of property **PositioinDescriptor**. Result indicates whether
 * retrieval was successful.
 * The return values of this method are
 *
 * - PositionDescriptor of type ``IOcaPositionDescriptor``
 * - minPositionDescriptor of type ``IOcaPositionDescriptor``
 * - maxPositionDescriptor of type ``IOcaPositionDescriptor``
 *
 * @method OcaPhysicalPosition#GetPositionDescriptor
 * @returns {Promise<Arguments<OcaPositionDescriptor,OcaPositionDescriptor,OcaPositionDescriptor>>}
 */
/**
 * Sets value of property **PositionDescriptor**. Result indicates whether
 * setting was successful. The **ParameterError** status is returned if: (a) the
 * **FieldFlags** field of the given **PositionDescriptor** value differs from
 * the object's basic position descriptor as given in its
 * **PositionDescriptorFieldFlags** property, or (b) the given
 * **CoordinateSystem** value conflicts with the object's basic coordinate
 * system as given in its **CoordinateSystem** property. This is an optional
 * method, not implemented for read-only position objects.
 *
 * @method OcaPhysicalPosition#SetPositionDescriptor
 * @param {IOcaPositionDescriptor} PositionDescriptor
 *
 * @returns {Promise<void>}
 */
/**
 * This event is emitted when the property ``PositionDescriptor`` changes in the remote object.
 * The property ``PositionDescriptor`` is described in the AES70 standard as follows.
 * Position coordinates. For details, see AES70-1, section 5.5.9 and the
 * **OcaPositionDescriptor** datatype definition.
 *
 * @member {PropertyEvent<OcaPositionDescriptor>} OcaPhysicalPosition#OnPositionDescriptorChanged
 */

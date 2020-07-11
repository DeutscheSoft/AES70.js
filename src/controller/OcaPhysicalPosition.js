import { make_control_class } from './Base.js';
import { OcaAgent } from './OcaAgent.js';
import { OcaBitSet16 } from '../OCP1/OcaBitSet16.js';
import { OcaPositionCoordinateSystem } from '../OCP1/OcaPositionCoordinateSystem.js';
import { OcaPositionDescriptor } from '../OCP1/OcaPositionDescriptor.js';
import { OcaUint16 } from '../OCP1/OcaUint16.js';
import { String16 } from '../OCP1/String16.js';

/**
 * Physical position of device or an element of it. AES70 supports a
 * variety of positional coordinate systems. For details, see AES70-1,
 * section 5.5.9.
 * @extends RemoteControlClasses.OcaAgent
 * @class OcaPhysicalPosition
 * @memberof RemoteControlClasses
 * @category RemoteControlClasses
 */
export const OcaPhysicalPosition = make_control_class(
  'OcaPhysicalPosition',
  3,
  '\u0001\u0002\u0011',
  1,
  OcaAgent,
  [
    ['GetCoordinateSystem', 3, 1, [], [OcaPositionCoordinateSystem]],
    ['GetPositionDescriptorFieldFlags', 3, 2, [], [OcaBitSet16]],
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
    ['PositionDescriptorFieldFlags', [OcaBitSet16], 3, 2, true, false, null],
    ['PositionDescriptor', [OcaPositionDescriptor], 3, 3, false, false, null],
  ],
  []
);

/**
 * Retrieves value of property <b>CoordinateSystem</b>. Result indicates
 * whether retrieval was successful.
 * @method RemoteControlClasses.OcaPhysicalPosition#GetCoordinateSystem
 * @returns {Promise<OcaPositionCoordinateSystem>}
 */
/**
 * Retrieves value of property <b>PositionDescriptorFieldFlags</b>.
 * Result indicates whether retrieval was successful.
 * @method RemoteControlClasses.OcaPhysicalPosition#GetPositionDescriptorFieldFlags
 * @returns {Promise<OcaPositionDescriptorFieldFlags>}
 */
/**
 * Retrieves value of property <b>PositioinDescriptor</b>. Result
 * indicates whether retrieval was successful.
 * @method RemoteControlClasses.OcaPhysicalPosition#GetPositionDescriptor
 * @returns {Promise<Arguments<OcaPositionDescriptor,OcaPositionDescriptor,OcaPositionDescriptor>>}
 */
/**
 * Sets value of property <b>PositionDescriptor</b>. Result indicates
 * whether setting was successful. The <b>ParameterError </b>status is
 * returned if: (a) the <b>FieldFlags </b>field of the given
 * <b>PositionDescriptor </b>value differs from the object's basic
 * position descriptor as given in its <b>PositionDescriptorFieldFlags
 * </b>property, or (b) the given <b>CoordinateSystem </b>value conflicts
 * with the object's basic coordinate system as given in its
 * <b>CoordinateSystem </b>property. This is an optional method, not
 * implemented for read-only position objects.
 * @method RemoteControlClasses.OcaPhysicalPosition#SetPositionDescriptor
 * @param PositionDescriptor {OcaPositionDescriptor}
 *
 * @returns {Promise}
 */
/**
 * Type of physical coordinate system this object uses. Read-only, set at
 * object construction time.
 */
/**
 * Position descriptor field flags. Describe which position descriptor
 * fields are used by this object. Read-only, set at object construction
 * time.
 */
/**
 * Position coordinates. For details, see AES70-1, section 5.5.9 and the
 * <b>OcaPositionDescriptor </b>datatype definition.
 * @member RemoteControlClasses.OcaPhysicalPosition#OnPositionDescriptorChanged {PropertyEvent<OcaPositionDescriptor>} - This event is emitted when PositionDescriptor changes in the remote object.
 */

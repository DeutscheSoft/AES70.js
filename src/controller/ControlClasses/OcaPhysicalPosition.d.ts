import { OcaPositionCoordinateSystem } from '../../types/OcaPositionCoordinateSystem';
import {
  IOcaPositionDescriptor,
  OcaPositionDescriptor,
} from '../../types/OcaPositionDescriptor';
import { OcaPositionDescriptorFieldFlags } from '../../types/OcaPositionDescriptorFieldFlags';
import { Arguments } from '../arguments';
import { PropertyEvent } from '../property_event';
import { RemoteDevice } from '../remote_device';
import { OcaAgent } from './OcaAgent';

/**
 * Physical position of device or an element of it. AES70 supports a variety of positional coordinate systems. For details, see AES70-1, section 5.5.9.
 * @extends OcaAgent
 * @class OcaPhysicalPosition
 */
export declare class OcaPhysicalPosition extends OcaAgent {
  /**
   * This event is emitted whenever PositionDescriptor changes.
   */
  OnPositionDescriptorChanged: PropertyEvent<OcaPositionDescriptor>;

  constructor(objectNumber: number, device: RemoteDevice);

  /**
   * Retrieves value of property  **CoordinateSystem** . Result indicates whether retrieval was successful.
   *
   * @method OcaPhysicalPosition#GetCoordinateSystem
   * @returns {Promise<OcaPositionCoordinateSystem>}
   *   A promise which resolves to a single value of type :class:`OcaPositionCoordinateSystem`.
   */
  GetCoordinateSystem(): Promise<OcaPositionCoordinateSystem>;

  /**
   * Retrieves value of property  **PositionDescriptorFieldFlags** . Result indicates whether retrieval was successful.
   *
   * @method OcaPhysicalPosition#GetPositionDescriptorFieldFlags
   * @returns {Promise<OcaPositionDescriptorFieldFlags>}
   *   A promise which resolves to a single value of type :class:`OcaPositionDescriptorFieldFlags`.
   */
  GetPositionDescriptorFieldFlags(): Promise<OcaPositionDescriptorFieldFlags>;

  /**
   * Retrieves value of property  **PositioinDescriptor** . Result indicates whether retrieval was successful.
   * The return values of this method are
   *
   * - PositionDescriptor of type ``IOcaPositionDescriptor``
   * - minPositionDescriptor of type ``IOcaPositionDescriptor``
   * - maxPositionDescriptor of type ``IOcaPositionDescriptor``
   *
   * @method OcaPhysicalPosition#GetPositionDescriptor
   * @returns {Promise<Arguments<OcaPositionDescriptor,OcaPositionDescriptor,OcaPositionDescriptor>>}
   */
  GetPositionDescriptor(): Promise<
    Arguments<
      [OcaPositionDescriptor, OcaPositionDescriptor, OcaPositionDescriptor]
    >
  >;

  /**
   * Sets value of property  **PositionDescriptor** . Result indicates whether setting was successful. The  **ParameterError** status is returned if: (a) the  **FieldFlags** field of the given  **PositionDescriptor** value differs from the object's basic position descriptor as given in its  **PositionDescriptorFieldFlags** property, or (b) the given  **CoordinateSystem** value conflicts with the object's basic coordinate system as given in its  **CoordinateSystem** property. This is an optional method, not implemented for read-only position objects.
   *
   * @method OcaPhysicalPosition#SetPositionDescriptor
   * @param {IOcaPositionDescriptor} PositionDescriptor
   *
   * @returns {Promise<void>}
   */
  SetPositionDescriptor(
    PositionDescriptor: IOcaPositionDescriptor
  ): Promise<void>;
}

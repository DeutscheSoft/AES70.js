import { OcaPositionCoordinateSystem } from '../../types/OcaPositionCoordinateSystem.js';
import {
  IOcaPositionDescriptor,
  OcaPositionDescriptor,
} from '../../types/OcaPositionDescriptor.js';
import { IOcaPositionDescriptorFieldFlags } from '../../types/OcaPositionDescriptorFieldFlags.js';
import { Arguments } from '../arguments.js';
import { PropertyEvent } from '../property_event.js';
import { RemoteDevice } from '../remote_device.js';
import { OcaAgent } from './OcaAgent.js';

/**
 * Physical position of device or an element of it. AES70 supports a variety of
 * positional coordinate systems. For details, see AES70-1, section 5.5.9.
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
   * Gets value of property **CoordinateSystem**.
   *
   * @method OcaPhysicalPosition#GetCoordinateSystem
   * @returns {Promise<OcaPositionCoordinateSystem>}
   *   A promise which resolves to a single value of type :class:`OcaPositionCoordinateSystem`.
   */
  GetCoordinateSystem(): Promise<OcaPositionCoordinateSystem>;

  /**
   * Gets value of property **PositionDescriptorFieldFlags**.
   *
   * @method OcaPhysicalPosition#GetPositionDescriptorFieldFlags
   * @returns {Promise<IOcaPositionDescriptorFieldFlags>}
   *   A promise which resolves to a single value of type ``IOcaPositionDescriptorFieldFlags``.
   */
  GetPositionDescriptorFieldFlags(): Promise<IOcaPositionDescriptorFieldFlags>;

  /**
   * Gets value of property **PositionDescriptor**.
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
   * Sets value of property **PositionDescriptor**. Result indicates whether
   * setting was successful. The **ParameterError** status is returned if: (a)
   * the **FieldFlags** field of the given **PositionDescriptor** value differs
   * from the object's basic position descriptor as given in its
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
  SetPositionDescriptor(
    PositionDescriptor: IOcaPositionDescriptor
  ): Promise<void>;
}

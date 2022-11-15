/*
 * This file has been generated.
 */
import {
  IOcaPropertyDescriptor,
  OcaPropertyDescriptor,
} from './OcaPropertyDescriptor';

export declare interface IOcaProperty {
  /**
   * Object number
   * @type number
   */
  ONo: number;

  /**
   * Property descriptor.
   * @type OcaPropertyDescriptor
   */
  Descriptor: IOcaPropertyDescriptor;
}

export declare class OcaProperty implements IOcaProperty {
  /**
   * Template for complete identification of an OCA property instance, including object number, property ID, Get and Set method IDs, and datatype.
   * @class OcaProperty
   */
  constructor(ONo: number, Descriptor: OcaPropertyDescriptor);

  /**
   * Object number
   * @type number
   */
  ONo: number;

  /**
   * Property descriptor.
   * @type OcaPropertyDescriptor
   */
  Descriptor: OcaPropertyDescriptor;
}

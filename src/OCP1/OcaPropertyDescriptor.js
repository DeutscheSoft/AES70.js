/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaBaseDataType } from './OcaBaseDataType.js';
import { OcaMethodID } from './OcaMethodID.js';
import { OcaPropertyID } from './OcaPropertyID.js';

export const OcaPropertyDescriptor = Struct({
  PropertyID: OcaPropertyID,
  BaseDataType: OcaBaseDataType,
  GetterMethodID: OcaMethodID,
  SetterMethodID: OcaMethodID,
});

/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaClassIdentification } from './OcaClassIdentification.js';
import { OcaUint32 } from './OcaUint32.js';

export const OcaObjectIdentification = Struct({
  ONo: OcaUint32,
  ClassIdentification: OcaClassIdentification,
});

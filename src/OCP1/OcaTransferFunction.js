/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaList } from './OcaList.js';

import { OcaTransferFunction as type } from '../types/OcaTransferFunction.js';

export const OcaTransferFunction = Struct(
  {
    Frequency: OcaList(OcaFloat32),
    Amplitude: OcaList(OcaFloat32),
    Phase: OcaList(OcaFloat32),
  },
  type
);

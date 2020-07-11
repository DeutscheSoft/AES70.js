/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaDBr } from './OcaDBr.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaPilotToneDetectorSpec as type } from '../types/OcaPilotToneDetectorSpec.js';

export const OcaPilotToneDetectorSpec = Struct(
  {
    Threshold: OcaDBr,
    Frequency: OcaFloat32,
    PollInterval: OcaUint32,
  },
  type
);

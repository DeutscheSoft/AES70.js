/*
 * This file has been generated.
 */
import { OcaDBr } from './OcaDBr.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaPilotToneDetectorSpec as type } from '../types/OcaPilotToneDetectorSpec.js';

export const OcaPilotToneDetectorSpec = Struct(
  {
    Threshold: OcaDBr,
    Frequency: OcaFloat32,
    PollInterval: OcaUint32,
  },
  type
);

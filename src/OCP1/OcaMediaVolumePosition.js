/*
 * This file has been generated.
 */
import { OcaMediaVolumePositionType } from './OcaMediaVolumePositionType.js';
import { OcaUint64 } from './OcaUint64.js';
import { Struct } from './Struct.js';

import { OcaMediaVolumePosition as type } from '../types/OcaMediaVolumePosition.js';

export const OcaMediaVolumePosition = Struct(
  {
    PositionType: OcaMediaVolumePositionType,
    Position: OcaUint64,
  },
  type
);

/*
 * This file has been generated.
 */
import { OcaIntervalBounds } from './OcaIntervalBounds.js';
import { Struct } from './Struct.js';
import { OcaInterval as type } from '../types/OcaInterval.js';

export function OcaInterval(DT) {
  return Struct(
    {
      Min: DT,
      Max: DT,
      Bounds: OcaIntervalBounds,
    },
    type
  );
}

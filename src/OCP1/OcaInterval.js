/*
 * This file has been generated.
 */
import { OcaInterval } from '../types/OcaInterval.js';
import { OcaIntervalBounds } from './OcaIntervalBounds.js';
import { Struct } from './Struct.js';
import { OcaInterval as type } from '../types/OcaInterval.js';

export function OcaInterval(DT) {
  return class extends Struct(
    {
      Min: DT,
      Max: DT,
      Bounds: OcaIntervalBounds,
    },
    type
  ) {};
}

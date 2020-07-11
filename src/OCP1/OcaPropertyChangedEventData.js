import { OcaPropertyID } from './OcaPropertyID.js';
import { OcaPropertyChangeType } from './OcaPropertyChangeType.js';
import { RestWithOffset } from './RestWithOffset.js';
import { Tuple } from './Tuple.js';

export const OcaPropertyChangedEventData = Tuple(
  OcaPropertyID,
  RestWithOffset(1),
  OcaPropertyChangeType
);

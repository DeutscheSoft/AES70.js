/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaFloat64 } from './OcaFloat64.js';

export const OcaObservationEventData = Struct({
  Event: OcaEvent,
  Reading: OcaFloat64,
});

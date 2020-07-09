/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaEvent } from './OcaEvent.js';
import { OcaGrouperStatusChangeType } from './OcaGrouperStatusChangeType.js';
import { OcaUint16 } from './OcaUint16.js';

export const OcaGrouperStatusChangeEventData = Struct({
  Event: OcaEvent,
  groupIndex: OcaUint16,
  citizenIndex: OcaUint16,
  changeType: OcaGrouperStatusChangeType,
});

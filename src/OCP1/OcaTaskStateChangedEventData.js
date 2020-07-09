/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaLibVolIdentifier } from './OcaLibVolIdentifier.js';
import { OcaTaskStatus } from './OcaTaskStatus.js';
import { OcaUint32 } from './OcaUint32.js';

export const OcaTaskStateChangedEventData = Struct({
  TaskID: OcaUint32,
  ProgramID: OcaLibVolIdentifier,
  Status: OcaTaskStatus,
});

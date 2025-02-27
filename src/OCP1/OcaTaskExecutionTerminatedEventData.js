/*
 * This file has been generated.
 */
import { OcaCommandSetResult } from './OcaCommandSetResult.js';
import { OcaExecutableType } from './OcaExecutableType.js';
import { OcaProgramResult } from './OcaProgramResult.js';
import { OcaUint32 } from './OcaUint32.js';
import { OcaVariant } from './OcaVariant.js';
import { Struct } from './Struct.js';

import { OcaTaskExecutionTerminatedEventData as type } from '../types/OcaTaskExecutionTerminatedEventData.js';

export const OcaTaskExecutionTerminatedEventData = Struct(
  {
    ExecutableType: OcaExecutableType,
    ExecutableONo: OcaUint32,
    Result: OcaVariant(OcaProgramResult, OcaCommandSetResult),
  },
  type
);

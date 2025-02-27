/*
 * This file has been generated.
 */
import { OcaCommandResult } from './OcaCommandResult.js';
import { OcaGenericEndState } from './OcaGenericEndState.js';
import { OcaList } from './OcaList.js';
import { Struct } from './Struct.js';

import { OcaCommandSetResult as type } from '../types/OcaCommandSetResult.js';

export const OcaCommandSetResult = Struct(
  {
    EndState: OcaGenericEndState,
    CommandResults: OcaList(OcaCommandResult),
  },
  type
);

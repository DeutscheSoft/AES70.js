/*
 * This file has been generated.
 */
import { OcaGenericEndState } from './OcaGenericEndState.js';
import { OcaList } from './OcaList.js';
import { OcaTypedBlob } from './OcaTypedBlob.js';
import { Struct } from './Struct.js';

import { OcaProgramResult as type } from '../types/OcaProgramResult.js';

export const OcaProgramResult = Struct(
  {
    EndState: OcaGenericEndState,
    Data: OcaList(OcaTypedBlob),
  },
  type
);

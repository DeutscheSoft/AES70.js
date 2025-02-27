/*
 * This file has been generated.
 */
import { OcaList } from './OcaList.js';
import { OcaTaskGenericState } from './OcaTaskGenericState.js';
import { OcaTypedBlob } from './OcaTypedBlob.js';
import { Struct } from './Struct.js';

import { OcaTaskOperationalState as type } from '../types/OcaTaskOperationalState.js';

export const OcaTaskOperationalState = Struct(
  {
    Generic: OcaTaskGenericState,
    Details: OcaList(OcaTypedBlob),
  },
  type
);

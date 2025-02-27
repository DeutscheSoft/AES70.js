/*
 * This file has been generated.
 */
import { OcaList } from './OcaList.js';
import { OcaLongBlob } from './OcaLongBlob.js';
import { OcaMethod } from './OcaMethod.js';
import { Struct } from './Struct.js';

import { OcaCommand as type } from '../types/OcaCommand.js';

export const OcaCommand = Struct(
  {
    Method: OcaMethod,
    Parameters: OcaList(OcaLongBlob),
  },
  type
);

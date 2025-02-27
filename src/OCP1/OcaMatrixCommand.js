/*
 * This file has been generated.
 */
import { OcaList } from './OcaList.js';
import { OcaLongBlob } from './OcaLongBlob.js';
import { OcaMatrixCoordinates } from './OcaMatrixCoordinates.js';
import { OcaMethodID } from './OcaMethodID.js';
import { Struct } from './Struct.js';

import { OcaMatrixCommand as type } from '../types/OcaMatrixCommand.js';

export const OcaMatrixCommand = Struct(
  {
    Coordinates: OcaMatrixCoordinates,
    ID: OcaMethodID,
    Parameters: OcaList(OcaLongBlob),
  },
  type
);

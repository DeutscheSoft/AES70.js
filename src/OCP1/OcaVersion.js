/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaComponent } from './OcaComponent.js';
import { OcaUint32 } from './OcaUint32.js';

import { OcaVersion as type } from '../types/OcaVersion.js';

export const OcaVersion = Struct(
  {
    Major: OcaUint32,
    Minor: OcaUint32,
    Build: OcaUint32,
    Component: OcaComponent,
  },
  type
);

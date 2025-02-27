/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaList } from './OcaList.js';
import { OcaNetworkAdvertisingMechanism } from './OcaNetworkAdvertisingMechanism.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaNetworkInterfaceAssignment as type } from '../types/OcaNetworkInterfaceAssignment.js';

export const OcaNetworkInterfaceAssignment = Struct(
  {
    ID: OcaUint16,
    NetworkInterfaceONo: OcaUint32,
    NetworkBindingParameters: OcaBlob,
    SecurityKeyIdentities: OcaList(OcaString),
    AdvertisingMechanisms: OcaList(OcaNetworkAdvertisingMechanism),
  },
  type
);

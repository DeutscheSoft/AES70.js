/*
 * This file has been generated.
 */
import { OcaIP4AutoconfigMode } from './OcaIP4AutoconfigMode.js';
import { OcaIP4Gateway } from './OcaIP4Gateway.js';
import { OcaList } from './OcaList.js';
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaIP4NetworkSettings as type } from '../types/OcaIP4NetworkSettings.js';

export const OcaIP4NetworkSettings = Struct(
  {
    AddressAndPrefix: OcaString,
    AutoconfigMode: OcaIP4AutoconfigMode,
    DhcpServerAddress: OcaString,
    DefaultGatewayAddress: OcaString,
    AdditionalGateways: OcaList(OcaIP4Gateway),
    DnsServerAddresses: OcaList(OcaString),
    AdditionalParameters: OcaString,
  },
  type
);

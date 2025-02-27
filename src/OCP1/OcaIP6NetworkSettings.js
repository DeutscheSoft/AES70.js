/*
 * This file has been generated.
 */
import { OcaIP6AutoconfigMode } from './OcaIP6AutoconfigMode.js';
import { OcaIP6Gateway } from './OcaIP6Gateway.js';
import { OcaList } from './OcaList.js';
import { OcaString } from './OcaString.js';
import { Struct } from './Struct.js';

import { OcaIP6NetworkSettings as type } from '../types/OcaIP6NetworkSettings.js';

export const OcaIP6NetworkSettings = Struct(
  {
    AddressAndPrefix: OcaString,
    AutoconfigMode: OcaIP6AutoconfigMode,
    LinkLocalAddress: OcaString,
    DhcpServerAddress: OcaString,
    DefaultGatewayAddress: OcaString,
    AdditionalGateways: OcaList(OcaIP6Gateway),
    DnsServerAddresses: OcaList(OcaString),
    AdditionalParameters: OcaString,
  },
  type
);

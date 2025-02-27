/*
 * This file has been generated.
 */
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaInterval } from './OcaInterval.js';
import { OcaList } from './OcaList.js';
import { OcaMediaFrameFormat } from './OcaMediaFrameFormat.js';
import { OcaMediaStreamModeCapabilityDirection } from './OcaMediaStreamModeCapabilityDirection.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaMediaStreamModeCapability as type } from '../types/OcaMediaStreamModeCapability.js';

export const OcaMediaStreamModeCapability = Struct(
  {
    ID: OcaUint16,
    Name: OcaString,
    Direction: OcaMediaStreamModeCapabilityDirection,
    FrameFormatList: OcaList(OcaMediaFrameFormat),
    EncodingTypeList: OcaList(OcaString),
    SamplingRateList: OcaList(OcaFloat32),
    ChannelCountList: OcaList(OcaUint16),
    ChannelCountRange: OcaInterval(OcaUint16),
    PacketTimeList: OcaList(OcaFloat32),
    PacketTimeRange: OcaInterval(OcaFloat32),
  },
  type
);

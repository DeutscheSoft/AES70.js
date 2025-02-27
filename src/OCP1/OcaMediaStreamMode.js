/*
 * This file has been generated.
 */
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaMediaFrameFormat } from './OcaMediaFrameFormat.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { Struct } from './Struct.js';

import { OcaMediaStreamMode as type } from '../types/OcaMediaStreamMode.js';

export const OcaMediaStreamMode = Struct(
  {
    FrameFormat: OcaMediaFrameFormat,
    EncodingType: OcaString,
    SamplingRate: OcaFloat32,
    ChannelCount: OcaUint16,
    PacketTime: OcaFloat32,
  },
  type
);

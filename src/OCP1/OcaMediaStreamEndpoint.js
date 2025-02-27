/*
 * This file has been generated.
 */
import { OcaBlob } from './OcaBlob.js';
import { OcaBoolean } from './OcaBoolean.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaIODirection } from './OcaIODirection.js';
import { OcaList } from './OcaList.js';
import { OcaMediaStreamCastMode } from './OcaMediaStreamCastMode.js';
import { OcaMediaStreamMode } from './OcaMediaStreamMode.js';
import { OcaMultiMap } from './OcaMultiMap.js';
import { OcaPortID } from './OcaPortID.js';
import { OcaSecurityType } from './OcaSecurityType.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';
import { OcaUint32 } from './OcaUint32.js';
import { Struct } from './Struct.js';

import { OcaMediaStreamEndpoint as type } from '../types/OcaMediaStreamEndpoint.js';

export const OcaMediaStreamEndpoint = Struct(
  {
    IDInternal: OcaUint32,
    IDExternal: OcaBlob,
    Direction: OcaIODirection,
    UserLabel: OcaString,
    NetworkAssignmentIDs: OcaList(OcaUint16),
    StreamModeCapabilityIDs: OcaList(OcaUint16),
    ClockONo: OcaUint32,
    ChannelMapDynamic: OcaBoolean,
    ChannelMap: OcaMultiMap(OcaUint16, OcaPortID),
    AlignmentLevel: OcaFloat32,
    CurrentStreamMode: OcaMediaStreamMode,
    SecurityType: OcaSecurityType,
    StreamCastMode: OcaMediaStreamCastMode,
    AdaptationData: OcaBlob,
    RedundantSetID: OcaUint16,
  },
  type
);

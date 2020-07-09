/*
 * This file has been generated.
 */
import { Struct } from './Struct.js';
import { OcaFloat32 } from './OcaFloat32.js';
import { OcaList } from './OcaList.js';
import { OcaMediaCoding } from './OcaMediaCoding.js';
import { OcaMediaConnection } from './OcaMediaConnection.js';
import { OcaMultiMap } from './OcaMultiMap.js';
import { OcaPortID } from './OcaPortID.js';
import { OcaString } from './OcaString.js';
import { OcaUint16 } from './OcaUint16.js';

export const OcaMediaSinkConnector = Struct({
  IDInternal: OcaUint16,
  IDExternal: OcaString,
  Connection: OcaMediaConnection,
  AvailableCodings: OcaList(OcaMediaCoding),
  PinCount: OcaUint16,
  ChannelPinMap: OcaMultiMap(OcaUint16, OcaPortID),
  AlignmentLevel: OcaFloat32,
  AlignmentGain: OcaFloat32,
  CurrentCoding: OcaMediaCoding,
});

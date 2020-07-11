import { defineEncodeDecode } from './helpers.js';

import { OcaBoolean } from '../src/OCP1/OcaBoolean.js';
import { OcaInt8 } from '../src/OCP1/OcaInt8.js';
import { OcaInt16 } from '../src/OCP1/OcaInt16.js';
import { OcaInt32 } from '../src/OCP1/OcaInt32.js';
import { OcaUint8 } from '../src/OCP1/OcaUint8.js';
import { OcaUint16 } from '../src/OCP1/OcaUint16.js';
import { OcaUint32 } from '../src/OCP1/OcaUint32.js';
import { OcaFloat32 } from '../src/OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../src/OCP1/OcaFloat64.js';
import { OcaString } from '../src/OCP1/OcaString.js';
import { OcaList } from '../src/OCP1/OcaList.js';
import { OcaList2D } from '../src/OCP1/OcaList2D.js';
import { OcaMap } from '../src/OCP1/OcaMap.js';
import { Struct } from '../src/OCP1/Struct.js';
import { Tuple } from '../src/OCP1/Tuple.js';
import { Arguments } from '../src/OCP1/Arguments.js';
import { String16 } from '../src/OCP1/String16.js';

import { OcaClassicalFilterShape } from '../src/OCP1/OcaClassicalFilterShape.js';
import { OcaDeviceState } from '../src/OCP1/OcaDeviceState.js';

defineEncodeDecode('OcaFloat32', OcaFloat32, 0.5, 4);
defineEncodeDecode('OcaFloat64', OcaFloat64, 2.4, 8);
defineEncodeDecode('OcaBoolean', OcaBoolean, true, 1);
defineEncodeDecode('OcaBoolean', OcaBoolean, false, 1);
defineEncodeDecode('OcaInt8', OcaInt8, -1, 1);
defineEncodeDecode('OcaInt8', OcaInt8, 127, 1);
defineEncodeDecode('OcaUint8', OcaUint8, 255, 1);
defineEncodeDecode('OcaInt16', OcaInt16, 1000, 2);
defineEncodeDecode('OcaInt16', OcaInt16, -1000, 2);
defineEncodeDecode('OcaUint16', OcaUint16, 0xffff, 2);
defineEncodeDecode('OcaInt32', OcaInt32, 0xfffff, 4);
defineEncodeDecode('OcaInt32', OcaInt32, -0xfffff, 4);
defineEncodeDecode('OcaUint32', OcaUint32, 0xffffffff, 4);
defineEncodeDecode('OcaList<OcaFloat32>', OcaList(OcaFloat32), Array.from(new Float32Array(233).map(() => Math.random())), 2 + 4 * 233);
defineEncodeDecode('OcaList<OcaFloat64>', OcaList(OcaFloat64), new Array(233).fill(0).map(() => Math.random()), 2 + 8 * 233);
defineEncodeDecode('OcaString', OcaString, "foobar", 8);
defineEncodeDecode('OcaaList2D<OcaString>', OcaList2D(OcaString), [ [ "foobar", "bar" ], [ "bar", "foo" ] ]);
defineEncodeDecode('OcaaList2D<OcaFloat32>', OcaList2D(OcaFloat32), [ [ 0.5, 1 ], [ 0.25, 5 ] ], 4 + 4 * 4);

{
  const data = new Map();
  data.set("foo", 34);
  data.set("bar", 23);
  data.set("foobar", 42);
  defineEncodeDecode('OcaMap<OcaString,OcaInt8>', OcaMap(OcaString, OcaInt8), data);
}

{
  const Type = Struct({
    size: OcaFloat64,
    name: OcaString,
    categories: OcaList(OcaString),
  });
  const data = new Type.type({
    size: 1.0,
    name: "foo",
    categories: [ "bar", "flu" ],
  });
  defineEncodeDecode('OcaStruct<...>', Type, data);
}

{
  const Type = Arguments(OcaFloat32, OcaString);
  const data = [ 0.5, "foobar" ];
  defineEncodeDecode('Arguments<OcaFloat32, OcaString>', Type, data);
}

{
  // enum
  const Type = OcaClassicalFilterShape;
  defineEncodeDecode('OcaClassicalFilterShape', Type, Type.Bessel, 1);
}

{
  // bitset
  const Type = OcaDeviceState;
  defineEncodeDecode('OcaDeviceState', Type, Type.Disabled, 2);
}

{
  const Type = Tuple(OcaUint32, OcaString);
  defineEncodeDecode('Tuple(OcaUint32, OcaString)', Type, [ 23, 'foobar' ], 12);
}

{
  const Type = String16
  defineEncodeDecode('String16', Type, 'foobar', 2 + 2 * 6);
}

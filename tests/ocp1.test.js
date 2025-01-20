import { deepEqual, strictEqual } from 'node:assert';
import { describe, it } from 'node:test';

import { OcaBoolean } from '../src/OCP1/OcaBoolean.js';
import { OcaInt8 } from '../src/OCP1/OcaInt8.js';
import { OcaInt16 } from '../src/OCP1/OcaInt16.js';
import { OcaInt32 } from '../src/OCP1/OcaInt32.js';
import { OcaUint8 } from '../src/OCP1/OcaUint8.js';
import { OcaUint16 } from '../src/OCP1/OcaUint16.js';
import { OcaUint32 } from '../src/OCP1/OcaUint32.js';
import { OcaUint64 } from '../src/OCP1/OcaUint64.js';
import { OcaInt64 } from '../src/OCP1/OcaInt64.js';
import { OcaFloat32 } from '../src/OCP1/OcaFloat32.js';
import { OcaFloat64 } from '../src/OCP1/OcaFloat64.js';
import { OcaString } from '../src/OCP1/OcaString.js';
import { OcaList } from '../src/OCP1/OcaList.js';
import { OcaList2D } from '../src/OCP1/OcaList2D.js';
import { OcaMap } from '../src/OCP1/OcaMap.js';
import { Struct } from '../src/OCP1/Struct.js';
import { Tuple } from '../src/OCP1/Tuple.js';
import { OcaBlob } from '../src/OCP1/OcaBlob.js';
import { Arguments } from '../src/OCP1/Arguments.js';
import { String16 } from '../src/OCP1/String16.js';
import { OcaBitstring } from '../src/OCP1/OcaBitstring.js';

import { OcaClassicalFilterShape } from '../src/OCP1/OcaClassicalFilterShape.js';
import { OcaDeviceState } from '../src/OCP1/OcaDeviceState.js';

import { EncodedArguments } from '../src/OCP1/encoded_arguments.js';

import { encodeMessage } from '../src/OCP1/encode_message.js';
import { decodeMessage } from '../src/OCP1/decode_message.js';
import { MessageGenerator } from '../src/OCP1/message_generator.js';
import { KeepAlive } from '../src/OCP1/keepalive.js';
import { Response } from '../src/OCP1/response.js';
import { Command } from '../src/OCP1/command.js';
import { Notification } from '../src/OCP1/notification.js';
import * as Types from '../src/types.js';

import { OcaEvent } from '../src/OCP1/OcaEvent.js';
import { OcaMethod } from '../src/OCP1/OcaMethod.js';
import { OcaNotificationDeliveryMode } from '../src/OCP1/OcaNotificationDeliveryMode.js';

function encodeDecode(Type, data) {
  const length = Type.encodedLength(data);
  const buffer = new ArrayBuffer(length);

  Type.encodeTo(new DataView(buffer), 0, data);

  const [pos, data2] = Type.decodeFrom(new DataView(buffer), 0);

  return data2;
}

function testEncodeDecode(name, Type, data, Length) {
  it(name, () => {
    const length = Type.encodedLength(data);
    const buffer = new ArrayBuffer(length);

    Type.encodeTo(new DataView(buffer), 0, data);

    const [pos, data2] = Type.decodeFrom(new DataView(buffer), 0);

    strictEqual(pos, length);
    if (Length !== void 0) strictEqual(length, Length);

    deepEqual(data, data2);
  });
}

describe('ocp1', () => {
  testEncodeDecode('OcaFloat32', OcaFloat32, 0.5, 4);
  testEncodeDecode('OcaFloat64', OcaFloat64, 2.4, 8);
  testEncodeDecode('OcaBoolean', OcaBoolean, true, 1);
  testEncodeDecode('OcaBoolean', OcaBoolean, false, 1);
  testEncodeDecode('OcaInt8', OcaInt8, -1, 1);
  testEncodeDecode('OcaInt8', OcaInt8, 127, 1);
  testEncodeDecode('OcaUint8', OcaUint8, 255, 1);
  testEncodeDecode('OcaInt16', OcaInt16, 1000, 2);
  testEncodeDecode('OcaInt16', OcaInt16, -1000, 2);
  testEncodeDecode('OcaUint16', OcaUint16, 0xffff, 2);
  testEncodeDecode('OcaInt32', OcaInt32, 0xfffff, 4);
  testEncodeDecode('OcaInt32', OcaInt32, -0xfffff, 4);
  testEncodeDecode('OcaUint32', OcaUint32, 0xffffffff, 4);
  testEncodeDecode('OcaUint64', OcaUint64, 3n ** 40n, 8);
  testEncodeDecode('OcaUint64', OcaUint64, 3, 8);
  testEncodeDecode('OcaInt64', OcaInt64, 3n ** 39n, 8);
  testEncodeDecode('OcaInt64', OcaInt64, -(3n ** 39n), 8);
  testEncodeDecode('OcaInt64', OcaInt64, 3, 8);
  testEncodeDecode('OcaInt64', OcaInt64, -3, 8);
  testEncodeDecode(
    'OcaList<OcaFloat32>',
    OcaList(OcaFloat32),
    Array.from(new Float32Array(233).map(() => Math.random())),
    2 + 4 * 233
  );
  testEncodeDecode(
    'OcaList<OcaFloat64>',
    OcaList(OcaFloat64),
    new Array(233).fill(0).map(() => Math.random()),
    2 + 8 * 233
  );
  testEncodeDecode('OcaString', OcaString, 'foobar', 8);
  testEncodeDecode('OcaList2D<OcaString>', OcaList2D(OcaString), [
    ['foobar', 'bar'],
    ['bar', 'foo'],
  ]);
  testEncodeDecode(
    'OcaList2D<OcaFloat32>',
    OcaList2D(OcaFloat32),
    [
      [0.5, 1],
      [0.25, 5],
    ],
    4 + 4 * 4
  );
  testEncodeDecode('OcaBitstring', OcaBitstring, [true, false, false, true], 3);
  testEncodeDecode(
    'OcaBitstring',
    OcaBitstring,
    [true, false, false, true, false, true, false, false, true],
    4
  );

  {
    const data = new Map();
    data.set('foo', 34);
    data.set('bar', 23);
    data.set('foobar', 42);
    testEncodeDecode(
      'OcaMap<OcaString,OcaInt8>',
      OcaMap(OcaString, OcaInt8),
      data
    );
  }

  {
    const Type = Struct({
      size: OcaFloat64,
      name: OcaString,
      categories: OcaList(OcaString),
    });
    const data = new Type.type({
      size: 1.0,
      name: 'foo',
      categories: ['bar', 'flu'],
    });
    testEncodeDecode('OcaStruct<...>', Type, data);
  }

  {
    const Type = Arguments(OcaFloat32, OcaString);
    const data = [0.5, 'foobar'];
    testEncodeDecode('Arguments<OcaFloat32, OcaString>', Type, data);
  }

  {
    // enum
    const Type = OcaClassicalFilterShape;
    testEncodeDecode('OcaClassicalFilterShape', Type, Type.Bessel, 1);
  }

  {
    // bitset
    const Type = OcaDeviceState;
    testEncodeDecode('OcaDeviceState', Type, 2, 2);
  }

  {
    const Type = Tuple(OcaUint32, OcaString);
    testEncodeDecode('Tuple(OcaUint32, OcaString)', Type, [23, 'foobar'], 12);
  }

  {
    const Type = String16;
    testEncodeDecode('String16', Type, 'foobar', 2 + 2 * 6);
  }

  it('OcaSubscriptionManager.AddSubscription', () => {
    const encodedArguments = new EncodedArguments(
      [OcaEvent, OcaMethod, OcaBlob, OcaNotificationDeliveryMode, OcaBlob],
      [
        { EmitterONo: 1, EventID: { DefLevel: 1, EventIndex: 3 } },
        { ONo: 1, MethodID: { DefLevel: 1, MethodIndex: 5 } },
        new ArrayBuffer(0),
        1,
        new ArrayBuffer(0),
      ]
    );

    const data = new DataView(new ArrayBuffer(encodedArguments.byteLength));

    encodedArguments.encodeTo(data);
  });

  it('BigInt conversions', () => {
    strictEqual(encodeDecode(OcaUint64, 3), 3);
    strictEqual(encodeDecode(OcaUint64, 3n), 3);
    strictEqual(encodeDecode(OcaInt64, -3), -3);
    strictEqual(encodeDecode(OcaInt64, -3n), -3);
  });

  const examplePDUs = [
    new Command(1, 2, 3, 0),
    new Command(1, 2, 3, 5, new ArrayBuffer(10)),
    new Response(1, 2, 3, new ArrayBuffer(4)),
    new Notification(
      1,
      2,
      3,
      null,
      new Types.OcaEvent(1, new Types.OcaEventID(2, 3)),
      0
    ),
    new Notification(
      1,
      2,
      3,
      null,
      new Types.OcaEvent(1, new Types.OcaEventID(2, 3)),
      2,
      new ArrayBuffer(12)
    ),
    new KeepAlive(1000),
  ];

  it('encodeMessage', () => {
    const encodeMessageWithGenerator = (pdus) => {
      let buf = 0;
      const generator = new MessageGenerator(0xffff, (_buf) => (buf = _buf));
      pdus.forEach((pdu) => generator.add(pdu));
      generator.flush();
      generator.dispose();

      return buf;
    };

    const testEncodeDecode = (pdus) => {
      {
        const buf = encodeMessage(pdus);
        const a = [];

        const pos = decodeMessage(new DataView(buf), 0, a);

        strictEqual(pos, buf.byteLength);
        deepEqual(pdus, a);
      }
      {
        const buf = encodeMessageWithGenerator(pdus);
        const a = [];

        const pos = decodeMessage(new DataView(buf), 0, a);

        strictEqual(pos, buf.byteLength);
        deepEqual(pdus, a);
      }
    };

    const rsp = new Response(1, 2, 0, null);

    testEncodeDecode([new KeepAlive(1)]);
    testEncodeDecode([rsp]);
    testEncodeDecode(new Array(13).fill(rsp));
  });

  it('MessageGenerator', () => {
    let outbuf = [];
    const resultCallback = (buf) => outbuf.push(buf);
    const decodeAll = () => {
      const result = [];

      outbuf.forEach((buf) => {
        const data = new DataView(buf);
        let pos = 0;
        while (pos < buf.byteLength) {
          const tmp = [];

          pos = decodeMessage(data, pos, tmp);

          result.push(tmp);
        }
      });
      outbuf.length = 0;

      return result;
    };

    const repeat = (n, element) => new Array(n).fill(element);

    {
      const g = new MessageGenerator(28, resultCallback);

      const k = new KeepAlive(1);

      g.add(k);
      g.add(k);
      g.add(k);
      g.flush();

      // 2 messages should fit into 24 bytes
      strictEqual(outbuf.length, 2);

      const messages = decodeAll();

      deepEqual(messages, [[k], [k], [k]]);

      g.dispose();
    }

    {
      const g = new MessageGenerator(64, resultCallback);

      const rsp = new Response(1, 2, 0, null);

      for (let i = 0; i < 10; i++) g.add(rsp);

      g.flush();

      strictEqual(outbuf.length, 2);

      const messages = decodeAll();

      deepEqual(messages, repeat(2, repeat(5, rsp)));

      g.dispose();
    }

    examplePDUs.forEach((pdu) => {
      const g = new MessageGenerator(64, resultCallback);

      for (let i = 0; i < 10; i++) g.add(pdu);

      g.flush();
      g.dispose();

      const messages = decodeAll().flat();

      deepEqual(messages, repeat(10, pdu));
    });

    {
      // Allow arbitrarily big messages.
      const g = new MessageGenerator(0xffffffff, resultCallback);

      const rsp = new Response(1, 2, 0, null);

      for (let i = 0; i < 0xffff + 2; i++) g.add(rsp);

      g.flush();
      g.dispose();

      const messages = decodeAll();

      deepEqual(messages, [repeat(0xffff, rsp), repeat(2, rsp)]);
    }
  });
});

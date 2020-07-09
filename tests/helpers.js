let ok = 0;

export function deepEqual(a, b) {

  if (Array.isArray(a) && Array.isArray(b))
  {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }

    return true;
  } else if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;

    let result = true;

    a.forEach((value, key) => {
      if (!deepEqual(value, b.get(key))) result = false;
    });

    return result;
  } else if (typeof a === 'object' && typeof b === 'object' && a.constructor === b.constructor) {
    for (let name in a) {
      if (!deepEqual(a[name], b[name]))
        return false;
    }

    return true;
  }

  return a === b;
}

export function assertDeepEqual(a, b) {
  if (!deepEqual(a, b)) {
    console.error('%O != %O', a, b);
    throw new Error('Assertion failed.');
  }
  ok++;
}

export function assertEqual(a, b) {
  if (a !== b)
    throw new Error('Assertion failed.');
  ok++;
}

let currentTest = Promise.resolve();

export function define(name, run) {
  let test = currentTest.then(() => {
    try {
      const p = run();

      if (p instanceof Promise) {
        return p.catch((error) => {
          console.error('Test %O failed: %O', name, error);
        });
      }
    } catch (error) {
      console.error('Test %O failed: %O', name, error);
    }
  });

  currentTest = test;

  test.then(() => {
    if (currentTest !== test) return;
    console.log('%d tests ok', ok);
  });
}

export function defineEncodeDecode(name, Type, data, Length) {
  define(name, () => {
    const length = Type.encodedLength(data);
    const buffer = new ArrayBuffer(length);

    Type.encodeTo(new DataView(buffer), 0, data);

    const [ pos, data2 ] = Type.decodeFrom(new DataView(buffer), 0);

    assertEqual(pos, length);
    if (Length !== void 0)
      assertEqual(length, Length);

    assertDeepEqual(data, data2);
  });
}

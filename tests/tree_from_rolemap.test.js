import tree_to_rolemap from '../src/controller/tree_to_rolemap.js';
import { describe, it } from 'node:test';
import { deepEqual } from 'node:assert';

function createMock(roleName) {
  return {
    async GetRole() {
      return roleName;
    },
  };
}

describe('tree_to_rolemap', () => {
  it('empty tree', async () => {
    deepEqual(await tree_to_rolemap([]), new Map());
  });

  it('basic', async () => {
    const foo = createMock('foo');
    const bar = createMock('bar');
    deepEqual(
      await tree_to_rolemap([foo, bar]),
      new Map([
        ['foo', foo],
        ['bar', bar],
      ])
    );
  });

  it('with depth', async () => {
    const foo = createMock('foo');
    const bar = createMock('bar');
    const flu = createMock('flu');
    deepEqual(
      await tree_to_rolemap([foo, [bar, flu]]),
      new Map([
        ['foo', foo],
        ['foo/bar', bar],
        ['foo/flu', flu],
      ])
    );
  });

  it('duplicate roles 1', async () => {
    const foo1 = createMock('foo');
    const foo2 = createMock('foo');
    deepEqual(
      await tree_to_rolemap([foo1, foo2]),
      new Map([
        ['foo1', foo1],
        ['foo2', foo2],
      ])
    );
  });

  it('duplicate roles 2', async () => {
    const foo1 = createMock('foo1');
    const foo_1 = createMock('foo');
    const foo_2 = createMock('foo');
    deepEqual(
      await tree_to_rolemap([foo1, foo_1, foo_2]),
      new Map([
        ['foo1', foo1],
        ['foo2', foo_1],
        ['foo3', foo_2],
      ])
    );
  });
});

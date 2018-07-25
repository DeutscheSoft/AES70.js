const util = require('util');

class Test {
  constructor(device)
  {
    this.device = device;
  }

  describe()
  {
    return this.constructor.name;
  }

  prepare()
  {
  }

  check(cond, fmt, ...args)
  {
    if (!cond)
    {
      this.fail(fmt, ...args);
    }
  }

  fail(fmt, ...args)
  {
    console.log(fmt, ...args);
  }

  fatal(fmt, ...args)
  {
    throw new Error(util.format(fmt, ...args));
  }

  skip()
  {
    return false;
  }

  run()
  {
  }

  cleanup()
  {
  }
}

class ObjectTest extends Test
{
  async run()
  {
    const tree = await this.device.GetDeviceTree();
    const tasks = [];

    const check_children = (parent, children) => {
      for (let i = 0; i < children.length; i++)
      {
        const o = children[i];
        if (Array.isArray(o))
        {
          check_children(children[i-1], o);
        }
        else
        {
          try {
            tasks.push(this.check_object(o));
          } catch (e) {
            this.fail('check_object failed: %o.', e);
          }
        }
      }
    };

    check_children(this.device.Root, tree);

    await Promise.all(tasks);
  }

  check_object(o)
  {
  }
}

function pad(str, n)
{
  // this is slow
  while (str.length < n)
  {
    str += " ";
  }

  return str;
}

class TestRunner
{
  constructor(device)
  {
    this.tests = [];
    this.device = device;
  }

  add(...tests)
  {
    for (let i = 0; i < tests.length; i++)
    {
      if (Array.isArray(tests[i]))
      {
        this.add(...tests[i]);
      }
      else this.tests.push(new tests[i](this.device));
    }
  }

  log(fmt, ...args)
  {
    if (args.length)
    {
      fmt = util.format(fmt, ...args);
    }

    process.stdout.write(fmt);
  }

  async run()
  {
    for (let i = 0; i < this.tests.length; i++)
    {
      const test = this.tests[i];
      let t1, t2;

      this.log("  " + pad(test.describe(), 30) + "\t");

      try {
        await test.prepare();
        t1 = Date.now();
        await test.run();
        t2 = Date.now();
        await test.cleanup(); 
      } catch (e) {
        this.log("failed\n");
        this.log("ERROR: %o\n", e);
        try {
          await test.cleanup(); 
        } catch (e) {
          this.log("Test cleanup() method failed: %o\n", e);
        }
        continue;
      }
      this.log("OK (%d ms)\n", t2 - t1);
    }
  }
}

module.exports = {
  Test: Test,
  TestRunner: TestRunner,
  ObjectTest: ObjectTest,
};

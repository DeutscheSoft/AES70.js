const util = require('util');

class Test {
  constructor(get_device)
  {
    this.get_device = get_device;
    this.device = null;
  }

  describe()
  {
    return this.constructor.name;
  }

  async prepare()
  {
    this.device = await this.get_device();
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
    if (this.device !== null)
    {
      this.device.close();
      this.device = null;
    }
  }

  static focus()
  {
    return false;
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
            tasks.push(this.check_object(o, parent, i));
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
  constructor(get_device)
  {
    this.tests = [];
    this.get_device = get_device;
  }

  add(...tests)
  {
    const focused = tests.filter((t) => t.focus());

    if (focused.length) tests = focused;

    for (let i = 0; i < tests.length; i++)
    {
      this.tests.push(new tests[i](this.get_device));
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

  cleanup()
  {
    this.tests.forEach((t) => {
      try
      {
        t.cleanup();
      }
      catch (er) {}
    });
  }
}

module.exports = {
  Test: Test,
  TestRunner: TestRunner,
  ObjectTest: ObjectTest,
};

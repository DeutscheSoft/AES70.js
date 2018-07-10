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

      this.log(pad(test.describe(), 30) + "\t");

      try {
        await test.prepare();
        await test.run();
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
      process.stdout.write("OK\n");
    }
  }
}

module.exports = {
  Test: Test,
  TestRunner: TestRunner,
};

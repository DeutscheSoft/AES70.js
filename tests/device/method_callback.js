import { Test } from './test.js';

class CheckCallbackMethod extends Test {
  async run() {
    const root = this.device.Root;

    const result = await root.GetMembers();

    const result2 = await new Promise((resolve, reject) => {
      const tmp = root.GetMembers((ok, result) => {
        (ok ? resolve : reject)(result);
      });
      if (tmp) {
        console.error('got %o', tmp);
        throw new Error('Unexpected return value.');
      }
    });

    if (result.length !== result2.length) throw new Error('Result mismatch.');
  }
}

export default [CheckCallbackMethod];

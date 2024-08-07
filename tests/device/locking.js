import { ObjectTest } from './test.js';
import { OcaStatus } from '../../src/types/OcaStatus.js';

class Locking extends ObjectTest {
  async prepare() {
    await super.prepare();
    this.other_device = await this.get_device();
  }

  async check_object(o) {
    try {
      if (!(await o.GetLockable())) return;
    } catch (e) {
      if (e.status == OcaStatus.NotImplemented) return;
      throw e;
    }

    const o2 = this.other_device.allocate(o.constructor, o.ono);

    this.check(
      (await o2.GetRole()) == (await o.GetRole()),
      'Role names do not match.'
    );

    await o.LockTotal();

    await o.GetRole();

    try {
      await o2.GetRole();
      this.check(false, 'Object should be locked for other clients now.');
    } catch (e) {
      this.check(
        e.status == OcaStatus.Locked,
        'Calling methods as a second client should return OcaStatus::Locked.'
      );
    }

    await o.Unlock();

    this.check(
      (await o2.GetRole()) == (await o.GetRole()),
      'Role names do not match.'
    );
  }

  cleanup() {
    super.cleanup();
    this.close_device(this.other_device);
    this.other_device = null;
  }
}

export default [Locking];

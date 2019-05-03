const ObjectTest = require('./test').ObjectTest;
const RemoteError = require('../../lib/Controller').RemoteError;
const OcaStatus = require('../../lib/Types').OcaStatus;

class Locking extends ObjectTest
{
  async prepare()
  {
    await super.prepare();
    this.other_device = await this.get_device();
  }

  async check_object(o)
  {
    try {
      if (!await o.GetLockable()) return;
    } catch (e) {
      if (RemoteError.check_status(e, OcaStatus.NotImplemented)) return;
      throw e;
    }

    const o2 = this.other_device.allocate(o.constructor, o.ono);

    this.check(await o2.GetRole() == await o.GetRole(),
               "Role names do not match.");

    await o.LockTotal();

    await o.GetRole();

    try {
      await o2.GetRole();
      this.check(false, "Object should be locked for other clients now.");
    } catch (e) {
      this.check(RemoteError.check_status(e, OcaStatus.Locked),
                 "Calling methods as a second client should return OcaStatus::Locked."); 
    }

    await o.Unlock();

    this.check(await o2.GetRole() == await o.GetRole(),
               "Role names do not match.");
  }

  cleanup()
  {
    super.cleanup();
    this.other_device.close();
  }
}

module.exports = [ Locking ];

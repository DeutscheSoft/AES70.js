const ObjectTest = require('./test').ObjectTest;

class CheckTree extends ObjectTest {
  async check_object(o, parent, i) {
    if (Array.isArray(o))
    {
      this.check(i > 0, "Children follow their parent object.");
      await check_children(children[i-1], o);
    }
    else
    {
      try {
        const ono = await o.GetOwner();

        this.check(ono === parent.ObjectNumber, "object %O has owner property %o (should be %o)",
                   o.ObjectNumber, ono, parent.ObjectNumber);
      } catch (e) {
        this.fail('GetOwner is not implemented in object %o.', o.ObjectNumber);
      }

      this.check(o.ObjectNumber >= 4096, "object has reserved ObjectNumber ( below 4096 )");

      try {
        const id = await o.GetClassIdentification();
        const class_version = o.ClassVersion;
        const class_id = o.ClassID;

        this.check(id.ClassID.startsWith(o.ClassID), "ClassID does not match in object %o (%o vs. %o)",
                   o.ObjectNumber, id.ClassID, o.ClassID);
      } catch (e) {
        this.fail('GetOwner is not implemented in object %o.', o.ObjectNumber);
      }
    }
  }
}

class CheckPath extends ObjectTest {
  constructor(device)
  {
    super(device);
    this.roles = new Map();
  }

  get_roles_for(o)
  {
    if (!this.roles.has(o))
    {
      this.roles.set(o, new Set());
    }

    return this.roles.get(o);
  }

  async check_object(o, parent, i)
  {
    let roles = this.get_roles_for(parent);

    const role = await o.GetRole();

    this.check(role.length, "Role name is empty.");

    this.check(!roles.has(role), "Role name collision with object %d (role: %o)", o.ono, role);

    roles.add(role);
  }
}

module.exports = [ CheckTree, CheckPath ];

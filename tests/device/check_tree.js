import { ObjectTest } from './test.js';

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
    const roles = this.get_roles_for(parent);

    const role = await o.GetRole();

    this.check(role.length, "Role name is empty.");

    this.check(!roles.has(role), "Role name collision with object %d (role: %o)", o.ono, role);

    roles.add(role);
  }
}

class CheckRoleMap extends ObjectTest {
  constructor(get_device)
  {
    super(get_device);
    this.rolemap = null;
  }

  async prepare()
  {
    await super.prepare();
    this.rolemap = await this.device.get_role_map();
  }

  async check_object(o, parent, i)
  {
    let found = false;

    const role = await o.GetRole();

    this.rolemap.forEach((tmp, path) => {
      if (o === tmp)
      {
        this.check(!found, "Found object %o in role map twice.", o.ono);
        this.check(path.split("/").pop().startsWith(role), "Role names do not match.");

        found = true;
      }
    });

    this.check(found, "Could not find object %o in role map.", o.ono);
  }
}

export default [ CheckTree, CheckPath, CheckRoleMap ];

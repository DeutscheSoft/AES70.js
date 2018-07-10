const Test = require('./test').Test;

class CheckTree extends Test {
  async run()
  {
    const tree = await this.device.GetDeviceTree();

    const check_children = async (parent, children) => {
      for (let i = 0; i < children.length; i++)
      {
        const o = children[i];
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
    };

    await check_children(this.device.Root, tree);
  }
}

module.exports = [ CheckTree ];

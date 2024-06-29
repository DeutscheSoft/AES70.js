const RemoteControlClasses = require('../../lib').RemoteControlClasses;
const Types = require('../../lib').Types;
const define_custom_class = require('../../lib').controller.define_custom_class;
const Test = require('./test').Test;

const SimpleBlock = define_custom_class(
  'SimpleBlock',
  3,
  '1.1.3',
  2,
  'OcaWorker',
  [
    ['GetMembers', 3, 5, [], [['LIST', Types.OcaObjectIdentification]]],
    ['GetMembersRecursive', 3, 6, [], [['LIST', Types.OcaBlockMember]]],
  ],
  [],
  []
);

class CustomBlock extends Test {
  async prepare() {
    await super.prepare();
    this.device2 = await this.get_device();
    this.device2.add_control_classes([SimpleBlock]);
  }

  async run() {
    this.check(
      SimpleBlock.ClassID === '\u0001\u0001\u0003',
      'SimpleBlock class id is wrong: %o',
      SimpleBlock.ClassID
    );
    const rolemap1 = await this.device.get_role_map();
    const rolemap2 = await this.device2.get_role_map();

    this.check(rolemap1.size == rolemap2.size, 'Different number of objects.');
    this.check(
      JSON.stringify(Array.from(rolemap1.keys())) ===
        JSON.stringify(Array.from(rolemap2.keys())),
      'Same role map.'
    );

    rolemap2.forEach((o) => {
      if (o.ClassID === SimpleBlock.ClassID)
        this.check(o instanceof SimpleBlock, 'Custom class was not used.');
    });
  }

  cleanup() {
    super.cleanup();
    if (this.device2 !== null) {
      this.device2.close();
      this.device2 = null;
    }
  }
}

module.exports = [CustomBlock];

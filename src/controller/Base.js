export class ObjectBase {
  constructor(ObjectNumber, device) {
    this.ono = ObjectNumber;
    this.device = device;
  }

  get ObjectNumber() {
    return this.ono;
  }

  get ClassVersion() {
    return this.constructor.ClassVersion;
  }

  get ClassID() {
    return this.constructor.ClassID;
  }

  sendCommandRrq(method_level, method_index, param_count, parameters, rs) {
    const cmd = new CommandRrq(this.ono, method_level, method_index, param_count, parameters);
    return this.device.send_command(cmd, rs);
  }
}

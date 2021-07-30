import { CommandRrq } from '../OCP1/commandrrq.js';

/**
 * Base class for all client-side control classes.
 */
export class ObjectBase {
  constructor(ObjectNumber, device) {
    this.ono = ObjectNumber;
    this.device = device;
  }

  /**
   * The ObjectNumber of this object.
   */
  get ObjectNumber() {
    return this.ono;
  }

  /**
   * The ClassVersion of this object. This is a local property.
   */
  get ClassVersion() {
    return this.constructor.ClassVersion;
  }

  /**
   * The ClassVersion of this object. This is a local property.
   */
  get ClassID() {
    return this.constructor.ClassID;
  }

  /**
   * The name of the class of this object. This is a local property.
   */
  get ClassName() {
    return this.constructor.ClassName;
  }

  sendCommandRrq(method_level, method_index, param_count, parameters, rs) {
    const cmd = new CommandRrq(
      this.ono,
      method_level,
      method_index,
      param_count,
      parameters
    );
    return this.device.send_command(cmd, rs);
  }

  /**
   * Get the name of a given OcaPropertyID.
   * @param {Types/OcaPropertyID} id
   * @return {string}
   */
  GetPropertyName(id) {
    return this.get_properties().find_name(id);
  }

  /**
   * Get the OcaPropertyID for a given name.
   * @param {String} name
   * @return {OcaPropertyID}
   */
  GetPropertyID(name) {
    const p = this.get_properties().find_property(name);

    if (p) return p.GetPropertyID();
  }

  static get_properties() {
    return null;
  }

  /**
   * Returns an instance of :class:`Properties` for this remote object.
   */
  get_properties() {
    return this.constructor.get_properties();
  }

  get __oca_properties__() {
    return this.get_properties();
  }

  /**
   * Returns an instance of :class:`PropertySync` for this remote object.
   */
  GetPropertySync() {
    const p = this.constructor.GetPropertySync();

    return new p(this);
  }

  Dispose() {}
}

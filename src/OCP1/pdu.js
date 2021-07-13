export class PDU {
  get messageType() {
    return this.constructor.messageType;
  }
}

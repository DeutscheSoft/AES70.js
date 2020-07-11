export class EncodedArguments {
  get byteLength() {
    let byteLength = this._byteLength;

    if (byteLength === -1) {
      const encoders = this.encoders;
      const data = this.data;

      byteLength = 0;

      for (let i = 0; i < encoders.length; i++) {
        byteLength += encoders[i].encodedLength(data[i]);
      }
      this.byteLength = byteLength;
    }

    return byteLength;
  }

  constructor(encoders, data) {
    this.encoders = encoders;
    this.data = data;
    this._byteLength = -1;
  }

  encodeTo(dataView, pos) {
    for (let i = 0; i < encoders.length; i++) {
      pos += encoders[i].encodeTo(dataView, pos, data[i]);
    }

    return pos;
  }
}

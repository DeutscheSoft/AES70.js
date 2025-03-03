function calculateByteLength(encoders, data) {
  let byteLength = 0;

  for (let i = 0; i < encoders.length; i++) {
    byteLength += encoders[i].encodedLength(data[i]);
  }

  return byteLength;
}

function encode(encoders, data, byteLength) {
  if (!byteLength) return null;
  const result = new ArrayBuffer(byteLength);
  const dataView = new DataView(result);

  for (let i = 0, pos = 0; i < encoders.length; i++) {
    pos = encoders[i].encodeTo(dataView, pos, data[i]);
  }

  return result;
}

export class EncodedArguments {
  constructor(encoders, data) {
    this.encoders = encoders;
    this.data = data;
    this.byteLength = calculateByteLength(encoders, data);
    this.buffer = encode(encoders, data, this.byteLength);
  }

  encodeTo(dataView, pos) {
    pos = pos | 0;

    const { byteLength, buffer } = this;

    if (!byteLength) return pos;

    const src = new Uint8Array(buffer);
    const dst = new Uint8Array(
      dataView.buffer,
      dataView.byteOffset,
      dataView.byteLength
    );

    dst.set(src, pos);

    return pos + byteLength;
  }
}

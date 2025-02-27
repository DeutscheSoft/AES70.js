export function getLengthEncoder(byteLength) {
  let setLength, getLength, maxLength;

  if (byteLength === 2) {
    setLength = function (dataView, pos, length) {
      return dataView.setUint16(pos, length);
    };
    getLength = function (dataView, pos, length) {
      return dataView.getUint16(pos);
    };
    maxLength = 0xffff;
  } else if (byteLength === 4) {
    setLength = function (dataView, pos, length) {
      return dataView.setUint32(pos, length);
    };
    getLength = function (dataView, pos, length) {
      return dataView.getUint32(pos);
    };
    maxLength = 0xffffffff;
  } else throw new TypeError('Unsupported length size.');

  return { getLength, setLength, maxLength };
}

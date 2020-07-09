export function isTypedArray(o) {
  return ArrayBuffer.isView(o) && !(o instanceof DataView);
}

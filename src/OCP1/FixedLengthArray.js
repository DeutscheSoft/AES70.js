import { Tuple } from './Tuple.js';

export function FixedLengthArray(Type, Length) {
  return Tuple(...new Array(Length).fill(Type));
}

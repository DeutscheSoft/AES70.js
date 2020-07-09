import { Enum8 } from './Enum8.js';

/**
 * Types of time sources. See RFC7273 particularly sections 4.4-4.8 .
 * @category Types
 * @class OcaTimeProtocol
 * @extends Enum8
 */
export const OcaTimeProtocol = Enum8({
  Undefined: 0,
  None: 1,
  Private: 2,
  NTP: 3,
  SNTP: 4,
  IEEE1588_2002: 5,
  IEEE1588_2008: 6,
  IEEE_AVB: 7,
  AES11: 8,
  Genlock: 9,
});

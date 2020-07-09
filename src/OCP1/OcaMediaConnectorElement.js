import { Bitset8 } from './Bitset8.js';

/**
 * Bitset describing which elements of a media connector have changed.
 * @category Types
 * @class OcaMediaConnectorElement
 * @extends Base
 */
export const OcaMediaConnectorElement = Bitset8([
  'PinMap',
  'Connection',
  'Coding',
  'AlignmentLevel',
  'AlignmentGain',
]);

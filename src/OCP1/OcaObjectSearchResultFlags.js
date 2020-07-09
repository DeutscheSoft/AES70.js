import { Bitset16 } from './Bitset16.js';

/**
 * Bitset that describes the contents of an <b>OcaSearchResult</b>
 * @category Types
 * @class OcaObjectSearchResultFlags
 * @extends Base
 */
export const OcaObjectSearchResultFlags = Bitset16([
  'ONo',
  'ClassIdentification',
  'ContainerPath',
  'Role',
  'Label',
  'unused',
]);

/*
 * This file has been generated.
 */

export class OcaClassID {
  /**
   * Class identifier : vector that describes the class's ancestry. The normative definition of the Class identifier is given in Part 1 of this standard, in the section entitled "Class identifiers". The UML definition given here is intended to be identical, but in the case of any discrepancy, Part 1 shall be definitive..
   * @class OcaClassID
   */
  constructor(FieldCount, Fields) {
    /**
     * Identifies the number of fields of the ClassID, i.e. the level of the class tree the class is in. For example if this field count is 3, the ClassID is of the form 'n.m.p'. The minimum field count is 1 (OcaRoot class). A field count of zero is invalid.
     * @type number
     */
    this.FieldCount = FieldCount;
    /**
     * Array of actual fields of the ClassID. The array has 'FieldCount' entries. If for example the field count is 3 and the Fields array has value {1, 2, 3} the ClassID is '1.2.3'.
     * @type FieldType
     */
    this.Fields = Fields;
  }
}

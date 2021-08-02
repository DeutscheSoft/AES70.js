/**
 * Class used to represent multiple return values.
 */
export declare class Arguments<ArgumentTypes extends unknown[]> {
  /**
   * The return values as an array.
   */
  readonly values: ArgumentTypes;

  constructor(values: ArgumentTypes)

  /**
   * The number of elements.
   */
  get length(): number;

}

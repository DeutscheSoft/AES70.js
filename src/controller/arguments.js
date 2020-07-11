/**
 * Class used to represent multiple return values.
 */
export class Arguments {
  constructor(values) {
    this.values = values;
  }

  /**
   * Returns an item.
   * @param {integer} n - Index of the item.
   */
  item(n) {
    return this.values[n];
  }

  /**
   * The number of elements.
   */
  get length() {
    return this.values.length;
  }
}

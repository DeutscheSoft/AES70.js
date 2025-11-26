export class Subscriptions {
  constructor() {
    this._callbacks = [];
  }

  /**
   * Add a subscription.
   *
   * @param {Function[]} cbs
   */
  add(...cbs) {
    cbs.forEach((cb) => {
      this._callbacks.push(cb);
    });
  }

  unsubscribe() {
    this._callbacks.forEach((cb) => {
      try {
        cb();
      } catch (err) {
        console.error(err);
      }
    });
    this._callbacks.length = 0;
  }
}

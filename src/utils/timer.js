function isItTime(target, now) {
  // We are ok with 1ms accuracy.
  return target - now < 1;
}

export class Timer {
  constructor(callback, getNow) {
    this._callback = callback;
    this._getNow = getNow;
    this._targetTime = undefined;
    this._timerId = undefined;
    this._timerAt = undefined;
  }

  poll() {
    const now = this._getNow();

    if (this._targetTime === undefined) return;

    if (isItTime(this._targetTime, now)) {
      this._targetTime = undefined;
      try {
        this._callback();
      } catch (err) {
        console.error('Timer callback threw an exception', err);
      }
    } else {
      this._reschedule();
    }
  }

  _reschedule() {
    const target = this._targetTime;
    const interval = target - this._getNow();

    if (this._timerId !== undefined) {
      if (target >= this._timerAt) {
        // The timer will fire before target. We will then reschedule it.
        return;
      }

      clearTimeout(this._timerId);
      this._timerId = undefined;
    }

    this._timerAt = target;
    this._timerId = setTimeout(() => {
      this._timerId = undefined;
      this._timerAt = undefined;
      this.poll();
    }, Math.max(0, interval));
  }

  /**
   *
   * @param {number} interval
   *   Interval in milliseconds.
   */
  scheduleIn(interval) {
    if (!(interval >= 0)) {
      throw new TypeError(`Expected positive interval.`);
    }

    this._targetTime = this._getNow() + interval;
    this._reschedule();
  }

  /**
   * Schedule the timer in a given number of milliseconds. If the timer
   * is already running and scheduled to run before, do not modify it.
   *
   * @param {number} interval
   */
  scheduleDeadlineIn(interval) {
    if (!(interval >= 0)) {
      throw new TypeError(`Expected positive interval.`);
    }

    const target = this._getNow() + interval;

    if (this._targetTime !== undefined && this._targetTime <= target) {
      this.poll();
      return;
    }

    this.scheduleAt(target);
  }

  /**
   *
   * @param {number} target
   *   Target time in milliseconds.
   */
  scheduleAt(target) {
    if (!(target >= 0)) {
      throw new TypeError();
    }

    this._targetTime = target;
    this._reschedule();
  }

  stop() {
    this._targetTime = undefined;
  }

  cancel() {
    this.stop();
    this._clearTimeout();
  }

  _clearTimeout() {
    if (this._timerId) {
      clearTimeout(this._timerId);
      this._timerId = undefined;
      this._timerAt = undefined;
    }
  }

  dispose() {
    this.cancel();
  }
}

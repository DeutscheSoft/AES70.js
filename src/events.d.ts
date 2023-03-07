/**
 * Basic event handling class.
 */
export class Events {
  constructor();

  /**
   * Emit an event.
   */
  emit(name: string, ...args: unknown[]): void;

  /**
   * Subscribe to an event.
   */
  on(name: string, cb: (...args) => void): void;

  /**
   * Subscribe to an event.
   */
  addEventListener(name: string, cb: (...args) => void): void;

  /**
   * Unsubscribe from an event.
   */
  removeEventListener(name: string, cb: (...args) => void): void;

  /**
   * Removes all event listeners.
   */
  removeAllEventListeners(): void;
}

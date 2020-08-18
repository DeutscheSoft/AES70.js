export function warn(...args) {
  try {
    console.warn(...args);
  } catch (e) {
    // ignore error
  }
}

export function log(...args) {
  try {
    console.log(...args);
  } catch (e) {
    // ignore error
  }
}

export function error(...args) {
  try {
    console.error(...args);
  } catch (e) {
    // ignore error
  }
}

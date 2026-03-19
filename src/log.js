export function warn(...args) {
  try {
    console.warn(...args);
  } catch (_e) {
    // ignore error
  }
}

export function log(...args) {
  try {
    console.log(...args);
  } catch (_e) {
    // ignore error
  }
}

export function error(...args) {
  try {
    console.error(...args);
  } catch (_e) {
    // ignore error
  }
}

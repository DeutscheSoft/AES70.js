function addEvent(target, name, callback) {
  if (target.addEventListener) {
    target.addEventListener(name, callback);
  } else if (target.on) {
    target.on(name, callback);
  } else {
    throw new TypeError('Unsupported event target ', target);
  }
}

function removeEvent(target, name, callback) {
  if (target.removeEventListener) {
    target.removeEventListener(name, callback);
  } else if (target.off) {
    target.off(name, callback);
  } else {
    throw new TypeError('Unsupported event target ', target);
  }
}

/**
 *
 * @param {EventTarget|Events} target
 * @param {string} name
 * @param {callback} callback
 */
export function subscribeEvent(target, name, callback) {
  addEvent(target, name, callback);
  return () => {
    removeEvent(target, name, callback);
  };
}

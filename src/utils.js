export const set = function(key, value, obj) {
  const clone = assign({}, obj)
  clone[key] = value
  return clone
}

/**
 * Polyfill for Object.assign for IE11 support
 */
export const assign =
  Object.assign ||
  function assign(to) {
    for (let s = 1; s < arguments.length; s += 1) {
      const from = arguments[s]
      for (const key in from) {
        to[key] = from[key]
      }
    }
    return to
  }

export const isArray =
  Array.isArray ||
  function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }

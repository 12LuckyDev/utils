/**
 * Resolves a value that can either be a direct value or a function (updater) returning a value.
 *
 * If the provided `value` is a function, it is called with the current value (`current`)
 * and its result is returned. Otherwise, the `value` itself is returned as-is.
 * @param value or a function that returns a value based on the previous one.
 * @param current - The current value to pass to the updater function, if applicable.
 * @returns The resolved value.
 */
export function resolveValue<T>(value: T | ((el: T) => T), current: T): T {
  return typeof value === 'function' ? (value as (x: T) => T)(current) : value;
}

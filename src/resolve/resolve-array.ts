/**
 * Resolves a value that can be either an array or a single value into an array.
 * @param value Value that can be either an array or a single value.
 * @returns The resolved array value.
 */
export function resolveArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

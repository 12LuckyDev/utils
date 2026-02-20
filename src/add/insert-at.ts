import { resolveArray } from '../resolve/resolve-array';

/**
 * Returns array copy with value/values inserted at given index. Values in array after that index will be pushed
 * @param array Original array
 * @param index Index to insert value/values at
 * @param value Value/values to insert
 * @return New array with value/values inserted at given index
 */
export function insertAt<T>(array: T[], index: number, value: T | T[]): T[] {
  return [...array.slice(0, index), ...resolveArray(value), ...array.slice(index)];
}

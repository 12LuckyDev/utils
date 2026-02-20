import { merge } from '../add';
import { areInRange, isInRange } from '../range';

/**
 * Returns array copy without value from given index(es)
 * If index(s) aren't in range returns orginal array reference
 * @param array Original array
 * @param index Index(es) of value(s) to remove
 * @returns Array copy without element(s) at given index(es), or original array if index(es) out of range
 */
export function removeAt<T>(array: T[], index: number | number[]): T[] {
  if (Array.isArray(index)) {
    return areInRange(array, index, false) ? array.filter((_, i) => !index.includes(i)) : array;
  }

  return isInRange(array, index) ? merge(array.slice(0, index), array.slice(index + 1)) : array;
}

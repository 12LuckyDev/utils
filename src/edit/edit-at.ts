import { areInRange, isInRange } from '../range';
import { resolveValue } from '../resolve';

/**
 * Returns array copy with changed value at given index
 * If index isn't in range returns orginal array reference
 * @param array Original array
 * @param index Index for new value
 * @param value New value or function which returns new value
 * @returns Array copy with changed value at given index, or original array if index out of range
 */
export function editAt<T>(array: T[], index: number | number[], value: T | ((el: T) => T)): T[] {
  if (Array.isArray(index)) {
    return areInRange(array, index, false)
      ? array.map((v, i) => (index.includes(i) ? resolveValue(value, v) : v))
      : array;
  }

  if (!isInRange(array, index)) {
    return array;
  }

  return array.map((v, i) => (i === index ? resolveValue(value, v) : v));
}

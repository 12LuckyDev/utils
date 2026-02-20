import { isInRange } from '../range';
import { removeAt } from '../remove';

/**
 * Pops value from an array if it is at range, returns original array otherwise
 * @param array Original array
 * @param index Index of value to remove
 * @returns Tuple with popped value if index was in range, and new array without popped value, or undefined and original array otherwise
 */
export function popAt<T>(array: T[], index: number): [T | undefined, T[]] {
  return isInRange(array, index) ? [array[index], removeAt(array, index)] : [undefined, array];
}

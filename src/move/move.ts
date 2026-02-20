import { isInRange } from '../range';

/**
 * Returns array copy with value moved from given index to new position
 * @param array Original array
 * @param from Index of value to change position
 * @param to Target index
 * @returns Array copy with value moved from given index to target index, or original array if index is out of range
 */
export function move<T>(array: T[], from: number, to: number): T[] {
  if (!isInRange(array, from) || !isInRange(array, to)) {
    return array;
  }

  const copy = [...array];
  copy.splice(from, 1);
  copy.splice(to, 0, array[from]);

  return copy;
}

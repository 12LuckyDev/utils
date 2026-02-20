import { move } from './move';

/**
 * Returns array copy with value moved from given index to index + 1 position
 * @param array Original array
 * @param index Index of value to change position
 * @returns Array copy with value moved from given index to index + 1 position, or original array if index is out of range
 */
export function moveUp<T>(array: T[], index: number): T[] {
  return move(array, index, index + 1);
}

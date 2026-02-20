import { addSortValuesAndShuffle } from './add-sort-values-and-shuffle';

/**
 * Shuffles array without mutating original array
 * @param array Original array
 * @return Shuffled array copy
 */
export function shuffle<T>(array: T[]): T[] {
  return addSortValuesAndShuffle(array).map(({ value }) => value);
}

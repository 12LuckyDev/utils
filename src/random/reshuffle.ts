import { addSortValuesAndShuffle } from './add-sort-values-and-shuffle';
import { deshuffle } from './deshuffle';

/**
 * Shuffles array without mutating original array, and returns hash to recreate original array if needed
 * @param array Original array
 * @param inputHash optional array with target position of value at the same index in input array
 * @returns Shuffled array copy and hash array to recreate original array if needed
 */
export function reshuffle<T>(array: T[], inputHash?: number[]): [T[], number[]] {
  if (inputHash) {
    return [deshuffle(array, [...inputHash]), inputHash];
  }

  const shuffledData = addSortValuesAndShuffle(array);
  const shuffled: T[] = [];
  const hash: number[] = [];

  shuffledData.forEach(({ value, index }) => {
    shuffled.push(value);
    hash.push(index);
  });

  return [shuffled, hash];
}

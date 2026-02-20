import { isInRange } from './is-in-range';

/**
 * Checks if the indexes are within the dimensions of the array
 * @param array array on which the range will be tested
 * @param indexes indexes to be checked
 * @param all flag that determines whether all indexes must be in range
 * @returns true if indexes are within range of the array, false otherwise
 */
export function areInRange<T>(array: T[], indexes: number[], all: boolean = true): boolean {
  return all ? !indexes.some((i) => !isInRange(array, i)) : indexes.some((i) => isInRange(array, i));
}

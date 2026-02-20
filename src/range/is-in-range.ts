/**
 * Checks if the index is within the dimensions of the array
 * @param array array on which the range will be tested
 * @param index index to be checked
 * @return true if index is within range of the array, false otherwise
 */
export function isInRange<T>(array: T[], index: number): boolean {
  return index >= 0 && index < array.length;
}

/**
 * Internal helper
 * Adds sort values and index to each element in the array, then shuffles the array based on the sort values.
 * @param array Input array
 * @returns Array of objects with value, sort, and index properties
 */
export function addSortValuesAndShuffle<T>(array: T[]): { value: T; sort: number; index: number }[] {
  return array.map((value, index) => ({ value, index, sort: Math.random() })).sort((a, b) => a.sort - b.sort);
}

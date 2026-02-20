/**
 * Returns new array with values from all input arrays
 * @param arrays Arrays to merge
 * @returns New array with combined values
 */
export function merge<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

/**
 * Sorts array based on hash param, where value at index is target position of value at the same index in input array
 * @param array Original array
 * @param hash array with target position of value at the same index in input array
 * @returns Sorted array based on hash param
 */
export function deshuffle<T>(array: T[], hash: number[]): T[] {
  if (array.length !== hash.length) {
    throw new Error('Input array and hash must have the same length.');
  }

  const result: T[] = [];

  array.forEach((value, i) => {
    result[hash[i]] = value;
  });

  return result;
}

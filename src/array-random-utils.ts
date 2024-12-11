const addSortValuesAndShuffle = <T>(array: T[]): { value: T; sort: number; index: number }[] =>
  array.map((value, index) => ({ value, index, sort: Math.random() })).sort((a, b) => a.sort - b.sort);

/**
 * Returns shhufled array copy
 * @param array Original array
 */
export const shuffle = <T>(array: T[]): T[] => addSortValuesAndShuffle(array).map(({ value }) => value);

/**
 * Returns sorted array based on hash param
 * @param array Original array
 * @param hash array with target position of value at the same index in input array
 */
export const deshuffle = <T>(array: T[], hash: number[]): T[] => {
  if (array.length !== hash.length) {
    throw new Error('Input array and hash must have the same length.');
  }

  const result: T[] = [];

  array.forEach((value, i) => {
    result[hash[i]] = value;
  });

  return result;
};

/**
 * Returns shhufled array copy and hash array to recreate original array if needed
 * @param array Original array
 * @param inputHash optional array with target position of value at the same index in input array
 */
export const reshuffle = <T>(array: T[], inputHash?: number[]): [T[], number[]] => {
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
};

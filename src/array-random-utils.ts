/**
 * Returns shhufled array copy
 * @param array Original array
 */
export const shuffle = <T>(array: T[]): T[] => {
  const shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return shuffled;
};

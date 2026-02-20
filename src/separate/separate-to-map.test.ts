import { expect, test } from 'vitest';
import { separateToMap } from './separate-to-map';

test('TESTING multiSeparate func with no params', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = separateToMap(inputArray, (el) => el % 3);

  expect(inputArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  expect([...result.keys()]).toEqual(expect.arrayContaining([0, 1, 2]));
  expect(result.get(0)).toEqual([3, 6, 9]);
  expect(result.get(1)).toEqual([1, 4, 7]);
  expect(result.get(2)).toEqual([2, 5, 8]);
});

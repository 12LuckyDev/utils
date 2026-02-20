import { expect, test } from 'vitest';
import { insertAt } from './insert-at';

test('TESTING insertAt func', () => {
  const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  expect(insertAt(inputArray, 4, 10)).toEqual([0, 1, 2, 3, 10, 4, 5, 6, 7, 8]);
  expect(insertAt(inputArray, 4, [10, 11])).toEqual([0, 1, 2, 3, 10, 11, 4, 5, 6, 7, 8]);
  expect(insertAt(inputArray, 9, 9)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(insertAt(inputArray, 100, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 10]);

  expect(inputArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

import { expect, test } from 'vitest';
import { removeAt } from './remove-at';

test('TESTING removeAt func', () => {
  const inputArray = [1, 2, 3];

  expect(removeAt(inputArray, 1)).toEqual([1, 3]);

  expect(removeAt(inputArray, [0, 2])).toEqual([2]);

  expect(removeAt(inputArray, -1)).toBe(inputArray);

  expect(inputArray).toEqual([1, 2, 3]);
});

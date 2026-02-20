import { expect, test } from 'vitest';
import { shift } from './shift';

test('TESTING shift func', () => {
  const inputArray = [1, 2, 3];

  expect(shift(inputArray, 1)).toEqual([3, 1, 2]);
  expect(shift(inputArray, -1)).toEqual([2, 3, 1]);
  expect(shift(inputArray, 1, false)).toEqual([1, 2]);
  expect(shift(inputArray, -1, false)).toEqual([2, 3]);

  expect(inputArray).toEqual([1, 2, 3]);
});

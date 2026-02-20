import { expect, test } from 'vitest';
import { push } from './push';

test('TESTING push func', () => {
  const inputArray = [1, 2, 3];
  const resultArray = push(inputArray, 4);
  expect(inputArray).toEqual([1, 2, 3]);
  expect(resultArray).toEqual([1, 2, 3, 4]);
});

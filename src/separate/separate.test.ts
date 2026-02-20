import { expect, test } from 'vitest';
import { separate } from './separate';

test('TESTING separate func with no params', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [outputArray1, outputArray2] = separate(inputArray, (el) => el < 5);

  expect(inputArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  expect(outputArray1).toEqual([1, 2, 3, 4]);
  expect(outputArray2).toEqual([5, 6, 7, 8, 9]);
});

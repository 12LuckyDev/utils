import { expect, test } from 'vitest';
import { reshuffle } from './reshuffle';

test('TESTING reshuffle func', () => {
  const inputArray = [3, 1, 2];
  const [outputArray1, hash1] = reshuffle(inputArray);

  expect(inputArray === outputArray1).toEqual(false);
  expect(inputArray.length === outputArray1.length).toEqual(true);
  expect(hash1.length === outputArray1.length).toEqual(true);

  const [outputArray2, hash2] = reshuffle(outputArray1, hash1);

  expect(inputArray).toEqual([3, 1, 2]);

  expect(hash2).toEqual(hash1);
  expect(outputArray2).toEqual(inputArray);
});

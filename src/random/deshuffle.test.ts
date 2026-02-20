import { expect, test } from 'vitest';
import { deshuffle } from './deshuffle';

test('TESTING deshuffle func', () => {
  const inputArray = [3, 1, 2];
  const outputArray = deshuffle(inputArray, [2, 0, 1]);

  expect(inputArray === outputArray).toEqual(false);
  expect(inputArray.length === outputArray.length).toEqual(true);

  expect(outputArray).toEqual([1, 2, 3]);
  expect(inputArray).toEqual([3, 1, 2]);
});

test('TESTING deshuffle func with mismatched array and hash lengths', () => {
  expect(() => deshuffle([1, 2, 3], [0, 1])).toThrow(Error);
});

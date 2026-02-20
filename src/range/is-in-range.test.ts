import { expect, test } from 'vitest';
import { isInRange } from './is-in-range';

test('TESTING isInRange func', () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  expect(isInRange(array, 5)).toEqual(true);
  expect(isInRange(array, -1)).toEqual(false);
  expect(isInRange(array, 100)).toEqual(false);
});

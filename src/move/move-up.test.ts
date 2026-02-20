import { expect, test } from 'vitest';
import { moveUp } from './move-up';

test('TESTING moveUp func', () => {
  const inputArray = ['a', 'b', 'c', 'd', 'e'];

  expect(moveUp(inputArray, 2)).toEqual(['a', 'b', 'd', 'c', 'e']);
});

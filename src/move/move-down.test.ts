import { test, expect } from 'vitest';
import { moveDown } from './move-down';

test('TESTING moveDown func', () => {
  const inputArray = ['a', 'b', 'c', 'd', 'e'];

  expect(moveDown(inputArray, 2)).toEqual(['a', 'c', 'b', 'd', 'e']);
});

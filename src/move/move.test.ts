import { expect, test } from 'vitest';
import { move } from './move';

test('TESTING move func', () => {
  const inputArray = ['a', 'b', 'c', 'd', 'e'];

  expect(move(inputArray, 3, 1)).toEqual(['a', 'd', 'b', 'c', 'e']);

  //inputArray order can't change
  expect(inputArray).toEqual(['a', 'b', 'c', 'd', 'e']);

  //this operation should make array to look like orginal one
  expect(move(inputArray, 3, 5)).toEqual(['a', 'b', 'c', 'd', 'e']);
});

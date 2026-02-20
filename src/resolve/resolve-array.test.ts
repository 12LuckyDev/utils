import { expect, test } from 'vitest';
import { resolveArray } from './resolve-array';

test('TESTING resolveArray func', () => {
  expect(resolveArray(10)).toEqual([10]);

  expect(resolveArray([10])).toEqual([10]);

  expect(resolveArray([10, 20])).toEqual([10, 20]);
});

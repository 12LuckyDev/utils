import { expect, test } from 'vitest';
import { resolveValue } from './resolve-value';

test('TESTING resolveValue func', () => {
  expect(resolveValue(10, 11)).toEqual(10);

  expect(resolveValue((el) => el + 2, 11)).toEqual(13);
});

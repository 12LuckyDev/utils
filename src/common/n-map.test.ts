import { expect, test } from 'vitest';
import { nMap } from './n-map';

test('TESTING nMap func', () => {
  const resultArray = nMap(3, (i) => `${i} value`);
  expect(resultArray).toEqual(['0 value', '1 value', '2 value']);
});

import { merge, add, nMap, isInRange } from '../src/arrays-utils';

test('TESTING merge func', () => {
  const a = [1, 2, 3];
  const b = [4, 5];
  const resultArray = merge(a, b);
  expect(a).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(b).toEqual(expect.arrayContaining([4, 5]));
  expect(resultArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
});

test('TESTING add func', () => {
  const inputArray = [1, 2, 3];
  const resultArray = add(inputArray, 4);
  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(resultArray).toEqual(expect.arrayContaining([1, 2, 3, 4]));
});

test('TESTING nMap func', () => {
  const resultArray = nMap(3, (i) => `${i} value`);
  expect(resultArray).toEqual(expect.arrayContaining(['0 value', '1 value', '2 value']));
});

test('TESTING isInRange func', () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7];
  expect(isInRange(array, 5)).toEqual(true);
  expect(isInRange(array, -1)).toEqual(false);
  expect(isInRange(array, 100)).toEqual(false);
});

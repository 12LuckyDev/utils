import { merge, add, nMap, isInRange, compare } from '../src/arrays-common-utils';

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

test('TESTING compare func', () => {
  const array = [0, 1, 2, 3, 4, 5];
  expect(compare(array, array)).toEqual(true);
  expect(compare(array, [0, 1, 2, 3, 4, 5])).toEqual(true);
  expect(compare(array, [0, 1, 2])).toEqual(false);
  expect(compare(array, [5, 4, 3, 2, 1, 0])).toEqual(false);

  const objArray = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ];

  const compareSingle = (elA: { id: number; value: string }, elB: { id: number; value: string }) => elA.id === elB.id;

  expect(compare(objArray, objArray, compareSingle)).toEqual(true);

  expect(
    compare(
      objArray,
      [
        { id: 1, value: 'value 1' },
        { id: 2, value: 'value 2' },
        { id: 3, value: 'value 3' },
      ],
      compareSingle,
    ),
  ).toEqual(true);

  expect(
    compare(
      objArray,
      [
        { id: 2, value: 'value 2' },
        { id: 3, value: 'value 3' },
        { id: 4, value: 'value 4' },
      ],
      compareSingle,
    ),
  ).toEqual(false);
});

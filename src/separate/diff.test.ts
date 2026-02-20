import { expect, test } from 'vitest';
import { diff } from './diff';

test('TESTING diff func without editCheck', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [[added, deleted], [currentRest, originalRest], [currentEdit, originalEdit]] = diff(
    inputArray,
    [2, 3, 4, 10],
    (a, b) => a === b,
  );

  expect(added).toEqual([10]);
  expect(deleted).toEqual([1, 5, 6, 7, 8, 9]);

  expect(originalRest).toEqual([2, 3, 4]);
  expect(currentRest).toEqual([2, 3, 4]);

  expect(originalEdit).toEqual([]);
  expect(currentEdit).toEqual([]);

  expect(inputArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('TESTING diff func with editCheck', () => {
  const inputArray = [
    { id: 1, v: '1' },
    { id: 2, v: '2' },
    { id: 3, v: '3' },
    { id: 4, v: '4' },
    { id: 5, v: '5' },
  ];

  const [[added, deleted], [currentRest, originalRest], [currentEdit, originalEdit]] = diff(
    inputArray,
    [
      { id: 2, v: '2' },
      { id: 3, v: '3.1' },
      { id: 4, v: '4' },
      { id: 6, v: '6' },
    ],
    (a, b) => a.id === b.id,
    (a, b) => a.v === b.v,
  );

  expect(added).toEqual([{ id: 6, v: '6' }]);

  expect(deleted).toEqual([
    { id: 1, v: '1' },
    { id: 5, v: '5' },
  ]);

  expect(originalRest).toEqual([
    { id: 2, v: '2' },
    { id: 4, v: '4' },
  ]);

  expect(currentRest).toEqual([
    { id: 2, v: '2' },
    { id: 4, v: '4' },
  ]);

  expect(currentEdit).toEqual([{ id: 3, v: '3.1' }]);

  expect(originalEdit).toEqual([{ id: 3, v: '3' }]);

  expect(inputArray).toEqual([
    { id: 1, v: '1' },
    { id: 2, v: '2' },
    { id: 3, v: '3' },
    { id: 4, v: '4' },
    { id: 5, v: '5' },
  ]);
});

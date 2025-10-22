import { diff } from '../src';

test('TESTING diff func without editCheck', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [[added, deleted], [currentRest, originalRest], [currentEdit, originalEdit]] = diff(
    inputArray,
    [2, 3, 4, 10],
    (a, b) => a === b,
  );

  expect(added).toEqual(expect.arrayContaining([10]));
  expect(deleted).toEqual(expect.arrayContaining([1, 5, 6, 7, 8, 9]));

  expect(originalRest).toEqual(expect.arrayContaining([2, 3, 4]));
  expect(currentRest).toEqual(expect.arrayContaining([2, 3, 4]));

  expect(originalEdit).toEqual(expect.arrayContaining([]));
  expect(currentEdit).toEqual(expect.arrayContaining([]));

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));
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

  expect(added).toEqual(expect.arrayContaining([expect.objectContaining({ id: 6, v: '6' })]));
  expect(deleted).toEqual(
    expect.arrayContaining([expect.objectContaining({ id: 1, v: '1' }), expect.objectContaining({ id: 5, v: '5' })]),
  );

  expect(originalRest).toEqual(
    expect.arrayContaining([expect.objectContaining({ id: 2, v: '2' }), expect.objectContaining({ id: 4, v: '4' })]),
  );

  expect(currentRest).toEqual(
    expect.arrayContaining([expect.objectContaining({ id: 2, v: '2' }), expect.objectContaining({ id: 4, v: '4' })]),
  );

  expect(currentEdit).toEqual(expect.arrayContaining([expect.objectContaining({ id: 3, v: '3.1' })]));

  expect(originalEdit).toEqual(expect.arrayContaining([expect.objectContaining({ id: 3, v: '3' })]));

  expect(inputArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1, v: '1' }),
      expect.objectContaining({ id: 2, v: '2' }),
      expect.objectContaining({ id: 3, v: '3' }),
      expect.objectContaining({ id: 4, v: '4' }),
      expect.objectContaining({ id: 5, v: '5' }),
    ]),
  );

  const x = diff(
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
  console.log(x[0], x[1], x[2]);
});

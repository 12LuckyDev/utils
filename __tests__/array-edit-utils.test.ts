import { editAt, editByProp, editPropAt } from '../src/arrays-utils';

test('TESTING editAt func', () => {
  const inputArray = [1, 2, 3];
  const resultArray = editAt(inputArray, 4, 1);
  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(resultArray).toEqual(expect.arrayContaining([1, 4, 3]));
});

test('TESTING editByProp func', () => {
  const inputArray = [
    { id: 1, name: 'Kevin' },
    { id: 2, name: 'Karen' },
    { id: 3, name: 'Bob' },
  ];

  const resultArray1 = editByProp(inputArray, { id: 4, name: 'Ann' }, 'id', 2);
  expect(resultArray1).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1, name: 'Kevin' }),
      expect.objectContaining({ id: 4, name: 'Ann' }),
      expect.objectContaining({ id: 3, name: 'Bob' }),
    ]),
  );

  const resultArray2 = editByProp(inputArray, { id: 2, name: 'Luis' }, 'id');
  expect(resultArray2).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1, name: 'Kevin' }),
      expect.objectContaining({ id: 2, name: 'Luis' }),
      expect.objectContaining({ id: 3, name: 'Bob' }),
    ]),
  );

  expect(inputArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1, name: 'Kevin' }),
      expect.objectContaining({ id: 2, name: 'Karen' }),
      expect.objectContaining({ id: 3, name: 'Bob' }),
    ]),
  );
});

test('TESTING editPropAt func', () => {
  const inputArray = [
    { id: 1, name: 'Kevin' },
    { id: 2, name: 'Karen' },
    { id: 3, name: 'Bob' },
  ];

  const resultArray1 = editPropAt(inputArray, 'name', 'Angela', 2);
  expect(resultArray1).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1, name: 'Kevin' }),
      expect.objectContaining({ id: 2, name: 'Karen' }),
      expect.objectContaining({ id: 3, name: 'Angela' }),
    ]),
  );

  expect(inputArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: 1, name: 'Kevin' }),
      expect.objectContaining({ id: 2, name: 'Karen' }),
      expect.objectContaining({ id: 3, name: 'Bob' }),
    ]),
  );
});

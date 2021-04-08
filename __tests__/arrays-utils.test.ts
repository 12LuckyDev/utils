import {
  merge,
  add,
  editAt,
  editByProp,
  removeAt,
  popByIndex,
  removeByProp,
  popByProp,
  removeByProps,
  nMap,
} from '../src/arrays-utils';

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

test('TESTING removeAt func', () => {
  const inputArray = [1, 2, 3];
  const resultArray = removeAt(inputArray, 1);
  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(resultArray).toEqual(expect.arrayContaining([1, 3]));
});

test('TESTING popByIndex func', () => {
  const inputArray = [1, 2, 3];
  const [popped, resultArray] = popByIndex(inputArray, 1);
  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(popped).toEqual(2);
  expect(resultArray).toEqual(expect.arrayContaining([1, 3]));
});

test('TESTING removeByProp func', () => {
  const inputArray = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ];
  const resultArray = removeByProp(inputArray, 'id', 2);
  expect(inputArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        value: 'value 1',
      }),
      expect.objectContaining({
        id: 2,
        value: 'value 2',
      }),
      expect.objectContaining({
        id: 3,
        value: 'value 3',
      }),
    ]),
  );
  expect(resultArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        value: 'value 1',
      }),
      expect.objectContaining({
        id: 3,
        value: 'value 3',
      }),
    ]),
  );
});

test('TESTING popByProp func', () => {
  const inputArray = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ];

  const [popped, resultArray1] = popByProp(inputArray, 'id', 2);
  const [poppedArray, resultArray2] = popByProp(inputArray, 'id', 2, false);

  expect(inputArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        value: 'value 1',
      }),
      expect.objectContaining({
        id: 2,
        value: 'value 2',
      }),
      expect.objectContaining({
        id: 3,
        value: 'value 3',
      }),
    ]),
  );

  expect(popped).toEqual(
    expect.objectContaining({
      id: 2,
      value: 'value 2',
    }),
  );

  expect(resultArray1).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        value: 'value 1',
      }),
      expect.objectContaining({
        id: 3,
        value: 'value 3',
      }),
    ]),
  );

  expect(poppedArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 2,
        value: 'value 2',
      }),
    ]),
  );

  expect(resultArray2).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        value: 'value 1',
      }),
      expect.objectContaining({
        id: 3,
        value: 'value 3',
      }),
    ]),
  );
});

test('TESTING removeByProps func', () => {
  const inputArray = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
    { id: 4, value: 'value 4' },
  ];
  const resultArray = removeByProps(inputArray, 'id', [2, 4]);
  expect(inputArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        value: 'value 1',
      }),
      expect.objectContaining({
        id: 2,
        value: 'value 2',
      }),
      expect.objectContaining({
        id: 3,
        value: 'value 3',
      }),
      expect.objectContaining({
        id: 4,
        value: 'value 4',
      }),
    ]),
  );
  expect(resultArray).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 1,
        value: 'value 1',
      }),
      expect.objectContaining({
        id: 3,
        value: 'value 3',
      }),
    ]),
  );
});

test('TESTING nMap func', () => {
  const resultArray = nMap(3, (i) => `${i} value`);
  expect(resultArray).toEqual(expect.arrayContaining(['0 value', '1 value', '2 value']));
});

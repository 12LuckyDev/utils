import { remove, removeAt, popByIndex, removeByProp, popByProp, removeByProps } from '../src/arrays-utils';

test('TESTING remove func', () => {
  const inputArray = [1, 2, 3];
  const resultArray = remove(inputArray, 2);
  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(resultArray).toEqual(expect.arrayContaining([1, 3]));
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

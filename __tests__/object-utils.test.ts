import { mapToObject, mapToObjectUsing, forEachProp } from '../src/object-utils';

test('TESTING mapToObject func', () => {
  const inputArray = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 3, value: 'c' },
  ];
  const result1 = mapToObject(inputArray, 'value');

  expect(result1).toEqual(
    expect.objectContaining({
      a: { id: 1 },
      b: { id: 2 },
      c: { id: 3 },
    }),
  );

  const result2 = mapToObject(inputArray, 'value', true);

  expect(result2).toEqual(
    expect.objectContaining({
      a: expect.objectContaining({ id: 1, value: 'a' }),
      b: expect.objectContaining({ id: 2, value: 'b' }),
      c: expect.objectContaining({ id: 3, value: 'c' }),
    }),
  );
});

test('TESTING mapToObjectUsing func', () => {
  const inputArray = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 3, value: 'c' },
  ];
  const result = mapToObjectUsing(inputArray, 'value', (v) => {
    return v.value;
  });

  expect(result).toEqual(
    expect.objectContaining({
      a: 'a',
      b: 'b',
      c: 'c',
    }),
  );
});

test('TESTING mapToObjectUsing func', () => {
  const input = { a: 1, b: 2, c: 3 };

  const result: number[] = [];

  forEachProp(input, (v) => result.push(v as number));
  expect(result).toEqual(expect.arrayContaining([1, 2, 3]));
});

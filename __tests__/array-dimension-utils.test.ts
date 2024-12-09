import { to2D } from '../src';

test('TESTING to2D func with no params', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outputArray1 = to2D(inputArray);

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  expect(outputArray1.length).toEqual(3);
  outputArray1.forEach((ar) => expect(ar.length).toEqual(3));
  expect(outputArray1[0]).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(outputArray1[2]).toEqual(expect.arrayContaining([7, 8, 9]));
});

test('TESTING to2D func with no params and unvalid input array', () => {
  expect(() => to2D([1, 2, 3, 4, 5, 6, 7, 8])).toThrow(Error);
});

test('TESTING to2D func with set size', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outputArray1 = to2D(inputArray, { size: 5 });
  const outputArray2 = to2D(inputArray, { size: 2 });

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  expect(outputArray1.length).toEqual(2);
  expect(outputArray1[0]).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  expect(outputArray1[1]).toEqual(expect.arrayContaining([6, 7, 8, 9]));

  expect(outputArray2.length).toEqual(5);
  expect(outputArray2[0]).toEqual(expect.arrayContaining([1, 2]));
  expect(outputArray2[4]).toEqual(expect.arrayContaining([9]));
});

test('TESTING to2D func with cols direction', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outputArray1 = to2D(inputArray, { direction: 'cols' });

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  expect(outputArray1.length).toEqual(3);
  outputArray1.forEach((ar) => expect(ar.length).toEqual(3));
  expect(outputArray1[0][0]).toEqual(1);
  expect(outputArray1[0][1]).toEqual(4);
  expect(outputArray1[0][2]).toEqual(7);
  expect(outputArray1[2]).toEqual(expect.arrayContaining([3, 6, 9]));
});

test('TESTING to2D func with cols direction and set size', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outputArray1 = to2D(inputArray, { direction: 'cols', size: 4 });

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  expect(outputArray1.length).toEqual(4);
  expect(outputArray1[0][0]).toEqual(1);
  expect(outputArray1[1][0]).toEqual(2);
  expect(outputArray1[2]).toEqual(expect.arrayContaining([3, 7]));
  expect(outputArray1[3][0]).toEqual(4);
});

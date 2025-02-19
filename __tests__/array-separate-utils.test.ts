import { separate, multiSeparate } from '../src';

test('TESTING separate func with no params', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [outputArray1, outputArray2] = separate(inputArray, (el) => el < 5);

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  expect(outputArray1).toEqual(expect.arrayContaining([1, 2, 3, 4]));
  expect(outputArray2).toEqual(expect.arrayContaining([5, 6, 7, 8, 9]));
});

test('TESTING multiSeparate func with no params', () => {
  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = multiSeparate(inputArray, (el) => el % 3);

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6, 7, 8, 9]));

  expect([...result.keys()]).toEqual(expect.arrayContaining([0, 1, 2]));
  expect(result.get(0)).toEqual(expect.arrayContaining([3, 6, 9]));
  expect(result.get(1)).toEqual(expect.arrayContaining([1, 4, 7]));
  expect(result.get(2)).toEqual(expect.arrayContaining([2, 5, 8]));
});

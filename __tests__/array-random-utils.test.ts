import { shuffle, reshuffle, deshuffle } from '../src/array-random-utils';

test('TESTING shuffle func', () => {
  const inputArray = [1, 2, 3];
  const outputArray = shuffle(inputArray);

  expect(inputArray === outputArray).toEqual(false);
  expect(inputArray.length === outputArray.length).toEqual(true);

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));
});

test('TESTING deshuffle func', () => {
  const inputArray = [3, 1, 2];
  const outputArray = deshuffle(inputArray, [2, 0, 1]);

  expect(inputArray === outputArray).toEqual(false);
  expect(inputArray.length === outputArray.length).toEqual(true);

  expect(outputArray).toEqual(expect.arrayContaining([1, 2, 3]));
  expect(inputArray).toEqual(expect.arrayContaining([3, 1, 2]));
});

test('TESTING reshuffle func', () => {
  const inputArray = [3, 1, 2];
  const [outputArray1, hash1] = reshuffle(inputArray);

  expect(inputArray === outputArray1).toEqual(false);
  expect(inputArray.length === outputArray1.length).toEqual(true);
  expect(hash1.length === outputArray1.length).toEqual(true);

  const [outputArray2, hash2] = reshuffle(outputArray1, hash1);

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));

  expect(hash2).toEqual(expect.arrayContaining(hash1));
  expect(outputArray2).toEqual(expect.arrayContaining(inputArray));
});

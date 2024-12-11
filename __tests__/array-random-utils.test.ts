import { shuffle } from '../src/array-random-utils';

test('TESTING shuffle func', () => {
  const inputArray = [1, 2, 3];
  const outputArray = shuffle(inputArray);

  expect(inputArray === outputArray).toEqual(false);
  expect(inputArray.length === outputArray.length).toEqual(true);

  expect(inputArray).toEqual(expect.arrayContaining([1, 2, 3]));
});

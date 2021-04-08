import { isObject, isArray, isFunc } from '../src/type-utils';

test('TESTING isObject func', () => {
  expect(isObject(null)).toEqual(true);
  expect(isObject({})).toEqual(true);
  expect(isObject({ key: 'value' })).toEqual(true);
  expect(isObject(null, false)).toEqual(false);
  expect(isObject({}, false)).toEqual(true);
  expect(isObject({ key: 'value' }, false)).toEqual(true);
  expect(isObject([])).toEqual(false);
  expect(isObject(['a', 'b'])).toEqual(false);
});

test('TESTING isArray func', () => {
  expect(isArray(null)).toEqual(false);
  expect(isArray({})).toEqual(false);
  expect(isArray({ key: 'value' })).toEqual(false);
  expect(isArray([])).toEqual(true);
  expect(isArray(['a', 'b'])).toEqual(true);
  expect(isArray(null, false)).toEqual(false);
  expect(isArray({}, false)).toEqual(false);
  expect(isArray({ key: 'value' }, false)).toEqual(false);
  expect(isArray([], false)).toEqual(false);
  expect(isArray(['a', 'b'], false)).toEqual(true);
});

test('TESTING isFunc func', () => {
  const func1 = (a: number, b: number) => a + b;

  function func2(a: number, b: number) {
    return a + b;
  }

  const func3 = function (a: number, b: number) {
    return a + b;
  };

  expect(isFunc(() => console.log('Hello'))).toEqual(true);
  expect(isFunc(func1)).toEqual(true);
  expect(isFunc(func2)).toEqual(true);
  expect(isFunc(func3)).toEqual(true);
  expect(isFunc(null)).toEqual(false);
  expect(isFunc([1, 2, 3])).toEqual(false);
  expect(isFunc({ a: 10 })).toEqual(false);
});

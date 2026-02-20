import { describe, expect, it } from 'vitest';
import { remove } from './remove';

describe('remove', () => {
  it('should remove an existing element from an array', () => {
    const inputArray = [1, 2, 3];

    expect(inputArray).toEqual([1, 2, 3]);
    expect(remove(inputArray, 2)).toEqual([1, 3]);
  });

  it('should not remove a non-existing element from an array', () => {
    const inputArray = [1, 2, 3];
    const resultArray = remove(inputArray, 4);

    expect(inputArray).toEqual([1, 2, 3]);
    expect(resultArray).toEqual([1, 2, 3]);
    expect(resultArray).toBe(inputArray);
  });

  it('should remove a existing element from an array using compare function', () => {
    const inputArray = [1, 2, 3];
    const resultArray = remove(inputArray, (el) => el === 2);

    expect(inputArray).toEqual([1, 2, 3]);
    expect(resultArray).toEqual([1, 3]);
  });

  it('should not remove a non-existing element from an array using compare function', () => {
    const inputArray = [1, 2, 3];
    const resultArray = remove(inputArray, (el) => el === 4);

    expect(inputArray).toEqual([1, 2, 3]);
    expect(resultArray).toEqual([1, 2, 3]);
    expect(resultArray).toBe(inputArray);
  });

  it('should remove only the first occurrence of an element if single is true', () => {
    const inputArray = [1, 2, 2, 3];
    const resultArray = remove(inputArray, 2, true);
    expect(resultArray).toEqual([1, 2, 3]);
  });

  it('should remove all occurrences of an element if single is false', () => {
    const inputArray = [1, 2, 2, 3];
    const resultArray = remove(inputArray, 2, false);
    expect(resultArray).toEqual([1, 3]);
  });

  it('should remove only the first occurrence of an element if single is true using compare function', () => {
    const inputArray = [1, 2, 2, 3];
    const resultArray = remove(inputArray, (el) => el === 2, true);
    expect(resultArray).toEqual([1, 2, 3]);
  });

  it('should remove all occurrences of an element if single is false using compare function', () => {
    const inputArray = [1, 2, 2, 3];
    const resultArray = remove(inputArray, (el) => el === 2, false);
    expect(resultArray).toEqual([1, 3]);
  });
});

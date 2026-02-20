import { describe, it, expect } from 'vitest';
import { addSortValuesAndShuffle } from './add-sort-values-and-shuffle';

describe('addSortValuesAndShuffle', () => {
  it('should return an array with the same length as the input', () => {
    const input = [1, 2, 3, 4, 5];
    const result = addSortValuesAndShuffle(input);
    expect(result).toHaveLength(5);
  });

  it('should add random sort values between 0 and 1', () => {
    const input = [1, 2, 3, 4, 5];
    const result = addSortValuesAndShuffle(input);
    result.forEach(({ sort }) => {
      expect(sort).toBeGreaterThanOrEqual(0);
      expect(sort).toBeLessThanOrEqual(1);
    });
  });

  it('should return objects with value, sort, and index properties', () => {
    const input = [42];
    const result = addSortValuesAndShuffle(input);
    expect(result[0]).toHaveProperty('value');
    expect(result[0]).toHaveProperty('sort');
    expect(result[0]).toHaveProperty('index');
  });

  it('should handle empty array', () => {
    const input: number[] = [];
    const result = addSortValuesAndShuffle(input);
    expect(result).toEqual([]);
  });

  it('should handle single element', () => {
    const input = ['single'];
    const result = addSortValuesAndShuffle(input);
    expect(result).toHaveLength(1);
    expect(result[0].value).toBe('single');
    expect(result[0].index).toBe(0);
  });

  it('should work with objects as array elements', () => {
    const input = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = addSortValuesAndShuffle(input);
    expect(result).toHaveLength(3);
  });

  it('should sort the array based on the generated sort values', () => {
    const input = [1, 2, 3, 4, 5];
    const result = addSortValuesAndShuffle(input);

    for (let i = 1; i < result.length; i++) {
      expect(result[i].sort).toBeGreaterThanOrEqual(result[i - 1].sort);
    }
  });

  it('should handle different data types', () => {
    const input: (string | number | boolean)[] = ['text', 42, true];
    const result = addSortValuesAndShuffle(input);
    expect(result).toHaveLength(3);
  });
});

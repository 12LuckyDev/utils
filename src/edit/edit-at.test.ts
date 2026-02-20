import { describe, expect, it } from 'vitest';
import { editAt } from './edit-at';

describe('editAt', () => {
  const input = [1, 2, 3];

  it('should change value at given index', () => {
    expect(editAt(input, 1, 4)).toEqual([1, 4, 3]);
  });

  it('should change value at given index by function', () => {
    expect(editAt(input, 1, (el) => el + 10)).toEqual([1, 12, 3]);
  });

  it('should change values at given indexes', () => {
    expect(editAt(input, [0, 2], 0)).toEqual([0, 2, 0]);
  });

  it('should change values at given indexes by function', () => {
    expect(editAt(input, [0, 2], (el) => el * 10)).toEqual([10, 2, 30]);
  });

  it('should return original array if index is out of range', () => {
    expect(editAt(input, 5, 4)).toBe(input);
  });

  it('should return original array if indexes are out of range', () => {
    expect(editAt(input, [5, 10, -1], 4)).toBe(input);
  });

  it('should not mutate original arrays', () => {
    expect(input).toEqual([1, 2, 3]);
  });
});

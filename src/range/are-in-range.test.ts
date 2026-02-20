import { describe, expect, it } from 'vitest';
import { areInRange } from './are-in-range';

describe('areInRange', () => {
  const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('should check if all of indexes are in range, and returns true', () => {
    expect(areInRange(input, [0, 4, 7], true)).toBe(true);
  });

  it('should check if all param is optional and fallback to true', () => {
    expect(areInRange(input, [0, 4, 7])).toBe(true);
  });

  it('should check if all of indexes that are not in order are in range, and returns true', () => {
    expect(areInRange(input, [9, 1, 5])).toBe(true);
  });

  it('should check if all of indexes are in range, and returns false', () => {
    expect(areInRange(input, [0, 4, 7, 10])).toBe(false);
  });

  it('should check if some of indexes are in range, and returns true', () => {
    expect(areInRange(input, [-20, 0, 4, 7, 10], false)).toBe(true);
  });

  it('should check if some of indexes are in range, and returns false', () => {
    expect(areInRange(input, [-20, 10], false)).toBe(false);
  });
});

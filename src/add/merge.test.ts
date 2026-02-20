import { describe, expect, it } from 'vitest';
import { merge } from './merge';

describe('merge', () => {
  it('should merge two arrays without mutation', () => {
    const a = [1, 2, 3];
    const b = [4, 5];
    const resultArray = merge(a, b);
    expect(a).toEqual([1, 2, 3]);
    expect(b).toEqual([4, 5]);
    expect(resultArray).toEqual([1, 2, 3, 4, 5]);
  });

  it('should merge multiple arrays without mutation', () => {
    const a = [1, 2];
    const b = [3, 4];
    const c = [5, 6];
    const d = [7, 8];

    expect(merge(a, b, c, d)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

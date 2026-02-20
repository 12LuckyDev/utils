import { describe, expect, it } from 'vitest';
import { popAt } from './pop-at';

describe('popAt', () => {
  const input = [1, 2, 3, 4];

  it('should pop value at given index if it is in range', () => {
    const [popped, resultArray] = popAt(input, 1);
    expect(popped).toEqual(2);
    expect(resultArray).toEqual([1, 3, 4]);
  });

  it('should return undefined and original array if index is out of range', () => {
    const [poppedValue, resultArray] = popAt(input, 10);
    expect(poppedValue).toBeUndefined();
    expect(resultArray).toEqual([1, 2, 3, 4]);
    expect(resultArray).toBe(input);
  });

  it('should not mutate original array', () => {
    expect(input).toEqual([1, 2, 3, 4]);
  });
});

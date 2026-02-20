import { describe, expect, it } from 'vitest';
import { pop } from './pop';

describe('pop', () => {
  const input = [1, 2, 3, 4];

  it('should pop value from an array if it is contained', () => {
    const [poppedValue, resultArray] = pop(input, (value) => value === 2);
    expect(poppedValue).toBe(2);
    expect(resultArray).toEqual([1, 3, 4]);
  });

  it('should return original array if value is not contained', () => {
    const [poppedValue, resultArray] = pop(input, (value) => value === 5);
    expect(poppedValue).toBeUndefined();
    expect(resultArray).toEqual([1, 2, 3, 4]);
    expect(resultArray).toBe(input);
  });

  it('should not mutate original array', () => {
    expect(input).toEqual([1, 2, 3, 4]);
  });
});

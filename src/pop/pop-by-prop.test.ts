import { describe, expect, it } from 'vitest';
import { popByProp } from './pop-by-prop';

describe('popByProp', () => {
  const input = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ];

  it('should pop value from an array if it is contained', () => {
    const [popped, result] = popByProp(input, 'id', 2);

    expect(popped).toEqual({
      id: 2,
      value: 'value 2',
    });

    expect(result).toEqual([
      { id: 1, value: 'value 1' },
      { id: 3, value: 'value 3' },
    ]);
  });

  it('should return undefined andoriginal array if value is not contained', () => {
    const [popped, result] = popByProp(input, 'id', 4);

    expect(popped).toBeUndefined();
    expect(result).toEqual([
      { id: 1, value: 'value 1' },
      { id: 2, value: 'value 2' },
      { id: 3, value: 'value 3' },
    ]);
    expect(result).toBe(input);
  });

  it('should not mutate original array', () => {
    expect(input).toEqual([
      { id: 1, value: 'value 1' },
      { id: 2, value: 'value 2' },
      { id: 3, value: 'value 3' },
    ]);
  });
});

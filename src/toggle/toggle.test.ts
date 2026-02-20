import { describe, expect, it } from 'vitest';
import { toggle } from './toggle';

describe('toggle', () => {
  it('should toggle values in an array without mutation', () => {
    const input = [1, 2, 3];

    const removed = toggle(input, 2);
    expect(removed).toEqual([1, 3]);

    const added = toggle(removed, 2);
    expect(added).toEqual([1, 3, 2]);

    expect(removed).toEqual([1, 3]);
    expect(input).toEqual([1, 2, 3]);
  });

  it('should toggle values in an array with custom equality function', () => {
    const input = [
      { id: 1, value: 'value 1' },
      { id: 2, value: 'value 2' },
      { id: 3, value: 'value 3' },
    ];

    const removed = toggle(input, { id: 2, value: 'value 2' }, (el) => el.id === 2);
    expect(removed).toEqual([
      { id: 1, value: 'value 1' },
      { id: 3, value: 'value 3' },
    ]);

    const added = toggle(removed, { id: 2, value: 'value 2' }, (el) => el.id === 2);
    expect(added).toEqual([
      { id: 1, value: 'value 1' },
      { id: 3, value: 'value 3' },
      { id: 2, value: 'value 2' },
    ]);

    expect(removed).toEqual([
      { id: 1, value: 'value 1' },
      { id: 3, value: 'value 3' },
    ]);
    expect(input).toEqual([
      { id: 1, value: 'value 1' },
      { id: 2, value: 'value 2' },
      { id: 3, value: 'value 3' },
    ]);
  });
});

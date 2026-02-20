import { describe, expect, it } from 'vitest';
import { removeByProp } from './remove-by-prop';

describe('removeByProp', () => {
  it('should remove objects with specific property value from array', () => {
    const inputArray = [
      { id: 1, value: 'value 1' },
      { id: 2, value: 'value 2' },
      { id: 3, value: 'value 3' },
    ];

    const resultArray = removeByProp(inputArray, 'id', 2);

    expect(resultArray).toEqual([
      { id: 1, value: 'value 1' },
      { id: 3, value: 'value 3' },
    ]);

    expect(inputArray).toEqual([
      { id: 1, value: 'value 1' },
      { id: 2, value: 'value 2' },
      { id: 3, value: 'value 3' },
    ]);
  });
});

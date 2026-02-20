import { describe, expect, it } from 'vitest';
import { mappify } from './mappify';

describe('mappify', () => {
  it('should create a map with value stored in key field', () => {
    const inputArray = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 3, value: 'c' },
    ];
    const result = mappify(inputArray, 'id');

    expect(result.get(1)).toEqual({ id: 1, value: 'a' });
    expect(result.get(2)).toEqual({ id: 2, value: 'b' });
    expect(result.get(3)).toEqual({ id: 3, value: 'c' });
  });

  it('should create a map using a custom key function', () => {
    const inputArray = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 3, value: 'c' },
    ];

    const result = mappify(inputArray, (item) => item.id.toString() + '-key');

    expect(result.get('1-key')).toEqual({ id: 1, value: 'a' });
    expect(result.get('2-key')).toEqual({ id: 2, value: 'b' });
    expect(result.get('3-key')).toEqual({ id: 3, value: 'c' });
  });

  it('should create a map using a custom key function and value function', () => {
    const inputArray = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 3, value: 'c' },
    ];

    const result = mappify(
      inputArray,
      (item) => item.id,
      (item) => item.value,
    );

    expect(result.get(1)).toEqual('a');
    expect(result.get(2)).toEqual('b');
    expect(result.get(3)).toEqual('c');
  });

  it('should create a map using a custom key function and value function and remove duplicates (takes last key occurrence)', () => {
    const inputArray = [
      { id: 1, value: 'a' },
      { id: 2, value: 'b' },
      { id: 1, value: 'c' },
    ];

    const result = mappify(
      inputArray,
      (item) => item.id,
      (item) => item.value,
    );

    expect(result.get(1)).toEqual('c');
    expect(result.get(2)).toEqual('b');
  });
});

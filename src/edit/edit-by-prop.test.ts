import { describe, expect, it } from 'vitest';
import { editByProp } from './edit-by-prop';

describe('editByProp', () => {
  const input = [
    { id: 1, name: 'Kevin' },
    { id: 2, name: 'Karen' },
    { id: 3, name: 'Bob' },
  ];

  it('should edit simgle element in an array based on prop and value', () => {
    expect(editByProp(input, 'id', 2, { id: 4, name: 'Ann' })).toEqual([
      { id: 1, name: 'Kevin' },
      { id: 4, name: 'Ann' },
      { id: 3, name: 'Bob' },
    ]);
  });

  it('should edit simgle element in an array based on prop and value using funtions to resolve value', () => {
    expect(editByProp(input, 'id', 2, (el) => ({ ...el, name: 'Simon' }))).toEqual([
      { id: 1, name: 'Kevin' },
      { id: 2, name: 'Simon' },
      { id: 3, name: 'Bob' },
    ]);
  });

  it('should edit simgle element in an array based on prop', () => {
    expect(editByProp(input, 'id', { id: 2, name: 'Luis' })).toEqual([
      { id: 1, name: 'Kevin' },
      { id: 2, name: 'Luis' },
      { id: 3, name: 'Bob' },
    ]);
  });

  it('should return original array if no elements match the rule function', () => {
    expect(editByProp(input, 'id', 10, { id: 20, name: 'Bobby' })).toBe(input);
  });

  it('should not mutate original arrays', () => {
    expect(input).toEqual([
      { id: 1, name: 'Kevin' },
      { id: 2, name: 'Karen' },
      { id: 3, name: 'Bob' },
    ]);
  });
});

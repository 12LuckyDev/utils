import { describe, expect, it } from 'vitest';
import { edit } from './edit';

describe('edit', () => {
  const simpleInput = [1, 2, 3, 4, 5];
  const objectInput = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  it('should edit simgle element in an array based on a rule function', () => {
    expect(edit(simpleInput, (el) => el === 3, 99)).toEqual([1, 2, 99, 4, 5]);
  });

  it('should edit simgle element in an array based on a rule function, using handler function', () => {
    expect(
      edit(
        objectInput,
        (el) => el.id === 2,
        (el) => ({ ...el, name: 'Bobby' }),
      ),
    ).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bobby' },
      { id: 3, name: 'Charlie' },
    ]);
  });

  it('should edit many elements in an array based on a rule function', () => {
    expect(edit(simpleInput, (el) => el === 3 || el === 5, 99, false)).toEqual([1, 2, 99, 4, 99]);
  });

  it('should edit many elements in an array based on a rule function, using handler function', () => {
    expect(
      edit(
        simpleInput,
        (el) => el > 2,
        (el) => el * 10,
        false,
      ),
    ).toEqual([1, 2, 30, 40, 50]);
  });

  it('should return original array if no elements match the rule function', () => {
    expect(edit(simpleInput, (el) => el === 99, 0)).toBe(simpleInput);
  });

  it('should not mutate original arrays', () => {
    expect(simpleInput).toEqual([1, 2, 3, 4, 5]);
    expect(objectInput).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]);
  });
});

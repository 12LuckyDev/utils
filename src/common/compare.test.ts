import { describe, expect, it } from 'vitest';
import { compare } from './compare';

describe('compare', () => {
  const simpleArray = [0, 1, 2, 3, 4, 5];

  it('should return true for identical arrays of simple values', () => {
    expect(compare(simpleArray, simpleArray)).toEqual(true);
    expect(compare(simpleArray, [0, 1, 2, 3, 4, 5])).toEqual(true);
  });

  it('should return false for different arrays of simple values', () => {
    expect(compare(simpleArray, [0, 1, 2])).toEqual(false);
    expect(compare(simpleArray, [5, 4, 3, 2, 1, 0])).toEqual(false);
  });

  const objectArray = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ];

  const compareSingle = (elA: { id: number; value: string }, elB: { id: number; value: string }) => elA.id === elB.id;

  it('should return true for identical arrays of objects', () => {
    expect(compare(objectArray, objectArray, compareSingle)).toEqual(true);
    expect(
      compare(
        objectArray,
        [
          { id: 1, value: 'value 1' },
          { id: 2, value: 'value 2' },
          { id: 3, value: 'value 3' },
        ],
        compareSingle,
      ),
    ).toEqual(true);
  });

  it('should return false for different arrays of objects', () => {
    expect(
      compare(
        objectArray,
        [
          { id: 2, value: 'value 2' },
          { id: 3, value: 'value 3' },
          { id: 4, value: 'value 4' },
        ],
        compareSingle,
      ),
    ).toEqual(false);
  });
});

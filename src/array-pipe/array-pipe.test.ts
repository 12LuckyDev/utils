import { describe, expect, it } from 'vitest';
import { ArrayPipe } from './array-pipe';

describe('ArrayPipe', () => {
  const array = [1, 2, 3];

  it('should create an instance of ArrayPipe', () => {
    const pipe = new ArrayPipe(array);
    expect(pipe).toBeInstanceOf(ArrayPipe);
  });

  it('should push values to the array and return the result', () => {
    const pipe = new ArrayPipe(array);
    const result = pipe.push(4, 5).result();
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should insert values at a specific index and return the result', () => {
    const pipe = new ArrayPipe(array);
    const result = pipe.insertAt(1, 10).result();
    expect(result).toEqual([1, 10, 2, 3]);
  });

  it('should merge arrays into orginal and return the result', () => {
    const pipe = new ArrayPipe(array);
    const result = pipe.merge([4, 5], [6, 7]).result();
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should push values to the array and insert values at a specific index and return the result', () => {
    const pipe = new ArrayPipe(array);
    const result = pipe.push(4, 5).insertAt(0, 0).result();
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('should update whole array, based od update function', () => {
    const pipe = new ArrayPipe(array);
    const result = pipe.update(() => [3, 4, 5]).result();
    expect(result).toEqual([3, 4, 5]);
  });

  it('should not return the original array', () => {
    const pipe = new ArrayPipe(array);
    const result = pipe.push(4, 5).result();
    expect(result).not.toBe(array);
  });

  it('shouldnt modify the original array', () => {
    expect(array).toEqual([1, 2, 3]);
  });
});

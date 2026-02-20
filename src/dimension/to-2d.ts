import { nMap } from '../common';

/**
 * Return 2d version of input array
 * @param array input array
 * @param opt optional options
 * @param opt.direction direction in which build new array ('rows' | 'cols' default 'rows')
 * @param opt.size size of result array in given direction, if isn't given then is set to square root of array length
 * @returns 2d version of input array
 */
export function to2D<T>(array: T[], opt?: { direction?: 'rows' | 'cols'; size?: number }): T[][] {
  const direction = opt?.direction ?? 'rows';
  const size = opt?.size ?? Math.sqrt(array.length);

  if (!Number.isInteger(size)) {
    throw new Error("If size of output array isn't given then the square root of the array length must be integer!");
  }

  const result: T[][] = [];

  if (direction === 'rows') {
    array.forEach((el, i) => {
      const col = i % size;
      if (col === 0) {
        result.push([]);
      }
      result[result.length - 1].push(el);
    });
  } else {
    result.push(...nMap(size, () => []));

    array.forEach((el, i) => {
      const row = i % size;
      result[row].push(el);
    });
  }

  return result;
}

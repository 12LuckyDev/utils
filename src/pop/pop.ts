import { removeAt } from '../remove';

/**
 * Pops value from an array if it is contained, returns original array otherwise
 * @param array input array
 * @param ruleFn rule function to find value to be popped
 * @returns Tuple with popped value if it was found, and new array without popped value, or undefined and original array if value was not found
 */
export function pop<T>(array: T[], ruleFn: (value: T, index: number) => boolean): [T | undefined, T[]] {
  const index = array.findIndex(ruleFn);
  return index === -1 ? [undefined, array] : [array[index], removeAt(array, index)];
}

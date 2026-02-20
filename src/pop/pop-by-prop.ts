import { pop } from './pop';

/**
 * Pops value from an array if it is contained, returns original array otherwise * and array copy without values with specific properties value
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValue Value with which objects will be deleted
 * @returns Tuple with popped value if it was found, and new array without popped value, or undefined and original array if value was not found
 */
export function popByProp<T, K extends keyof T>(array: T[], key: K, propValue: T[K]): [T | undefined, T[]] {
  return pop(array, (v) => v[key] === propValue);
}

import { remove } from './remove';

/**
 * Returns array copy without values with specific properties value
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValue Value with which objects will be deleted
 * @param single If true, only the first occurrence of the value will be removed, otherwise all occurrences will be removed. Default is true.
 * @returns Array copy without elements matching the property value
 */
export function removeByProp<T, K extends keyof T>(array: T[], key: K, propValue: T[K], single: boolean = true): T[] {
  return remove(array, (v) => v[key] === propValue, single);
}

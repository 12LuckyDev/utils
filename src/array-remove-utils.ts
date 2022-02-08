import { merge, add } from '.';

/**
 * Returns array without given value
 * @param array Original array
 * @param value value to be deleted
 */
export const remove = <T>(array: T[], value: T): T[] => array.filter((v) => v !== value);

/**
 * Toggle Value - Removes value if contained in an array, adds value otherwise
 * @param array Original array
 * @param value value to be deleted or added
 * @returns
 */
export const toggle = <T>(array: T[], value: T): T[] =>
  array.includes(value) ? remove(array, value) : add(array, value);

/**
 * Returns array copy without value from given index
 * @param array Original array
 * @param index Index of value to remove
 */
export const removeAt = <T>(array: T[], index: number): T[] => merge(array.slice(0, index), array.slice(index + 1));

/**
 * Returns an array to be deconstructed with the value of the given index and array copy without value from given index
 * @param array Original array
 * @param index Index of value to remove
 * @returns [value, new array without value from given index]
 */
export const popByIndex = <T>(array: T[], index: number): [T, T[]] => [array[index], removeAt(array, index)];

/**
 * Returns array copy without values with specific properties value
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValue Value with which objects will be deleted
 */
export const removeByProp = <T, K extends keyof T>(array: T[], key: K, propValue: T[K]): T[] =>
  array.filter((v) => v[key] !== propValue);

/**
 * Returns an array to be deconstructed with the value or values removed from input array
 * and array copy without values with specific properties value
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValue Value with which objects will be deleted
 * @param singleValue The flag deciding whether a single value from the value array is expected
 */
export const popByProp = <T, K extends keyof T, B extends boolean>(
  array: T[],
  key: K,
  propValue: T[K],
  singleValue: B = true as B,
): B extends true ? [T | undefined, T[]] : [T[], T[]] => {
  const newArray = removeByProp(array, key, propValue);
  if (singleValue) {
    const v = array.find((v) => v[key] === propValue);
    return [v, newArray] as B extends true ? [T | undefined, T[]] : [T[], T[]];
  }
  return [array.filter((v) => v[key] === propValue), newArray] as B extends true ? [T | undefined, T[]] : [T[], T[]];
};

/**
 * Returns array copy without values with specific properties values
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValues Values with which objects will be deleted
 */
export const removeByProps = <T, K extends keyof T>(array: T[], key: K, propValues: Array<T[K]>): T[] =>
  array.filter((v) => !propValues.includes(v[key]));

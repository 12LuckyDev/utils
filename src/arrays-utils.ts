/**
 * Returns new array from merge
 * @param a First array
 * @param b Second array
 */
export const merge = <T>(a: Array<T>, b: Array<T>): Array<T> => [...a, ...b];

/**
 * Returns array copy with added value
 * @param array Original array
 * @param value Value to be added
 */
export const add = <T>(array: Array<T>, ...values: Array<T>): Array<T> => merge(array, values);

/**
 * Returns array copy with changed value at given index
 * @param array Original array
 * @param value New value
 * @param index Index for new value
 */
export const editAt = <T>(array: Array<T>, value: T, index: number): Array<T> =>
  array.map((v, i) => (i === index ? value : v));

/**
 * Returns array copy with changed value located by property value
 * @param array Original array
 * @param key Property name of value to compare
 * @param value Value with which objects will be deleted
 * @param propValue Property value after which the object is located
 */
export const editByProp = <T, K extends keyof T>(array: Array<T>, value: T, key: K, propValue?: T[K]): Array<T> => {
  const propV = propValue ?? value[key];
  return array.map((v) => (v[key] === propV ? value : v));
};

/**
 * Returns array copy without value from given index
 * @param array Original array
 * @param index Index of value to remove
 */
export const removeAt = <T>(array: Array<T>, index: number): Array<T> => array.filter((v, i) => i !== index);

/**
 * Returns an array to be deconstructed with the value of the given index and array copy without value from given index
 * @param array Original array
 * @param index Index of value to remove
 * @returns [value, new array without value from given index]
 */
export const popByIndex = <T>(array: Array<T>, index: number): [T, Array<T>] => [array[index], removeAt(array, index)];

/**
 * Returns array copy without values with specific properties value
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValue Value with which objects will be deleted
 */
export const removeByProp = <T, K extends keyof T>(array: Array<T>, key: K, propValue: T[K]): Array<T> =>
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
  array: Array<T>,
  key: K,
  propValue: T[K],
  singleValue: B = true as B,
): B extends true ? [T | undefined, Array<T>] : [Array<T>, Array<T>] => {
  const newArray = removeByProp(array, key, propValue);
  if (singleValue) {
    const v = array.find((v) => v[key] === propValue);
    return [v, newArray] as B extends true ? [T | undefined, Array<T>] : [Array<T>, Array<T>];
  }
  return [array.filter((v) => v[key] === propValue), newArray] as B extends true
    ? [T | undefined, Array<T>]
    : [Array<T>, Array<T>];
};

/**
 * Returns array copy without values with specific properties values
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValues Values with which objects will be deleted
 */
export const removeByProps = <T, K extends keyof T>(array: Array<T>, key: K, propValues: Array<T[K]>): Array<T> =>
  array.filter((v) => !propValues.includes(v[key]));

/**
 * Returns new array with given lenght, populated by map callback with index as parameter
 * @param n New array lenght
 * @param callback Map callback function
 */
export const nMap = <T>(n: number, callback: (i: number) => T): Array<T> => [...new Array(n).keys()].map(callback);

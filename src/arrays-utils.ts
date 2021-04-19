/**
 * Returns new array from merge
 * @param a First array
 * @param b Second array
 */
export const merge = <T>(a: T[], b: T[]): T[] => [...a, ...b];

/**
 * Returns array copy with added value
 * @param array Original array
 * @param value Value to be added
 */
export const add = <T>(array: T[], ...values: T[]): T[] => merge(array, values);

/**
 * Returns array copy with changed value at given index
 * @param array Original array
 * @param value New value
 * @param index Index for new value
 */
export const editAt = <T>(array: T[], value: T, index: number): T[] => array.map((v, i) => (i === index ? value : v));

/**
 * Edit value at given index;
 * @param array Original array
 * @param key Property name of value to change
 * @param propValue New property value
 * @param index Index for value to change
 */
export const editPropAt = <T, K extends keyof T>(array: T[], key: K, propValue: T[K], index: number): T[] => {
  const element = { ...array[index] };
  element[key] = propValue;
  return editAt(array, element, index);
};

/**
 * Returns array copy with changed value located by property value
 * @param array Original array
 * @param key Property name of value to compare
 * @param value Value with which objects will be deleted
 * @param propValue Property value after which the object is located
 */
export const editByProp = <T, K extends keyof T>(array: T[], value: T, key: K, propValue?: T[K]): T[] => {
  const propV = propValue ?? value[key];
  return array.map((v) => (v[key] === propV ? value : v));
};

/**
 * Returns array without given value
 * @param array Original array
 * @param value value to be deleted
 */
export const remove = <T>(array: T[], value: T): T[] => array.filter((v) => v !== value);

/**
 * Returns array copy without value from given index
 * @param array Original array
 * @param index Index of value to remove
 */
export const removeAt = <T>(array: T[], index: number): T[] => array.filter((v, i) => i !== index);

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

/**
 * Returns new array with given lenght, populated by map callback with index as parameter
 * @param n New array lenght
 * @param callback Map callback function
 */
export const nMap = <T>(n: number, callback: (i: number) => T): T[] => [...new Array(n).keys()].map(callback);

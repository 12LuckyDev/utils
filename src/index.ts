type SimpleType = string | number | boolean;

/**
 * Returns new array from merging
 * @param a First array s
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
 * Returns array copy without value from given index
 * @param array Original array
 * @param index Index of value to remove
 */
export const removeAt = <T>(array: Array<T>, index: number): Array<T> => array.filter((v, i) => i !== index);

/**
 * Returns array copy without values with specific properties value
 * @param array Original array
 * @param key Property name of value to compare
 * @param value Value with which objects will be deleted
 */
export const removeByProp = <T extends { [key: string]: SimpleType }, K extends keyof T>(
  array: Array<T>,
  key: K,
  value: SimpleType,
): Array<T> => array.filter((v) => v[key] !== value);

/**
 * Returns array copy without values with specific properties values
 * @param array Original array
 * @param key Property name of value to compare
 * @param values Values with which objects will be deleted
 */
export const removeByProps = <T extends { [key: string]: SimpleType }, K extends keyof T>(
  array: Array<T>,
  key: K,
  values: Array<SimpleType>,
): Array<T> => array.filter((v) => !values.includes(v[key]));

/**
 * Returns new array with given lenght, populated by map callback with index as parameter
 * @param n New array lenght
 * @param callback Map callback function
 */
export const nMap = <T>(n: number, callback: (i: number) => T): Array<T> => [...new Array(n).keys()].map(callback);

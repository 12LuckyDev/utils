/**
 * Checks if the index is within the dimensions of the array
 * @param array Range check array
 * @param index Index to be checked
 */
export const isInRange = <T>(array: T[], index: number): boolean => index >= 0 && index < array.length;

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
 * Returns new array with given lenght, populated by map callback with index as parameter
 * @param n New array lenght
 * @param callback Map callback function
 */
export const nMap = <T>(n: number, callback: (i: number) => T): T[] => [...new Array(n).keys()].map(callback);

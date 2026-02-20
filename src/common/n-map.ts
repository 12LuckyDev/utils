/**
 * Returns new array with given lenght, populated by map callback with index as parameter
 * @param n New array lenght
 * @param callback Map callback function
 * @returns New array with values from map callback
 */
export function nMap<T>(n: number, callback: (i: number) => T): T[] {
  return [...new Array(n).keys()].map(callback);
}

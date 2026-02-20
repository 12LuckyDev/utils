/**
 * Compare two arrays
 * @param a First array
 * @param b Second array
 * @param compareFn Optional compare function
 * @returns true if arrays are the same
 */
export function compare<T>(a: T[], b: T[], compareFn?: (elA: T, elB: T) => boolean): boolean {
  return compareFn
    ? a.length === b.length && a.every((v, i) => compareFn(v, b[i]))
    : a.length === b.length && a.every((v, i) => v === b[i]);
}

/**
 * Creates a new array by removing from the input array.
 * @param array Original array
 * @param value Value to be removed, or a predicate function used to keep elements (returns false to keep the element, true to remove it)
 * @param single If true, only the first occurrence of the value will be removed, otherwise all occurrences will be removed. Default is true.
 * @returns New array after removal
 */
export function remove<T>(array: T[], value: T, single?: boolean): T[];
export function remove<T>(array: T[], ruleFn: (el: T, i: number) => boolean, single?: boolean): T[];
export function remove<T>(array: T[], value: T | ((el: T, i: number) => boolean), single: boolean = true): T[] {
  let changed = false;
  let result: T[];
  if (typeof value === 'function') {
    const ruleFn = value as (el: T, i: number) => boolean;
    result = array.filter((el, i) => {
      if (changed && single) {
        return true;
      }

      if (ruleFn(el, i)) {
        changed = true;
        return false;
      }

      return true;
    });
  } else {
    result = array.filter((v) => {
      if (changed && single) {
        return true;
      }

      if (v === value) {
        changed = true;
        return false;
      }

      return true;
    });
  }

  return changed ? result : array;
}

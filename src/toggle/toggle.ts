import { push } from '../add';
import { removeAt } from '../remove';
import { remove } from '../remove/remove';

/**
 * Toggle Value - Removes value if contained in an array, adds value otherwise
 * @param array Original array
 * @param value value to be deleted or added
 * @returns New array with added value if it was not contained in the original array, or new array without value if it was contained in the original array
 */
export function toggle<T>(array: T[], value: T, ruleFn?: (el: T, i: number) => boolean): T[] {
  if (ruleFn) {
    const index = array.findIndex(ruleFn);
    return index >= 0 ? removeAt(array, index) : push(array, value);
  }

  return array.includes(value) ? remove(array, value) : push(array, value);
}

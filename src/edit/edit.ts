import { resolveValue } from '../resolve';

/**
 * Edit element(s) in an array based on a rule function. Returns a new array with the edited element(s).
 * @param array Original array
 * @param ruleFn Function that determines which element(s) to edit. It receives the element and its index as arguments and should return a boolean.
 * @param value for single element, it is the new value that will replace the matched element.
 * @param single If true, only the first element that matches the rule function will be edited. If false, all matching elements will be edited. Default is true.
 * @returns Array copy with edited element(s), or original array if no elements match the rule function
 */
export function edit<T>(
  array: T[],
  ruleFn: (el: T, i: number) => boolean,
  value: T | ((el: T) => T),
  single: boolean = true,
): T[] {
  let changed = false;
  const result = array.map((el, i) => {
    if (changed && single) {
      return el;
    }

    if (ruleFn(el, i)) {
      changed = true;
      return resolveValue(value, el);
    }
    return el;
  });

  return changed ? result : array;
}

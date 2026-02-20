import { resolveValue } from '../resolve';

/**
 * Returns array copy with changed value located by property value
 * @param array Original array
 * @param key Property name of value to compare
 * @param value Value with which objects will be deleted
 * @param propValue Property value after which the object is located
 * @returns Array copy with changed value located by property value, or original array if no object with given property value was found
 */
export function editByProp<T, K extends keyof T>(array: T[], key: K, value: T, single?: boolean): T[];
export function editByProp<T, K extends keyof T>(
  array: T[],
  key: K,
  propValue: T[K],
  value: T | ((el: T) => T),
  single?: boolean,
): T[];
export function editByProp<T, K extends keyof T>(
  array: T[],
  key: K,
  param1: T[K] | T | ((el: T) => T),
  param2?: T | ((el: T) => T) | boolean,
  param3?: boolean,
): T[] {
  let value: T | ((el: T) => T);
  let propValue: T[K] | undefined;
  let single: boolean;

  // if param2 is undefined or is boolean then function has 4 arguments
  if (param2 === undefined || typeof param2 === 'boolean') {
    if (typeof param1 === 'function') {
      throw new Error('Without propValue param, value param can not be function type');
    }
    value = param1 as T;
    propValue = value[key];
    single = (param2 as boolean | undefined) ?? true;
  } else {
    propValue = param1 as T[K];
    value = param2 as T | ((el: T) => T);
    single = param3 ?? true;
  }

  let changed = false;
  const result = array.map((el) => {
    if (changed && single) {
      return el;
    }
    const resolved = resolveValue(value, el);
    if (el[key] === propValue) {
      changed = true;
      return resolved;
    }
    return el;
  });

  return changed ? result : array;
}

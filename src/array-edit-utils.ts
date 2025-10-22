import { isInRange } from '.';

/**
 * Resolves a value that can either be a direct value or a function (updater) returning a value.
 *
 * If the provided `value` is a function, it is called with the current value (`current`)
 * and its result is returned. Otherwise, the `value` itself is returned as-is.
 * @param value or a function that returns a value based on the previous one.
 * @param current - The current value to pass to the updater function, if applicable.
 * @returns The resolved value.
 */
export const resolveValue = <T>(value: T | ((el: T) => T), current: T): T => {
  return typeof value === 'function' ? (value as (x: T) => T)(current) : value;
};

/**
 * Returns array copy with changed value at given index
 * If index isn't in range returns orginal array reference
 * @param array Original array
 * @param value New value
 * @param index Index for new value
 */
export const editAt = <T>(array: T[], value: T | ((el: T) => T), index: number): T[] => {
  if (!isInRange(array, index)) {
    return array;
  }

  return array.map((v, i) => (i === index ? resolveValue(value, v) : v));
};

/**
 * Edit value at given index;
 * If index isn't in range returns orginal array reference
 * @param array Original array
 * @param key Property name of value to change
 * @param propValue New property value
 * @param index Index for value to change
 */
export const editPropAt = <T, K extends keyof T>(array: T[], key: K, propValue: T[K], index: number): T[] => {
  return editAt(array, (element) => ({ ...element, [key]: propValue }), index);
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
 * Returns array copy with value moved from given index to new position
 * @param array Original array
 * @param from Index of value to change position
 * @param to Target index
 */
export const move = <T>(array: T[], from: number, to: number): T[] => {
  const copy = [...array];
  if (isInRange(copy, from) && isInRange(copy, to)) {
    copy.splice(from, 1);
    copy.splice(to, 0, array[from]);
  }
  return copy;
};

/**
 * Returns array copy with value moved from given index to index + 1 position
 * @param array Original array
 * @param index Index of value to change position
 */
export const moveUp = <T>(array: T[], index: number): T[] => move(array, index, index + 1);

/**
 * Returns array copy with value moved from given index to index - 1 position
 * @param array Original array
 * @param index Index of value to change position
 */
export const moveDown = <T>(array: T[], index: number): T[] => move(array, index, index - 1);

/**
 * Returns array copy with all values moved by offset
 * @param array Original array
 * @param offset Shift value by how much the positions of elements change
 * @param circual Flag that decides whether elements that will be outside the size of the array should appear on the other side
 */
export const shift = <T>(array: T[], offset: number, circual = true): T[] => {
  if (offset === 0) {
    return array.slice();
  }

  const pivot = (offset < 0 ? 0 : array.length) - (offset % array.length);

  if (circual) {
    return array.slice(pivot).concat(array.slice(0, pivot));
  }

  return offset > 0 ? array.slice(0, pivot) : array.slice(pivot);
};

/**
 * Returns array copy with value/values inserted at given index. Values in array after that index will be pushed
 * @param array Original array
 * @param index Index to insert value/values at
 * @param value Value/values to insert
 */
export const insertAt = <T>(array: T[], index: number, value: T | T[]): T[] => {
  const toInsert: T[] = Array.isArray(value) ? value : [value];
  return [...array.slice(0, index), ...toInsert, ...array.slice(index)];
};

import { isInRange } from '.';

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
export const shift = <T>(array: T[], offset: number, circual: boolean = true): T[] => {
  if (offset === 0) {
    return array.slice();
  }

  const pivot = (offset < 0 ? 0 : array.length) - (offset % array.length);

  if (circual) {
    return array.slice(pivot).concat(array.slice(0, pivot));
  }

  return offset > 0 ? array.slice(0, pivot) : array.slice(pivot);
};

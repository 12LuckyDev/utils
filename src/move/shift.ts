/**
 * Returns array copy with all values moved by offset
 * @param array Original array
 * @param offset Shift value by how much the positions of elements change
 * @param circual Flag that decides whether elements that will be outside the size of the array should appear on the other side
 */
export function shift<T>(array: T[], offset: number, circual = true): T[] {
  if (offset === 0) {
    return array.slice();
  }

  const pivot = (offset < 0 ? 0 : array.length) - (offset % array.length);

  if (circual) {
    return array.slice(pivot).concat(array.slice(0, pivot));
  }

  return offset > 0 ? array.slice(0, pivot) : array.slice(pivot);
}

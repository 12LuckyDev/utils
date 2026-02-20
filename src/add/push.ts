/**
 * Returns array copy with added value
 * @param array Original array
 * @param value Value to be added
 * @returns New array with added values
 */
export function push<T>(array: T[], ...values: T[]): T[] {
  return array.concat(values);
}

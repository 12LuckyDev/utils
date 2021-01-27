/**
 * Return array copy with added value 
 * @param array Original array
 * @param value Value to be added
 */
export const addValue = <T>(array: Array<T>, value: T): Array<T> => [...array, value];

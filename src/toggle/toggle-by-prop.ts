import { toggle } from './toggle';

/**
 * Returns array copy without values with specific properties value if it is contained, adds value otherwise
 * @param array Original array
 * @param key Property name of value to compare
 * @param propValue Value with which objects will be deleted
 * @returns Array copy with value toggled based on property match
 */
export function toggleByProp<T, K extends keyof T>(array: T[], key: K, value: T): T[] {
  return toggle(array, value, (el) => el[key] === value[key]);
}

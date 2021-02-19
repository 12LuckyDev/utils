/**
 * Check if value is object type excluding arrays
 * @param value value to check
 * @param canBeNull extra check if object can be null
 */
export const isObject = (value: unknown, canBeNull = true): boolean =>
  typeof value === 'object' && !Array.isArray(value) && (canBeNull || !!value);

/**
 * Check if value is array - Wrapped Array.isArray method
 * @param value value to check
 * @param canBeEmpty extra check if array can be empty
 */
export const isArray = (value: unknown, canBeEmpty = true): boolean =>
  Array.isArray(value) && (canBeEmpty || value.length > 0);

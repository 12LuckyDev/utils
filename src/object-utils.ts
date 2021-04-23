/**
 * Map array of objects to object
 * @param array Input array
 * @param key Key of value inside object that will be key of output object
 * @param includeKeyField Flag deciding if key should be included in object properties
 */
export const mapToObject = <T extends Record<string, unknown>, K extends keyof T>(
  array: T[],
  key: K,
  includeKeyField = false,
): Record<string, unknown> => {
  const result = {} as Record<string, unknown>;
  array.forEach((v) => {
    if (includeKeyField) {
      result[v[key] as string] = v;
    } else {
      const { [key]: keyProp, ...rest } = v;
      result[keyProp as string] = rest;
    }
  });
  return result;
};

/**
 * Map array of objects to object using handler function
 * @param array Input Array
 * @param key Key of value inside object that will be key of output object
 * @param handler Handler that returns prop for given key
 */
export const mapToObjectUsing = <T, K extends keyof T>(
  array: T[],
  key: K,
  handler: (value: T, index?: number, key?: K, arr?: T[]) => unknown,
): Record<string, unknown> => {
  const result = {} as Record<string, unknown>;
  array.forEach((v, i) => {
    const keyProp = `${v[key]}`;
    result[keyProp] = handler(v, i, key, array);
  });
  return result;
};

/**
 * Performs the specified action for each property in object
 * @param obj Input object
 * @param handler Handler with action
 */
export const forEachProp = (obj: Record<string, unknown>, handler: (prop?: unknown, key?: string) => void) => {
  Object.keys(obj).forEach((k) => handler(obj[k], k));
};

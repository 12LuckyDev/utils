/**
 * Creates a `Map` from an array using a property name or key selector function.
 * Optionally accepts a value selector to transform stored values.
 *
 * @param array Input array
 * @param key Property name or key selector function
 * @param valueFn Optional value selector function
 * @returns A `Map` where keys are derived from the specified property or key selector, and values are either the original items or transformed by the value selector.
 */
export function mappify<T, K extends keyof T>(array: T[], key: K): Map<T[K], T>;
export function mappify<T, K>(array: T[], keyFn: (item: T) => K): Map<K, T>;
export function mappify<T, K, R>(array: T[], keyFn: (item: T) => K, valueFn: (item: T) => R): Map<K, R>;
export function mappify<T, K extends keyof T, R>(
  array: T[],
  key: K | ((item: T) => string),
  valueFn?: (item: T) => R,
): Map<unknown, unknown> {
  return new Map<unknown, unknown>(
    array.map((el) => {
      const keyProp = typeof key === 'function' ? key(el) : el[key];
      const value = valueFn ? valueFn(el) : el;
      return [keyProp, value];
    }),
  );
}

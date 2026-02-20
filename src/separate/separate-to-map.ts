/**
 * Separates an array into a Map based on a provided key extractor function.
 * @param array Input array to be separated
 * @param keyExtractor function that extracts the key for each element in the array
 * @returns Map where each key corresponds to an array of elements that share the same key
 */
export function separateToMap<T, K>(array: T[], keyExtractor: (el: T) => K): Map<K, T[]> {
  const map = new Map<K, T[]>();

  array.forEach((el) => {
    const key = keyExtractor(el);
    const target = map.get(key) ?? [];
    if (!map.has(key)) {
      map.set(key, target);
    }
    target.push(el);
  });

  return map;
}

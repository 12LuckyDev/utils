export const separate = <T>(array: T[], rule: (el: T) => boolean): [a: T[], b: T[]] => {
  const a: T[] = [];
  const b: T[] = [];

  array.forEach((el) => {
    if (rule(el)) {
      a.push(el);
    } else {
      b.push(el);
    }
  });

  return [a, b];
};

export const multiSeparate = <T, K>(array: T[], keyExtractor: (el: T) => K): Map<K, T[]> => {
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
};

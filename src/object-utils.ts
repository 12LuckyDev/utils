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

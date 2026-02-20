/**
 * Separates an array into two arrays based on a provided rule.
 * @param array Input array
 * @param ruleFn Rule function that determines which array an element belongs to
 * @returns A tuple containing the two separated arrays
 */
export function separate<T>(array: T[], ruleFn: (el: T) => boolean): [a: T[], b: T[]] {
  const a: T[] = [];
  const b: T[] = [];

  array.forEach((el) => {
    if (ruleFn(el)) {
      a.push(el);
    } else {
      b.push(el);
    }
  });

  return [a, b];
}

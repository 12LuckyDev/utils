import { separate } from './separate';

/**
 * Find differences between two arrays based on a comparison function and an optional edit check function.
 * @param originalArray Array representing the original state of items.
 * @param currentArray Array representing the current state of items.
 * @param compare Function to compare items from both arrays to determine if they are the same.
 * @param editCheck Optional function to check if two items are considered edited (i.e., they are the same item but have different content).
 * @returns A tuple containing three pairs of arrays: [added, deleted], [currentRest, originalRest], and [currentEdited, originalEdited].
 * - added: Items that are present in currentArray but not in originalArray.
 * - deleted: Items that are present in originalArray but not in currentArray.
 * - currentRest: Items that are present in both arrays and are not edited.
 * - originalRest: Items that are present in both arrays and are not edited (same as currentRest).
 * - currentEdited: Items that are present in both arrays but are considered edited based on the editCheck function.
 * - originalEdited: Items that are present in both arrays but are considered edited based on the editCheck function (same as currentEdited).
 */
export function diff<T>(
  originalArray: T[],
  currentArray: T[],
  compare: (a: T, b: T) => boolean,
  editCheck?: (a: T, b: T) => boolean,
): [[T[], T[]], [T[], T[]], [T[], T[]]] {
  const deleted: T[] = [];
  const currentEdited: T[] = [];
  const originalEdited: T[] = [];
  const currentRest: T[] = [];
  const originalRest: T[] = [];

  const [added, restFromNew] = separate(currentArray, (a) => !originalArray.find((b) => compare(a, b)));

  originalArray.forEach((b) => {
    const existed = restFromNew.find((a) => compare(a, b));
    if (!existed) {
      deleted.push(b);
    } else if (editCheck && !editCheck(b, existed)) {
      currentEdited.push(existed);
      originalEdited.push(b);
    } else {
      currentRest.push(existed);
      originalRest.push(b);
    }
  });
  return [
    [added, deleted],
    [currentRest, originalRest],
    [currentEdited, originalEdited],
  ];
}

import { separate } from './array-separate-utils';

export const diff = <T>(
  originalArray: T[],
  currentArray: T[],
  compare: (a: T, b: T) => boolean,
  editCheck?: (a: T, b: T) => boolean,
): [[T[], T[]], [T[], T[]], [T[], T[]]] => {
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
};

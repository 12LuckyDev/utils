# @12luckydev/utils

[![npm (scoped)](https://img.shields.io/npm/v/@12luckydev/utils)](https://www.npmjs.com/package/@12luckydev/utils)

Few helper funtions to work with arrays without mutation.

## Install

```javascript
# using npm
npm i @12luckydev/utils

# using yarn
yarn add @12luckydev/utils
```

## Functions

### merge

```javascript
import { merge } from '@12luckydev/utils';

merge([1, 2, 3], [4, 5]); // result: [1,2,3,4,5]
```

### add

```javascript
import { add } from '@12luckydev/utils';

add([1, 2, 3], 4, 5); // result: [1,2,3,4,5]
```

### isInRange

```javascript
import { isInRange } from '@12luckydev/utils';

const array = [0, 1, 2, 3, 4, 5, 6, 7];
isInRange(array, 5); // result: true
```

### compare

```javascript
import { compare } from '@12luckydev/utils';

const array = [0, 1, 2, 3, 4, 5];
compare(array, [0, 1, 2, 3, 4, 5]); // result: true

const objArray = [
  { id: 1, value: 'value 1' },
  { id: 2, value: 'value 2' },
  { id: 3, value: 'value 3' },
];

compare(
  objArray,
  [
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
    { id: 4, value: 'value 4' },
  ],
  (elA, elB) => elA.id === elB.id,
); // result: true
```

### move, moveUp, moveDown

```javascript
import { move, moveUp, moveDown } from '@12luckydev/utils';

const array = ['a', 'b', 'c', 'd', 'e'];

move(array, 3, 1); // result: ['a', 'd', 'b', 'c', 'e']

moveUp(array, 2); // result: ['a', 'b', 'd', 'c', 'e']

moveDown(array, 2); // result: ['a', 'c', 'b', 'd', 'e']
```

### shift

```javascript
import { shift } from '@12luckydev/utils';

const array = ['a', 'b', 'c', 'd', 'e'];

shift(array, 1); // result: ['e', 'a', 'b', 'c', 'd']

shift(array, -1); // result: ['b', 'c', 'd', 'e', 'a']

shift(array, 1, false); // result: ['a', 'b', 'c', 'd']

shift(array, -1, false); // result: ['b', 'c', 'd', 'e']
```

### insertAt

```javascript
import { shift } from '@12luckydev/utils';

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
insertAt(array, 4, 10); // result: [0, 1, 2, 3, 10, 4, 5, 6, 7, 8]

insertAt(array, 4, [10, 11]); // result: [0, 1, 2, 3, 10, 11, 4, 5, 6, 7, 8]
```

### shuffle

```javascript
import { shuffle } from '@12luckydev/utils';

const array = ['a', 'b', 'c', 'd', 'e'];

shuffle(array); // result: ['e', 'b', 'a', 'c', 'd']

shuffle(array); // result: ['a', 'c', 'e', 'd', 'b']
```

### deshuffle

```javascript
import { deshuffle } from '@12luckydev/utils';

const array = [3, 1, 2];

deshuffle(array, [2, 0, 1]); // result: [1, 2, 3]
```

### reshuffle

```javascript
import { reshuffle } from '@12luckydev/utils';

const array = [1, 2, 3];

reshuffle(array); // result: [[3, 1, 2] , [2, 0, 1]]
reshuffle([3, 1, 2], [2, 0, 1]); // result: [[1, 2, 3] , [2, 0, 1]]
```

### editAt

```javascript
import { editAt } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

editAt(input, { id: 4, name: 'Ann' }, 1);
/**
    result: [
        {id: 1, name: "Kevin"},
        {id: 4, name: "Ann"},
        {id: 3, name: "Bob"}
]
**/
```

### editPropAt

```javascript
import { editPropAt } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

editPropAt(input, 'name', 'Angela', 2);
/**
    result: [
        { id: 1, name: 'Kevin' },
        { id: 2, name: 'Karen' },
        { id: 3, name: 'Angela' }
]
**/
```

### editByProp

```javascript
import { editByProp } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

editByProp(input, { id: 4, name: 'Ann' }, 'id', 2);
/**
    result: [
        {id: 1, name: "Kevin"},
        {id: 4, name: "Ann"},
        {id: 3, name: "Bob"}
]
**/
```

### remove

```javascript
import { remove } from '@12luckydev/utils';

remove(['a', 'b', 'c'], 'b'); // result ["a", "c"]
```

### toggle

```javascript
import { toggle } from '@12luckydev/utils';

toggle(['a', 'b', 'c'], 'b'); // result ["a", "c"]

toggle(['a', 'c'], 'b'); // result ['a', 'b', 'c']
```

### removeByProp

```javascript
import { toggleByProp } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

toggleByProp(input, 'name', { id: 2, name: 'Karen' });
/**
    result: [
        {id: 1, name: "Kevin"},
        {id: 3, name: "Bob"}
]
**/

toggleByProp(input, 'name', { id: 4, name: 'Iwan' });
/**
    result: [
       { id: 1, name: 'Kevin' },
       { id: 2, name: 'Karen' },
       { id: 3, name: 'Bob' },
       { id: 4, name: 'Iwan' }
]
**/
```

### removeAt

```javascript
import { removeAt } from '@12luckydev/utils';

removeAt(['a', 'b', 'c'], 1); // result ["a", "c"]
```

### popAt

```javascript
import { popAt } from '@12luckydev/utils';

popAt(['a', 'b', 'c'], 1); // result ["b", ["a", "c"]]
```

### removeByProp

```javascript
import { removeByProp } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

removeByProp(input, 'name', 'Karen');
/**
    result: [
        {id: 1, name: "Kevin"},
        {id: 3, name: "Bob"}
]
**/
```

### popByProp

```javascript
import { popByProp } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

popByProp(input, 'name', 'Karen');
/**
    result: [
      { id: 2, name: 'Karen' },
      [
        { id: 1, name: "Kevin" },
        { id: 3, name: "Bob" }
      ]
  ]
**/

popByProp(input, 'name', 'Karen', false);
/**
    result: [
      [{ id: 2, name: 'Karen' }],
      [
        { id: 1, name: "Kevin" },
        { id: 3, name: "Bob" }
      ]
  ]
**/
```

### removeByProps

```javascript
import { removeByProps } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

removeByProp(input, 'name', ['Karen', 'Bob']);
/**
    result: [{id: 1, name: "Kevin"}]
**/
```

### nMap

```javascript
import { nMap } from '@12luckydev/utils';

nMap(3, (i) => `${i} value`); //result: ["0 value", "1 value", "2 value"]
```

### to2D

```javascript
import { to2D } from '@12luckydev/utils';

to2D([1, 2, 3, 4]); //result: [[1, 2], [3, 4]]
```

### separate

```javascript
import { separate } from '@12luckydev/utils';

separate([1, 2, 3, 4, 5, 6], (el) => el < 4); //result: [[1, 2, 3], [4, 5, 6]]
```

### multiSeparate

```javascript
import { multiSeparate } from '@12luckydev/utils';

multiSeparate([1, 2, 3, 4, 5, 6, 7, 8, 9], (el) => el % 3); //result: [[1, 2, 3], [4, 5, 6]]

/**
 * Map:
 * 0 => [3, 6, 9]
 * 1 => [1, 4, 7]
 * 2 => [2, 5, 8]
 */
```

### mapToObject

```javascript
import { mapToObject } from '@12luckydev/utils';

const inputArray = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' },
];

mapToObject(inputArray, 'value');
/**
  result : {
    a: { id: 1 },
    b: { id: 2 },
    c: { id: 3 },
  }
 */
```

### mapToObjectUsing

```javascript
import { mapToObjectUsing } from '@12luckydev/utils';

const inputArray = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' },
];

mapToObjectUsing(inputArray, 'value', (v) => {
  return v.value;
});
/**
  result : {
    a: 'a',
    b: 'b',
    c: 'c',
  }
 */
```

### forEachProp

```javascript
import { forEachProp } from '@12luckydev/utils';
const input = { a: 1, b: 2, c: 3 };

forEachProp(input, (v) => console.log(v));
/**
  1
  2
  3
 */
```

## Changelog

[All changes are here](./CHANGELOG.md)

## License

MIT © [12LuckyDev](https://github.com/12LuckyDev)

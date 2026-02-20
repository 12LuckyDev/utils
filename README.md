# @12luckydev/utils

[![npm (scoped)](https://img.shields.io/npm/v/@12luckydev/utils)](https://www.npmjs.com/package/@12luckydev/utils)

Few helper funtions to work with arrays without mutation and more.

## Install

```javascript
# using npm
npm i @12luckydev/utils

# using yarn
yarn add @12luckydev/utils
```

## Usage

All utilities are available as named exports and can be imported directly from the main package entry:

```javascript
import { insertAt, remove, editAt, ArrayPipe } from '@12luckydev/utils';
```

# Non mutable array operation functions

## add

### insertAt

```javascript
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
insertAt(array, 4, 10); // result: [0, 1, 2, 3, 10, 4, 5, 6, 7, 8]
insertAt(array, 4, [10, 11]); // result: [0, 1, 2, 3, 10, 11, 4, 5, 6, 7, 8]
```

### merge

```javascript
merge([1, 2, 3], [4, 5]); // result: [1,2,3,4,5]
```

### push

```javascript
push([1, 2, 3], 4, 5); // result: [1,2,3,4,5]
```

## edit

### edit

```javascript
const input = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

edit(
  input,
  (el) => el.id === 2,
  (el) => ({ ...el, name: 'Bobby' }),
);
/**
    result: [
        {id: 1, name: "Alice"},
        {id: 2, name: "Bobby"},
        {id: 3, name: "Charlie"}
]
**/
```

### editAt

```javascript
const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

editAt(input, 1, { id: 4, name: 'Ann' });
/**
    result: [
        {id: 1, name: "Kevin"},
        {id: 4, name: "Ann"},
        {id: 3, name: "Bob"}
]
**/

editAt(input, (el) => ({..el, name: 'Lucy'}), 1);
/**
    result: [
        {id: 1, name: "Kevin"},
        {id: 2, name: "Lucy"},
        {id: 3, name: "Bob"}
]
**/
```

### editByProp

```javascript
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

## move

### move

```javascript
move(['a', 'b', 'c', 'd', 'e'], 3, 1); // result: ['a', 'd', 'b', 'c', 'e']
```

### moveUp

```javascript
moveUp(['a', 'b', 'c', 'd', 'e'], 2); // result: ['a', 'b', 'd', 'c', 'e']
```

### moveDown

```javascript
moveDown(['a', 'b', 'c', 'd', 'e'], 2); // result: ['a', 'c', 'b', 'd', 'e']
```

### shift

```javascript
const array = ['a', 'b', 'c', 'd', 'e'];

shift(array, 1); // result: ['e', 'a', 'b', 'c', 'd']

shift(array, -1); // result: ['b', 'c', 'd', 'e', 'a']

shift(array, 1, false); // result: ['a', 'b', 'c', 'd']

shift(array, -1, false); // result: ['b', 'c', 'd', 'e']
```

## pop

### pop

```javascript
pop(['a', 'b', 'c'], (el) => el === 'b'); // result ["b", ["a", "c"]]
pop(['a', 'b', 'c'], (el) => el === 'd'); // result [undefined, ["a", "b", "c"]]
```

### popAt

```javascript
popAt(['a', 'b', 'c'], 1); // result ["b", ["a", "c"]]
```

### popByProp

```javascript
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
```

## random

### shuffle

```javascript
const array = ['a', 'b', 'c', 'd', 'e'];

shuffle(array); // result: ['e', 'b', 'a', 'c', 'd']

shuffle(array); // result: ['a', 'c', 'e', 'd', 'b']
```

### deshuffle

```javascript
const array = [3, 1, 2];

deshuffle(array, [2, 0, 1]); // result: [1, 2, 3]
```

### reshuffle

```javascript
const array = [1, 2, 3];

reshuffle(array); // result: [[3, 1, 2] , [2, 0, 1]]
reshuffle([3, 1, 2], [2, 0, 1]); // result: [[1, 2, 3] , [2, 0, 1]]
```

## remove

### remove

```javascript
remove(['a', 'b', 'c'], 'b'); // result ["a", "c"]
remove(['a', 'b', 'c'], (el) => el === 'b'); // result ["a", "c"]
```

### removeAt

```javascript
removeAt(['a', 'b', 'c'], 1); // result ["a", "c"]
```

### removeByProp

```javascript
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

## toggle

### toggle

```javascript
toggle(['a', 'b', 'c'], 'b'); // result ["a", "c"]

toggle(['a', 'c'], 'b'); // result ['a', 'b', 'c']
```

### toggleByProp

```javascript
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

# Other array operation functions

## common

### compare

```javascript
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

### nMap

```javascript
nMap(3, (i) => `${i} value`); //result: ["0 value", "1 value", "2 value"]
```

## dimension

### to2D

```javascript
to2D([1, 2, 3, 4]); //result: [[1, 2], [3, 4]]
```

## separate

### separate

```javascript
separate([1, 2, 3, 4, 5, 6], (el) => el < 4); //result: [[1, 2, 3], [4, 5, 6]]
```

### multiSeparate

```javascript
multiSeparate([1, 2, 3, 4, 5, 6, 7, 8, 9], (el) => el % 3);

/**
 * Map:
 * 0 => [3, 6, 9]
 * 1 => [1, 4, 7]
 * 2 => [2, 5, 8]
 */
```

### mappify

```javascript
const inputArray = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' },
];

mappify(inputArray, 'id');

/**
 * Map:
 * 1 => { id: 1, value: 'a' }
 * 2 => { id: 2, value: 'b' }
 * 3 => { id: 3, value: 'c' }
 */
```

### diff

```javascript
const inputArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result1 = diff(inputArray1, [2, 3, 4, 10], (a, b) => a === b);

/**
  result1: [
  // [added, removed] 
    [ [ 10 ], [ 1, 5, 6, 7, 8, 9 ] ],
  // [the same from new array, from input array]
    [ [ 2, 3, 4 ], [ 2, 3, 4 ] ],
  // [edited from new array, from input array] - no given editCheck func - so empty
    [ [], [] ]
  ]
 */

const inputArray = [
  { id: 1, v: '1' },
  { id: 2, v: '2' },
  { id: 3, v: '3' },
  { id: 4, v: '4' },
  { id: 5, v: '5' },
];

const result2 = diff(
  inputArray,
  [
    { id: 2, v: '2' },
    { id: 3, v: '3.1' },
    { id: 4, v: '4' },
    { id: 6, v: '6' },
  ],
  (a, b) => a.id === b.id,
  (a, b) => a.v === b.v,
);

/**
  result2: [
  // [added, removed] 
   [ { id: 6, v: '6' } ], [ { id: 1, v: '1' }, { id: 5, v: '5' } ] ],
  // [the same from new array, from input array]
   [ [ { id: 2, v: '2' }, { id: 4, v: '4' } ], [ { id: 2, v: '2' }, { id: 4, v: '4' } ]],
  // [edited from new array, from input array]
   [ [ { id: 3, v: '3.1' } ], [ { id: 3, v: '3' } ] ]
 */
```

## range

### isInRange

```javascript
const array = [0, 1, 2, 3, 4, 5, 6, 7];
isInRange(array, 5); // result: true
isInRange(array, 10); // result: false
```

### areInRange

```javascript
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

areInRange(array, [0, 4, 7]); // result: true
areInRange(array, [-1, 0, 4, 10]); // result: false
areInRange(array, [-1, 0, 4, 10], false); // result: true
areInRange(array, [-1, 10], false); // result: true
```

# Other helpers funtions

## resolve

### resolveValue

```javascript
resolveValue(10, 11); // result: 10
resolveValue((el) => el + 2, 11); // result: 13
```

### resolveArray

```javascript
resolveArray(10); // result: [10]
resolveArray([10]); // result: [10]
```

## ArrayPipe

Available utils operations:

- add: `insertAt` `merge` `push`
- edit: `edit` `editAt` `editByProp`
- move: `move` `moveDown` `moveUp` `shift`
- random: `shuffle`
- remove: `remove` `removeAt` `removeByProp`
- toggle: `toggle` `toggleByProp`

```javascript
new ArrayPipe([1, 2, 3]).push(4, 5).insertAt(0, 0).result(); // result: [0, 1, 2, 3, 4, 5]
```

## StringBuilder

```javascript
new StringBuilder().appendLine('aaa').appendLine('bbb').toString(); // result: 'aaa\nbbb\n'
new StringBuilder('aaa', 'bbb').append('ccc', 'ddd').toString(); // result: 'aaabbbcccddd'
```

# Changelog

[All changes are here](./CHANGELOG.md)

# License

MIT © [12LuckyDev](https://github.com/12LuckyDev)

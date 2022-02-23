# @12luckydev/utils

[![npm (scoped)](https://img.shields.io/npm/v/@12luckydev/utils)](https://www.npmjs.com/package/@12luckydev/utils)

Few helper funtions to work with arrays without mutation.
Helpful with managing arrays in react.js state.

## Install

```sh
# using npm
npm i @12luckydev/utils

# using yarn
yarn add @12luckydev/utils
```

## Functions

### merge

```sh
import { merge } from '@12luckydev/utils';

merge([1, 2, 3], [4, 5]); // result: [1,2,3,4,5]
```

### add

```sh
import { add } from '@12luckydev/utils';

add([1, 2, 3], 4, 5); // result: [1,2,3,4,5]
```

### isInRange

```sh
import { isInRange } from '@12luckydev/utils';

const array = [0, 1, 2, 3, 4, 5, 6, 7];
isInRange(array, 5); // result: true
```

### move, moveUp, moveDown

```sh
import { move, moveUp, moveDown } from '@12luckydev/utils';

const array = ['a', 'b', 'c', 'd', 'e'];

move(array, 3, 1); // result: ['a', 'd', 'b', 'c', 'e']

moveUp(array, 2); // result: ['a', 'b', 'd', 'c', 'e']

from(array, 2); // result: ['a', 'c', 'b', 'd', 'e']

```

### editAt

```sh
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

```sh
import { editPropAt } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

editPropAt(input, 'name', 'Angela', 2)
/**
    result: [
        { id: 1, name: 'Kevin' },
        { id: 2, name: 'Karen' },
        { id: 3, name: 'Angela' }
]
**/
```

### editByProp

```sh
import { editByProp } from '@12luckydev/utils';

const input = [
  { id: 1, name: 'Kevin' },
  { id: 2, name: 'Karen' },
  { id: 3, name: 'Bob' },
];

editByProp(input, { id: 4, name: 'Ann' }, 'id', 2)
/**
    result: [
        {id: 1, name: "Kevin"},
        {id: 4, name: "Ann"},
        {id: 3, name: "Bob"}
]
**/
```

### remove

```sh
import { remove } from '@12luckydev/utils';

remove(['a', 'b', 'c'], 'b'); // result ["a", "c"]
```

### toggle

```sh
import { toggle } from '@12luckydev/utils';

toggle(['a', 'b', 'c'], 'b'); // result ["a", "c"]

toggle(['a', 'c'], 'b'); // result ['a', 'b', 'c']


```

### removeByProp

```sh
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

```sh
import { removeAt } from '@12luckydev/utils';

removeAt(['a', 'b', 'c'], 1); // result ["a", "c"]
```

### popAt

```sh
import { popAt } from '@12luckydev/utils';

popAt(['a', 'b', 'c'], 1); // result ["b", ["a", "c"]]
```

### removeByProp

```sh
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

```sh
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

```sh
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

```sh
import { nMap } from '@12luckydev/utils';

nMap(3, (i) => `${i} value`); //result: ["0 value", "1 value", "2 value"]
```

### isObject

```sh
import { isObject } from '@12luckydev/utils';

isObject(null); //result: true
isObject({}); //result: true
isObject(null, false); //result: false
isObject({}, false); //result: true
isObject([]); //result: false - arrays are excluded
```

### isArray

```sh
import { isArray } from '@12luckydev/utils';

isArray(null); //result: false
isArray({}); //result: false
isArray([]); //result: true
isArray(["a", "b"]); //result: true
isArray([], false); //result: false
isArray(["a", "b"], false); //result: true
```

### isFunc

```sh
import { isFunc } from '@12luckydev/utils';

isFunc(() => console.log("Hello")); //result: true
isFunc({}); //result: false
```

### mapToObject

```sh
import { mapToObject } from '@12luckydev/utils';

const inputArray = [
    { id: 1, value: 'a' },
    { id: 2, value: 'b' },
    { id: 3, value: 'c' },
  ];

mapToObject(inputArray, 'value')
/**
  result : {
    a: { id: 1 },
    b: { id: 2 },
    c: { id: 3 },
  }
 */
```

### mapToObjectUsing

```sh
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

```sh
import { forEachProp } from '@12luckydev/utils';
const input = { a: 1, b: 2, c: 3 };

forEachProp(input, (v) => console.log(v));
// result (console): 1, 2, 3
```

## License

MIT © [12LuckyDev](https://github.com/12LuckyDev)

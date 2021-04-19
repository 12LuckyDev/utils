# @12luckydev/utils

[![npm (scoped)](https://img.shields.io/npm/v/@12luckydev/utils)](https://www.npmjs.com/package/@12luckydev/utils)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@12luckydev/utils)](https://github.com/12LuckyDev)

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

### removeAt

```sh
import { removeAt } from '@12luckydev/utils';

removeAt(['a', 'b', 'c'], 1); // result ["a", "c"]
```

### popByIndex

```sh
import { popByIndex } from '@12luckydev/utils';

popByIndex(['a', 'b', 'c'], 1); // result ["b", ["a", "c"]]
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

## License

MIT © [12LuckyDev](https://github.com/12LuckyDev)

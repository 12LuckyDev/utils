# @12luckydev/utils

[![npm (scoped)](https://img.shields.io/npm/v/@12luckydev/utils)](https://www.npmjs.com/package/@12luckydev/utils)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@12luckydev/utils)](https://github.com/12LuckyDev)

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

### removeAt

```sh
import { removeAt } from '@12luckydev/utils';

removeAt(['a', 'b', 'c'], 1); // result ["a", "c"]
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

## License

MIT © [12LuckyDev](https://github.com/12LuckyDev)

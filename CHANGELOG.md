# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2026-02-20

### Added

- added overload for `mappify` supporting key selector function `(item: T) => K`.
- added overload for `mappify` supporting value selector function `(item: T) => R`, returning `Map<K, R>`.
- added `resolveArray` func.
- added `pop` func.
- added `edit` func.
- added `ArrayPipe` class.
- added `StringBuilder` class.
- added `areInRange` func.

### Changed

- all utils are now `funtions` instead of `() => {}`.
- missing @returns in utils funtions comments added.
- README.md has been started to be completed.
- renamed `multiSeparate` to `separateToMap` (functionality unchanged).
- renamed `add` to `push` (functionality unchanged) for consistency with JavaScript’s Array.prototype.push, since the method semantically appends an item to the end (while remaining non-mutating). Now it's using `Array.concat` inside.
- `merge` now accepts multiple arrays as rest parameters instead of only two arrays.
- `move`, `moveUp` & `moveDown` now check if given indexes are in range - if not, it will return the original array reference.
- `remove` returns the original array reference when it finds no element to remove. It now also accepts a comparison function and has a new optional parameter `single`, which specifies whether it removes one or multiple elements.
- `removeByProp` returns the original array reference when it finds no element to remove. It now also accepts new optional parameter `single`, which specifies whether it removes one or multiple elements.
- `popAt` returns `undefined` and the original array reference when it finds no element to remove.
- `popByProp` no longer accept `singleValue` params. No it's always pop one element. Use `separate` or `separateToMap` instead.
- `popByProp`returns `undefined` and the original array reference when it finds no element to remove.
- change order of params for `editAt`. Now it accept `editAt(array, index, value)` instead of `editAt(array, value, index)`
- `editByProp` when it does not find an element to change, it returns the original array reference.
- change order of params for `editByProp`. Now it accept `editByProp(array, key, value)` or `editByProp(array, key, propValue, value)` instead of `editAt(array, value, index)`. It's alsol has a new optional parameter `single`, which specifies whether it edit one or multiple elements.
- `editByProp` can now accept resolve functions as value.

### Removed

- `forEachProp` has been removed. Use `for (const k in obj)` instead.
- `mapToObject` has been removed. Use `mappify` instead.
- `mapToObjectUsing` has been removed. Use `mappify` with `valueFn` param instead.
- `removeByProps` has been removed. Use `remove` with `ruleFn` and `single` param set to `false` instead.
- `editPropAt` has been removed. Use `edit` or `editAt` instead.

## [2.7.0] - 2025-10-22

### Added

- added `resolveValue` func.

### Changed

- `editAt` & `editPropAt` now check if given index are in range - if not, it will return the original array reference.
- `editAt` now accept updater func as value too.
- `editPropAt` now use editAt with updater func inside.

## [2.6.0] - 2025-10-22

### Added

- added `diff` func.

### Changed

- `removeAt` now accept array of indexes too.
- `removeAt` now check if given index(es) are in range - if not, it will return the original array reference.

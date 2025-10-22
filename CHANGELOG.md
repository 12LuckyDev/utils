# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- added `resolveValue` func

### Changed

- `editAt` & `editPropAt` now check if given index are in range - if not, it will return the original array reference
- `editAt` now accept updater func as value too
- `editPropAt` now use editAt with updater func inside

## [2.6.0] - 2025-10-22

### Added

- added `diff` func

### Changed

- `removeAt` now accept array of indexes too.
- `removeAt` now check if given index(es) are in range - if not, it will return the original array reference

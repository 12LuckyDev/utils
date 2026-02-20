import { insertAt, merge, push } from '../add';
import { edit, editAt, editByProp } from '../edit';
import { move, moveDown, moveUp, shift } from '../move';
import { shuffle } from '../random';
import { remove, removeAt, removeByProp } from '../remove';
import { toggle, toggleByProp } from '../toggle';

/**
 * Class that allows to chain unmutable operations on array
 */
export class ArrayPipe<T> {
  private operations: ((array: T[]) => T[])[] = [];

  constructor(private readonly array: T[]) {
    this.array = [...array];
  }

  // #region add

  public insertAt(index: number, value: T | T[]): this {
    this.addOperation((array) => insertAt(array, index, value));
    return this;
  }

  public merge(...arrays: T[][]): this {
    this.addOperation((array) => merge(array, ...arrays));
    return this;
  }

  public push(...values: T[]): this {
    this.addOperation((array) => push(array, ...values));
    return this;
  }

  // #endregion
  // #region edit

  public editAt(index: number | number[], value: T | ((el: T) => T)): this {
    this.addOperation((array) => editAt(array, index, value));
    return this;
  }

  public editByProp<K extends keyof T>(key: K, value: T, single?: boolean): this;
  public editByProp<K extends keyof T>(key: K, propValue: T[K], value: T | ((el: T) => T), single?: boolean): this;
  public editByProp<K extends keyof T>(
    key: K,
    param1: T[K] | T | ((el: T) => T),
    param2?: T | ((el: T) => T) | boolean,
    param3?: boolean,
  ): this {
    if (param2 === undefined || typeof param2 === 'boolean') {
      this.addOperation((array) =>
        editByProp(array, key, param1 as T[K], param2 as T | ((el: T) => T), param3 ?? true),
      );
    } else {
      this.addOperation((array) => editByProp(array, key, param1 as T, (param2 as boolean) ?? true));
    }
    return this;
  }

  public edit(ruleFn: (el: T, i: number) => boolean, value: T | ((el: T) => T), single: boolean = true): this {
    this.addOperation((array) => edit(array, ruleFn, value, single));
    return this;
  }

  // #endregion
  // #region move

  public moveDown(index: number): this {
    this.addOperation((array) => moveDown(array, index));
    return this;
  }

  public moveUp(index: number): this {
    this.addOperation((array) => moveUp(array, index));
    return this;
  }

  public move(from: number, to: number): this {
    this.addOperation((array) => move(array, from, to));
    return this;
  }

  public shift(offset: number, circual = true): this {
    this.addOperation((array) => shift(array, offset, circual));
    return this;
  }

  // #endregion
  // #region random

  public shuffle(): this {
    this.addOperation((array) => shuffle(array));
    return this;
  }

  // #endregion
  // #region remove

  public removeAt(index: number | number[]): this {
    this.addOperation((array) => removeAt(array, index));
    return this;
  }

  public removeByProp<K extends keyof T>(key: K, propValue: T[K], single: boolean = true): this {
    this.addOperation((array) => removeByProp(array, key, propValue, single));
    return this;
  }

  public remove(value: T, single?: boolean): this;
  public remove(ruleFn: (el: T, i: number) => boolean, single?: boolean): this;
  public remove(value: T | ((el: T, i: number) => boolean), single: boolean = true): this {
    if (typeof value === 'function') {
      this.addOperation((array) => remove(array, value as (el: T, i: number) => boolean, single));
    } else {
      this.addOperation((array) => remove(array, value, single));
    }
    return this;
  }

  // #endregion
  // #region toggle

  public toggleByProp<K extends keyof T>(key: K, value: T): this {
    this.addOperation((array) => toggleByProp(array, key, value));
    return this;
  }

  public toggle(value: T, ruleFn?: (el: T, i: number) => boolean): this {
    this.addOperation((array) => toggle(array, value, ruleFn));
    return this;
  }

  // #endregion

  public update(updateFn: (array: T[]) => T[]) {
    this.addOperation(updateFn);
    return this;
  }

  public result(): T[] {
    return this.operations.reduce((array, op) => op(array), this.array);
  }

  private addOperation(operation: (array: T[]) => T[]): void {
    this.operations.push(operation);
  }
}

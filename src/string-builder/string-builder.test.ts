import { describe, expect, it } from 'vitest';
import { StringBuilder } from './string-builder';

describe('StringBuilder', () => {
  it('should create an instance of ArrayPipe', () => {
    const sb = new StringBuilder();
    expect(sb).toBeInstanceOf(StringBuilder);
  });

  it('should build empty string', () => {
    expect(new StringBuilder().toString()).toBe('');
  });

  it('should build one line string based on contructor', () => {
    expect(new StringBuilder('aaa').toString()).toBe('aaa');
  });

  it('should build one line string', () => {
    expect(new StringBuilder().append('aaa').toString()).toBe('aaa');
  });

  it('should build two line string', () => {
    expect(new StringBuilder().appendLine('aaa').appendLine('bbb').toString()).toBe('aaa\nbbb\n');
  });

  it('should build two line string with first line build of two parts', () => {
    expect(new StringBuilder().append('aaa').appendLine('bbb').appendLine('ccc').toString()).toBe('aaabbb\nccc\n');
  });

  it('should build one line string from multiple params', () => {
    expect(new StringBuilder().append('aaa', 'bbb', 'ccc', 'ddd').toString()).toBe('aaabbbcccddd');
  });

  it('should build one line based on contructor and append', () => {
    expect(new StringBuilder('aaa', 'bbb').append('ccc', 'ddd').toString()).toBe('aaabbbcccddd');
  });

  it('should build one line string from numbers', () => {
    expect(new StringBuilder(0).append(1, 2, 3).toString()).toBe('0123');
  });

  it('should build one line string from combinations of strings and numbers', () => {
    expect(new StringBuilder('zero').append(1, '2', 3, 'four').toString()).toBe('zero123four');
  });
});

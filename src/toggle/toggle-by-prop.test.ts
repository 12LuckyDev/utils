import { expect, test } from 'vitest';
import { toggleByProp } from './toggle-by-prop';

test('TESTING toggleByProp func', () => {
  const input = [
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ];

  const removed = toggleByProp(input, 'id', { id: 2, value: 'value 2' });
  expect(removed).toEqual([
    { id: 1, value: 'value 1' },
    { id: 3, value: 'value 3' },
  ]);

  const added = toggleByProp(removed, 'id', { id: 2, value: 'value 2' });
  expect(added).toEqual([
    { id: 1, value: 'value 1' },
    { id: 3, value: 'value 3' },
    { id: 2, value: 'value 2' },
  ]);

  expect(input).toEqual([
    { id: 1, value: 'value 1' },
    { id: 2, value: 'value 2' },
    { id: 3, value: 'value 3' },
  ]);
});

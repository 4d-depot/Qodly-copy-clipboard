import { describe, expect, it, vi } from 'vitest';

import { copyStringSourceValue } from './copyStringSourceValue';

describe('copyStringSourceValue', () => {
  it.each([
    ['page source', 'string', 'page value'],
    ['shared page source', 'string', 'shared value'],
    ['an entity attribute', 'string', 'entity value'],
    ['an object attribute', 'string', 'object value'],
  ])('copies a non-empty string from %s', (_sourceKind, dataType, value) => {
    const copy = vi.fn();

    copyStringSourceValue(dataType, value, copy);

    expect(copy).toHaveBeenCalledOnce();
    expect(copy).toHaveBeenCalledWith(value);
  });

  it.each([undefined, null, 'number', 'boolean', 'entity', 'object'])(
    'does not copy when the source type is %s',
    (dataType) => {
      const copy = vi.fn();

      copyStringSourceValue(dataType, 'value', copy);

      expect(copy).not.toHaveBeenCalled();
    },
  );

  it.each(['', null, undefined, 0, false])('does not copy the value %s', (value) => {
    const copy = vi.fn();

    copyStringSourceValue('string', value, copy);

    expect(copy).not.toHaveBeenCalled();
  });

  it('copies whitespace because it is not an empty string', () => {
    const copy = vi.fn();

    copyStringSourceValue('string', '   ', copy);

    expect(copy).toHaveBeenCalledWith('   ');
  });
});

import { describe, expect, it, vi } from 'vitest';
import { withMinDuration } from './with-min-duration';

describe('withMinDuration', () => {
  it('returns the result of the function', async () => {
    vi.useFakeTimers();

    const fn = vi.fn().mockResolvedValue('result');

    const promise = withMinDuration(fn, 1000);

    await vi.advanceTimersByTimeAsync(1000);

    await expect(promise).resolves.toBe('result');
    expect(fn).toHaveBeenCalledOnce();
  });

  it('waits at least the minimum duration', async () => {
    vi.useFakeTimers();

    const fn = vi.fn().mockResolvedValue('result');

    const promise = withMinDuration(fn, 1000);

    await vi.advanceTimersByTimeAsync(999);

    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    await Promise.resolve();

    expect(resolved).toBe(false);

    await vi.advanceTimersByTimeAsync(1);

    await expect(promise).resolves.toBe('result');

    vi.useRealTimers();
  });

  it('does not wait longer than necessary when fn takes longer', async () => {
    vi.useFakeTimers();

    const fn = vi.fn(
      () =>
        new Promise<string>((resolve) => {
          setTimeout(() => resolve('result'), 2000);
        }),
    );

    const promise = withMinDuration(fn, 1000);

    await vi.advanceTimersByTimeAsync(1000);

    let resolved = false;
    promise.then(() => {
      resolved = true;
    });

    await Promise.resolve();

    expect(resolved).toBe(false);

    await vi.advanceTimersByTimeAsync(1000);

    await expect(promise).resolves.toBe('result');

    vi.useRealTimers();
  });

  it('propagates error from fn', async () => {
    vi.useFakeTimers();

    const error = new Error('Something went wrong');
    const fn = vi.fn().mockRejectedValue(error);

    const promise = withMinDuration(fn, 1000);

    const assertion = expect(promise).rejects.toBe(error);

    await vi.advanceTimersByTimeAsync(1000);

    await assertion;
  });
});

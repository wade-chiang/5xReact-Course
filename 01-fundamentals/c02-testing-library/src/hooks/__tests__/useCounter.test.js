import { renderHook, act } from '@testing-library/react';
import useCounter from '../useCounter';

describe('useCounter', () => {
  test('should increment counter from default initial value', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.onIncrement();
    });
    expect(result.current.count).toBe(1);
  });

  test('should increment counter from custom initial value', () => {
    const { result } = renderHook(() => useCounter(9527));
    act(() => {
      result.current.onIncrement();
    });
    expect(result.current.count).toBe(9528);
  });

  test('should reset counter to updated initial value', async () => {
    const { result, rerender } = renderHook(
      (initialValue) => {
        return useCounter(initialValue);
      },
      { initialProps: 0 },
    );

    expect(result.current.count).toBe(0);

    rerender(10);
    act(() => {
      result.current.onReset();
    });
    expect(result.current.count).toBe(10);
  });
});

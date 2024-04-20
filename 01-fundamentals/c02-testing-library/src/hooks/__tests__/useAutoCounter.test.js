import { renderHook, act } from '@testing-library/react';
import useAutoCounter from '../useAutoCounter';

describe('useAutoCounter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.clearAllMocks();
    vi.useRealTimers();
  });

  it('should display correct value', () => {
    const { result } = renderHook(() => useAutoCounter());
    expect(result.current.count).toBe(0);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(result.current.count).toBe(5);
  });

  it('should stop counter when call onStop', () => {
    const { result } = renderHook(() => useAutoCounter());
    act(() => {
      vi.advanceTimersByTime(2000);
      result.current.onStop();
    });
    expect(result.current.count).toBe(2);
  });

  it('should reset counter when call onReset', () => {
    const { result } = renderHook(() => useAutoCounter());
    act(() => {
      vi.advanceTimersByTime(2000);
      result.current.onReset();
      vi.advanceTimersByTime(3000);
    });
    expect(result.current.count).toBe(3);
  });
});

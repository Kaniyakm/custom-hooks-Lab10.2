// useDebounce.ts
// -------------------------------------------------------------
// Custom Hook: useDebounce
// Purpose:
//   - Accepts a value and a delay (ms).
//   - Returns a "debounced" version of the value.
//   - The returned value only updates AFTER the delay passes.
//
// Why this hook exists:
//   - Useful for search bars, API calls, filtering, etc.
//   - Prevents rapid updates while the user is typing.
// -------------------------------------------------------------

import { useState, useEffect } from "react";

export const useDebounce = <T,>(value: T, delay: number): T => {
  // Store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Start a timer that updates the debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup: cancel the timer if value changes before delay finishes
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

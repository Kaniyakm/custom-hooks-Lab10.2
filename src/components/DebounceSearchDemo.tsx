// DebounceSearchDemo.tsx
// -------------------------------------------------------------
// This component demonstrates how to use the useDebounce hook.
// Steps:
//   1. Track the user's raw input.
//   2. Pass the input into useDebounce with a delay.
//   3. Display the debounced value (updates only after delay).
// -------------------------------------------------------------

import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export const DebounceSearchDemo = () => {
  // Track the user's immediate input
  const [search, setSearch] = useState("");

  // Debounce the input by 500ms
  const debouncedValue = useDebounce(search, 500);

  return (
    <div>
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        placeholder="Type to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* This value updates only after the debounce delay */}
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};

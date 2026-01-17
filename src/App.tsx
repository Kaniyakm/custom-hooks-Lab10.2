// App.tsx
// Main entry point that renders both custom hook demos.

import { PaginationDemo } from "./components/PaginationDemo";
import { DebounceSearchDemo } from "./components/DebounceSearchDemo";

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto" }}>
      <PaginationDemo />
      <DebounceSearchDemo />
    </div>
  );
}

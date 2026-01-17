// src/components/PaginationDemo.tsx
import React from "react";
import { usePagination } from "../hooks/usePagination";

export const PaginationDemo = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const { currentPage, totalPages, currentItems, nextPage, prevPage } =
    usePagination(items, 5);

  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2>Pagination Demo</h2>

      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>

      <span style={{ margin: "0 1rem" }}>
        Page {currentPage} of {totalPages}
      </span>

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

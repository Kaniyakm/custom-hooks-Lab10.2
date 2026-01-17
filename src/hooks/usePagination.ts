// usePagination.ts
// -------------------------------------------------------------
// Custom Hook: usePagination
// Purpose:
//   - Accepts a list of items and a number of items per page.
//   - Manages pagination logic (current page, next/prev, slicing).
//   - Returns the items for the current page and navigation helpers.
//
// Why this hook exists:
//   - Pagination logic is reusable across many components.
//   - Instead of rewriting page state + slicing logic each time,
//     we encapsulate it in a custom hook.
// -------------------------------------------------------------

import { useState } from "react";

export const usePagination = <T,>(items: T[], itemsPerPage: number) => {
  // Track which page the user is currently on
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages based on item count
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate which items belong to the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  // Move forward one page (but never past the last page)
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Move backward one page (but never before page 1)
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Expose pagination state + helpers to the component
  return {
    currentPage,
    totalPages,
    currentItems,
    nextPage,
    prevPage,
  };
};

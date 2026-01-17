// src/main.tsx

/*
  This is the entry point of the React application.
  Vite loads THIS file first, not App.tsx.
  Whatever component is imported here is what appears in the browser.
*/

import React from "react";
import ReactDOM from "react-dom/client";

// Import your App component — THIS MUST MATCH YOUR FILE NAME EXACTLY
import App from "./App.tsx";

// Import global styles (optional, but Vite includes this by default)
import "./index.css";

// Create the root React node and render the App component inside it
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

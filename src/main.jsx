import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./Components/DataProvider/DataProvider"; // ✅ Use default import
import { initialstate, reducer } from "./utility/reducer";

createRoot(document.getElementById("root")).render(
  <DataProvider reducer={reducer} initialstate={initialstate}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);

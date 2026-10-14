import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import ExpenseContext from "./context/ExpenseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExpenseContext>
      <App />
    </ExpenseContext>
  </StrictMode>,
);

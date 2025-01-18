import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Layout from "./Layout/Layout.jsx";
import ThemeProvider from "./Context/ThemeContext.jsx";
import { NameProvider } from "./Context/NameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <NameProvider>
          <Layout>
            <App />
          </Layout>
        </NameProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

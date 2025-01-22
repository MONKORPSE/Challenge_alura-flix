import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import GlobalStyles from "./Styles/GlobalStyles";
import theme from "./Styles/Theme";
import { VideoProvider } from "./Contexts/VideoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <VideoProvider>
          <GlobalStyles />
          <AppRoutes />
        </VideoProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

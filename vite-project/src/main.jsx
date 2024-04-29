import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import { LangContextProvider } from "./context/LangContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);

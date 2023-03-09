import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);

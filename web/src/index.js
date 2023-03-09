import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import "./style/style.css";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

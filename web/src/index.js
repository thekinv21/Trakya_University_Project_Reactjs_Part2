import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import "./style/style.css";
import { store } from "./store/store";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

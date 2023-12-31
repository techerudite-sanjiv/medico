import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import configureStore from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();
global.reduxStore=store;

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

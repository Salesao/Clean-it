import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/config";
import { Provider, } from "react-redux";
import { DataProvider } from "./components/ContentPage/Registration/RegJoinTeam/DataContext";

const Global = createGlobalStyle`

`;

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
      <Router>
        <Global />
        <App />
      </Router>
      </DataProvider>
    </Provider>
    </React.StrictMode>,
  document.getElementById("root")
);

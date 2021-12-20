import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Myprovider } from "./store/context";
import ScrollToTop from "./components/scrolling/Scroll";
ReactDOM.render(
  <BrowserRouter>
    <Myprovider>
      <ScrollToTop />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Myprovider>
  </BrowserRouter>,
  document.getElementById("root")
);

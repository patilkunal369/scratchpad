import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { GlobalStyles } from "./components/styles/globalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Auth from "./pages/Auth";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import { AnimatePresence } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import RegisterWithInvite from "./components/RegisterWithInvite";
import { GlobalStyles } from "./components/styles/globalStyles";
import { store } from "./store/store";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/*" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/invite" element={<RegisterWithInvite />} />
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>
        <AnimatedRoutes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

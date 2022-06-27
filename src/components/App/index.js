import { AnimatePresence } from "framer-motion";
import Modal from "react-modal/lib/components/Modal";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useUserSelector } from "../../store/reducers/user";
import Header from "../Header";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import { routes } from "./routes";

const GridContainer = styled.div`
  display: grid;

  grid-template-columns: min-content 1fr;
  grid-template-rows: min-content 1fr;
  height: 100vh;
`;

const MainContainer = styled.main`
  overflow: hidden;
  position: relative;
`;

const ProtectedRoutes = ({ needsAuth, children }) => {
  const { isAuthenticated } = useUserSelector();

  if (needsAuth && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {routes.map(
          ({ path, component: Component, needsAuth, ...rest }, index) => {
            return (
              <Route
                key={index}
                path={path}
                element={
                  <ProtectedRoutes needsAuth={needsAuth}>
                    <Component />
                  </ProtectedRoutes>
                }
              />
            );
          }
        )}
      </Routes>
    </AnimatePresence>
  );
};

Modal.setAppElement("#root");

const App = () => {
  return (
    <GridContainer>
      <Navbar />
      {/* <TopBar /> */}
      <Header />

      <MainContainer>
        <AnimatedRoutes />
      </MainContainer>
    </GridContainer>
  );
};

export default App;

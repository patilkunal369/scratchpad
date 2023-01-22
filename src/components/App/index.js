import { AnimatePresence, motion } from "framer-motion";
import Modal from "react-modal/lib/components/Modal";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useUserSelector } from "../../store/reducers/user";
import Header from "../Header";
import Navbar from "../Navbar";
import { routes } from "./routes";

const GridContainer = styled(motion.div)`
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

const gridVariant = {
  initial: { x: "100vw", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,

    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const App = () => {
  const location = useLocation();

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        transition={Slide}
      />
      <GridContainer
        variants={location.state?.prevPath && gridVariant}
        initial="initial"
        animate="animate"
      >
        <Navbar />
        <Header />
        <MainContainer>
          <AnimatedRoutes />
        </MainContainer>
      </GridContainer>
    </>
  );
};

export default App;

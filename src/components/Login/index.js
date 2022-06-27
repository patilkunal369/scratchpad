import LoadingButton from "@mui/lab/LoadingButton";
import Alert from "@mui/material/Alert";
import { ErrorMessage, Formik } from "formik";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, useLoginSelector } from "../../store/reducers/user";
import { API_STATUS } from "../../utils/constants";
import FormError from "../common/Form/FormError";
import Input from "../common/Form/Input";
import PasswordInput from "../common/Form/PasswordInput";
import Logo from "../Navbar/Logo";
import { LoginFormWrapper, loginVariant, LoginWrapper } from "./Login.styles";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useLoginSelector();

  const onSubmit = ({ email, password }, { setSubmitting }) => {
    dispatch(loginUser({ email, password })).then(() => setSubmitting(false));
  };

  const validate = ({ email, password }) => {
    const errors = {};

    if (!email) {
      errors.email = "Required";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Required";
    }

    return errors;
  };

  const initialValues = {
    email: "bruno@email.com",
    password: "bruno",
  };

  useEffect(() => {
    if (status === API_STATUS.FULFILLED) {
      navigate("/");
    }
  }, [status]);

  return (
    <LoginWrapper
      variants={loginVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={validate}
      >
        {(formik) => (
          <>
            <LoginFormWrapper>
              <div className="header">
                <Logo size="5rem" />
                <h3>Enter your details below.</h3>
              </div>
              <Alert severity="info" sx={{ mb: 3 }}>
                Use email : <strong>demo@minimals.cc</strong> / password :
                <strong> demo1234</strong>
              </Alert>
              {status === API_STATUS.REJECTED && (
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                </motion.div>
              )}
              <Input styleType="loginForm" placeholder="Email" name="email" />
              <FormError name="email" />
              <PasswordInput name="password" />
              <FormError name="password" />
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={formik.isSubmitting}
              >
                Login
              </LoadingButton>
            </LoginFormWrapper>
          </>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default Login;

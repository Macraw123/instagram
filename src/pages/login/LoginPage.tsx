import { signInWithPopup } from "@firebase/auth";
import React, { ReactElement, useLayoutEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import "./LoginPage.scss";
import { auth, provider } from "../../lib/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "src/lib/queries";
import { useRecoilState, useResetRecoilState } from "recoil";
import userState from "src/lib/states/user";
import ReactLoading from "react-loading";
import { FaAlignJustify } from "react-icons/fa";
import { useToggleTheme } from "src/lib/states/theme";

interface Props {}

export default function LoginPage({}: Props): ReactElement {
  const [formError, setformError] = useState("");
  const [form, setForm] = useState({
    userEmail: "",
    password: "",
  });

  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);

  useLayoutEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.values(userData).length > 0) {
      setUser(userData);
      history.push("/home");
    }
  }, [user]);

  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        setformError("Auth Failed");
        console.log(error);
      });
  }

  const [loginLocal, { loading, error, data }] = useLazyQuery(LOGIN, {
    onCompleted: () => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    },
  });

  const toggleTheme = useToggleTheme();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const errorMessage = formError || (error && error.message.toString());

  return (
    <Layout footer>
      <CardPageLayout
        withLogo
        bottomContent={
          <>
            <div className="login-form" style={{ marginTop: "10px" }}>
              <p>
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </div>
            <p className="app-store">Get the app</p>

            <div className="play">
              <img src="assets/app-store.png" alt="" />
              <img src="assets/gg-play.png" alt="" />
            </div>

            <button
              style={{
                background: "transparent",
                border: "0px",
                fontWeight: "bold",
              }}
              onClick={() => toggleTheme()}
            >
              Change Theme
            </button>
          </>
        }
      >
        <div className="login-component">
          <input
            type="email"
            name="userEmail"
            placeholder=" Email or username"
            value={form.userEmail}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder=" Password"
            value={form.password}
            onChange={handleChange}
          />

          {errorMessage ? (
            <p style={{ color: "red" }}> {errorMessage}</p>
          ) : null}

          <button
            type="button"
            className="sign-in-btn"
            onClick={() => {
              if (!form.userEmail) {
                setformError("Email must be filled!");
              } else if (!form.password) {
                setformError("Password must be filled!");
              } else {
                setformError("");
                loginLocal({ variables: form });
              }
            }}
          >
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactLoading width="1.5em" height="1.5em" />
              </div>
            ) : (
              "Log In"
            )}
          </button>
          <p>OR</p>
          <a href="#">
            <p onClick={() => login()}>Login with Google</p>
          </a>

          <Link to="/forgot_password">
            <p>Forgot Password?</p>
          </Link>
        </div>
      </CardPageLayout>
    </Layout>
  );
}

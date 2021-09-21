import { useLazyQuery, useMutation } from "@apollo/client";
import { signInWithPopup } from "@firebase/auth";
import React, { ReactElement, useLayoutEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import { auth, provider } from "src/lib/firebase";
import { SIGNUP } from "src/lib/queries";
import { useToggleTheme } from "src/lib/states/theme";
import userState from "src/lib/states/user";
import "./RegisterPage.scss";
import ReactLoading from "react-loading";

interface Props {}

export default function RegisterPage({}: Props): ReactElement {
  const [formError, setformError] = useState("");
  const [form, setForm] = useState({
    userEmail: "",
    password: "",
    name: "",
    username: "",
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

  const [signup, { loading, error, data }] = useMutation(SIGNUP);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const errorMessage = error && error.message.toString();
  const toggleTheme = useToggleTheme();
  return (
    <Layout footer>
      <CardPageLayout
        withLogo
        bottomContent={
          <>
            <div className="register-form" style={{ marginTop: "10px" }}>
              <p>
                Have an account? <Link to="/login">Log In</Link>
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
        <p style={{ marginBottom: "20px" }}>
          SIGN UP TO SEES PHOTOS AND VIDEOS!
        </p>
        <div className="register-component">
          <input
            type="email"
            name="userEmail"
            placeholder=" Email"
            value={form.userEmail}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder=" Full name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder=" Username"
            value={form.username}
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
              signup({ variables: form })
                .then((data) => {
                  localStorage.setItem("user", JSON.stringify(data));
                  setUser(data);
                  console.log({ data });
                })
                .catch(console.log);
            }}
          >
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactLoading width="1.5em" height="1.5em" />
              </div>
            ) : (
              "Sign Up"
            )}
          </button>

          <p>OR</p>
          <a href="#">
            <p>Login with Facebook</p>
          </a>
          <p>
            By Signing, you agree to our terms, Data Policy and Cookies Policy
          </p>
        </div>
      </CardPageLayout>
    </Layout>
  );
}

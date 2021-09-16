import { signInWithPopup } from "@firebase/auth";
import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import "./LoginPage.scss";
import { auth, provider } from "../../lib/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "src/lib/queries";

interface Props {}

export default function LoginPage({}: Props): ReactElement {
  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {});
  }
  const [form, setForm] = useState({
    userEmail: "",
    password: "",
  });

  const [loginLocal, { loading, error, data }] = useLazyQuery(LOGIN, {
    variables: form,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
          <input
            type="button"
            name="btnSign"
            value="Log In"
            className="sign-in-btn"
            onClick={() => loginLocal()}
          />
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

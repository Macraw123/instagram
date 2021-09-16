import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import "./RegisterPage.scss";

interface Props {}

export default function RegisterPage({}: Props): ReactElement {
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
            placeholder=" Phone number or email"
          />
          <input type="text" name="userFullName" placeholder=" Full name" />
          <input type="text" name="userName" placeholder=" Username" />
          <input type="password" name="userPassword" placeholder=" Password" />
          <input
            type="button"
            name="btnSign"
            value="Sign Up"
            className="sign-in-btn"
          />
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

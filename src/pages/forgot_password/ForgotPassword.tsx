import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import "./ForgotPassword.scss";

interface Props {}

export default function ForgotPassword({}: Props): ReactElement {
  return (
    <Layout footer header>
      <CardPageLayout
        bottomContent={
          <>
            <div className="forgot-form">
              <Link to="/login">
                <button className="back-to-login-btn">Back To Login</button>
              </Link>
            </div>
          </>
        }
      >
        <img src="assets/lock.png" alt="" />
        <p
          style={{
            margin: "10px 0px 0px 0px",
          }}
        >
          Trouble Logging In?
        </p>
        <p
          style={{
            margin: "10px 0px",
            fontSize: "12px",
            textAlign: "center",
            color: "grey",
          }}
        >
          Enter your email address, phone number or username, and we'll send you
          a link to get back into your account.
        </p>
        <div className="forgot-component">
          <input
            type="email"
            name="userName"
            placeholder=" Email or username"
          />
          <input
            type="button"
            name="btnSign"
            value="Log In"
            className="sign-in-btn"
          />
          <Link to="/register">
            <p>Create New Account</p>
          </Link>
        </div>
      </CardPageLayout>
    </Layout>
  );
}

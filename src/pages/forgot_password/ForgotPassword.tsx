import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import { useToggleTheme } from "src/lib/states/theme";
import "./ForgotPassword.scss";

interface Props {}

export default function ForgotPassword({}: Props): ReactElement {
  const toggleTheme = useToggleTheme();
  return (
    <Layout footer header>
      <CardPageLayout
        bottomContent={
          <>
            <div className="forgot-form">
              <Link to="/login">
                <button
                  className="back-to-login-btn"
                  style={{ color: "var(--text)" }}
                >
                  Back To Login
                </button>
              </Link>
            </div>

            <button
              style={{
                background: "transparent",
                border: "0px",
                fontWeight: "bold",
                padding: "10px 0px",
              }}
              onClick={() => toggleTheme()}
            >
              Change Theme
            </button>
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
            value="Change Password"
            className="sign-in-btn"
            style={{ color: "var(--text)" }}
          />
          <Link to="/register">
            <p>Create New Account</p>
          </Link>
        </div>
      </CardPageLayout>
    </Layout>
  );
}

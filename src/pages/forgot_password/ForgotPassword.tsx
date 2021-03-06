import { useLazyQuery } from "@apollo/client";
import { Console } from "console";
import React, { ReactElement, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import { FORGOT } from "src/lib/queries";
import { useToggleTheme } from "src/lib/states/theme";
import "./ForgotPassword.scss";
import ReactLoading from "react-loading";

interface Props {}

export default function ForgotPassword({}: Props): ReactElement {
  const toggleTheme = useToggleTheme();
  const history = useHistory();
  const [form, setForm] = useState({
    userEmail: "",
  });

  const [forgot, { loading, error, data }] = useLazyQuery(FORGOT, {
    onCompleted: () => {
      history.push("/verify_password?email=" + form.userEmail);
    },
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const errorMessage = error && error.message.toString();

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
            name="userEmail"
            placeholder=" Email or username"
            value={form.userEmail}
            onChange={handleChange}
          />

          <button
            className="sign-in-btn"
            style={{ color: "var(--text)" }}
            onClick={() => {
              forgot({
                variables: {
                  userEmail: form.userEmail,
                },
              });
            }}
          >
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactLoading width="1.5em" height="1.5em" />
              </div>
            ) : (
              "Check Email"
            )}
          </button>

          {errorMessage ? (
            <p style={{ color: "red" }}> {errorMessage}</p>
          ) : null}

          <Link to="/register">
            <p>Create New Account</p>
          </Link>
        </div>
      </CardPageLayout>
    </Layout>
  );
}

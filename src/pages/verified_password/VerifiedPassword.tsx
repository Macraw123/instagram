import { useLazyQuery, useMutation } from "@apollo/client";
import { Console } from "console";
import React, { ReactElement, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import { FORGOT } from "src/lib/queries";
import { useToggleTheme } from "src/lib/states/theme";
import "./VerifiedPassword.scss";
import ReactLoading from "react-loading";
import { CHANGEPASS } from "src/lib/mutations";

interface Props {}

export default function VerifiedPassword({}: Props): ReactElement {
  const history = useHistory();
  const location = useLocation();
  const [form, setForm] = useState({
    password: "",
  });
  const email = location.search.replace("?email=", "");
  const [change, { loading, error, data }] = useMutation(CHANGEPASS);

  useEffect(() => {
    change({ variables: { userEmail: email, password: form.password } }).catch(
      console.log
    );
  }, [location]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const errorMessage = error && error.message.toString();

  return (
    <Layout footer>
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
          </>
        }
      >
        <p
          style={{
            margin: "10px 0px 10px 0px",
          }}
        >
          Please Input New Password
        </p>

        <div className="forgot-component">
          <input
            type="password"
            name="password"
            placeholder=" Password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            className="sign-in-btn"
            style={{ color: "var(--text)" }}
            onClick={() => {
              change({
                variables: { userEmail: email, password: form.password },
              })
                .then(() => {
                  alert("Password Succesfully Changed!");
                  history.push("/login");
                })
                .catch(console.log);
            }}
          >
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ReactLoading width="1.5em" height="1.5em" />
              </div>
            ) : (
              "Change Password"
            )}
          </button>

          {errorMessage ? (
            <p style={{ color: "red" }}> {errorMessage}</p>
          ) : null}
        </div>
      </CardPageLayout>
    </Layout>
  );
}

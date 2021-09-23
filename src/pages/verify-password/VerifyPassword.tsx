import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import { RESEND } from "src/lib/queries";

export default function VerifyPassword() {
  const [seconds, setSeconds] = useState(30);
  const location = useLocation();
  const email = location.search.replace("?email=", "");

  const [sendEmail, { loading, error, data }] = useLazyQuery(RESEND);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds(0);
    }
  });
  return (
    <Layout footer>
      <CardPageLayout
        bottomContent={
          <>
            <div className="forgot-form">
              <button
                disabled={seconds > 0}
                onClick={() => {
                  console.log("klik", seconds);
                  sendEmail({
                    variables: {
                      userEmail: email,
                      type: "forgot_password",
                    },
                  });
                }}
                style={{ color: "var(--text)" }}
              >
                Resend Verification Email ({seconds})
              </button>
            </div>
          </>
        }
      >
        <p
          style={{
            margin: "10px 0px",
            fontSize: "12px",
            textAlign: "center",
            color: "grey",
          }}
        >
          Please kindly check your email to update your password.
        </p>
      </CardPageLayout>
    </Layout>
  );
}

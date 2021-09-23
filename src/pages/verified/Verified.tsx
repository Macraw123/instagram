import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CardPageLayout from "src/components/cardPageLayout/CardPageLayout";
import Layout from "src/components/layout/Layout";
import { VERIFY } from "src/lib/mutations";

export default function Verified() {
  const location = useLocation();
  const [verify, { loading, error, data }] = useMutation(VERIFY);

  useEffect(() => {
    const email = location.search.replace("?email=", "");
    verify({ variables: { userEmail: email } }).catch(console.log);
  }, [location]);

  return (
    <Layout footer>
      <CardPageLayout
        bottomContent={
          <>
            <div className="forgot-form">
              <Link to="/login">
                <button>Back to Login</button>
              </Link>
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
          SUCCESFULLY VERIFIED YOUR EMAIL
        </p>
      </CardPageLayout>
    </Layout>
  );
}

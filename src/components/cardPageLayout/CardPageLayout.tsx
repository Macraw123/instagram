import React from "react";
import "./CardPageLayout.scss";

export default function CardPageLayout({
  children,
  bottomContent,
  withLogo,
}: {
  children: any;
  bottomContent?: any;
  withLogo?: boolean;
}) {
  return (
    <div className="main-container">
      <div className="form-container">
        {withLogo ? (
          <img className="logo" src="assets/instagram.png" alt="" />
        ) : null}

        {children}
      </div>
      {bottomContent}
    </div>
  );
}

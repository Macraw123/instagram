import React from "react";
import Logo from "../logo/Logo";
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
        {withLogo ? <Logo className="logo" /> : null}

        {children}
      </div>
      {bottomContent}
    </div>
  );
}

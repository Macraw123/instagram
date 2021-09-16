import React, { ReactElement } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Layout.scss";

interface Props {
  children: any;
  header?: boolean;
  footer?: boolean;
}

export default function Layout({
  children,
  header,
  footer,
}: Props): ReactElement {
  return (
    <div className="layout">
      {header ? <Header /> : null}
      <main> {children} </main>
      {footer ? <Footer /> : null}
    </div>
  );
}

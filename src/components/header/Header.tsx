import React, { ReactElement } from "react";
import "./Header.scss";
import {
  FaHome,
  FaFacebookMessenger,
  FaCompass,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Logo from "../logo/Logo";

interface Props {}
const authRoutes = ["/forgot_password"];
export default function Header({}: Props): ReactElement {
  const location = useLocation();
  const inAuthPage = authRoutes.includes(location.pathname);
  return (
    <div className="main-header">
      <div className="image-logo">
        <Logo className="logo" />
      </div>
      {!inAuthPage ? (
        <>
          <div className="search-field">
            <input type="search" placeholder=" Search.."></input>
          </div>

          <div className="user-login-image">
            <FaHome />
            <FaFacebookMessenger />
            <FaCompass />
            <FaHeart />
            <FaUserCircle />
          </div>
        </>
      ) : null}
    </div>
  );
}

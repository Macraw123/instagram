import React, { ReactElement } from "react";
import "./Footer.scss";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div>
      <footer className="footer">
        <nav className="footer-nav" role="navigation">
          <ul>
            <li>
              <a href="https://about.instagram.com/">About Us</a>
            </li>
            <li>
              <a href="https://help.instagram.com/519522125107875">Support</a>
            </li>
            <li>
              <a href="https://about.instagram.com/en_US/blog">Blog</a>
            </li>
            <li>
              <a href="https://about.instagram.com/about-us/careers">Press</a>
            </li>
            <li>
              <a href="https://developers.facebook.com/docs/instagram">Api</a>
            </li>
            <li>
              <a href="https://www.instagram.com/directory/profiles/">Jobs</a>
            </li>
            <li>
              <a href="https://www.instagram.com/directory/hashtags/">
                Privacy
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/explore/locations/">Terms</a>
            </li>
            <li>
              <a href="https://www.instagram.com/topics/beauty/">Directory</a>
            </li>
            <li>
              <a href="https://www.instagram.com/topics/dance-and-performance/">
                Beauty
              </a>
            </li>
            <br />
            <li>
              <a href="">Language</a>
            </li>
            <li>
              <p>&copy; 2021 InSOgram</p>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

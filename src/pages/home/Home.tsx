import React, { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import StoryContainer from "./storyContainer/StoryContainer";
import "./Home.scss";
import ProfilePic from "../../components/profilePic/ProfilePic";
import ProfilePicDetails from "../../components/profilePic/ProfilePicDetails";
import { Link } from "react-router-dom";
import Post from "../../components/post/Post";

interface Props {}

export default function Home({}: Props): ReactElement {
  return (
    <Layout header>
      <div className="home-page" style={{ paddingTop: "20px" }}>
        <div className="left-section">
          <StoryContainer />
          <div className="post-container">
            {Array.from({ length: 10 }).map((el) => (
              <Post />
            ))}
          </div>
        </div>
        <div className="right-section">
          <ProfilePicDetails
            name="andrewtanjaya21"
            additionalInfo="so20_1"
            buttonText="Switch"
            buttonOnClick={() => {}}
            image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          />
          <div className="suggestion-title">
            <p>Suggestions For You</p>
            <Link to="">See All</Link>
          </div>
          <div className="suggestion-list">
            {Array.from({ length: 3 }).map((el, idx) => (
              <ProfilePicDetails
                name="faust.yu"
                additionalInfo="followed by..."
                buttonText="Follow"
                buttonOnClick={() => {}}
                small
                key={idx}
                image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              />
            ))}
            <div className="home-footer">
              <p className="links">
                About &middot; Help &middot; Press &middot; API &middot; Jobs
                &middot; Privacy &middot; Terms &middot; Locations &middot; Top
                Accounts &middot; Hashtags &middot; Languange
              </p>
              <p className="copyright">&copy; 2021 INSTAGRAM FROM FACEBOOK</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

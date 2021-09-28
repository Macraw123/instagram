import React, { ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import StoryContainer from "./storyContainer/StoryContainer";
import "./Home.scss";
import ProfilePic from "../../components/profilePic/ProfilePic";
import ProfilePicDetails from "../../components/profilePic/ProfilePicDetails";
import { Link } from "react-router-dom";
import Post from "../../components/post/Post";
import { GET_MAIN_POSTS, GET_MAIN_STORY_HEADER } from "../../lib/queries";
import { useRecoilValue } from "recoil";
import userState from "../../lib/states/user";
import { useQuery } from "@apollo/client";

export default function Home() {
  const user = useRecoilValue(userState);
  const { email } = user || {};

  const {
    error: errorPosts,
    loading: loadingPosts,
    data: posts,
  } = useQuery(GET_MAIN_POSTS, {
    variables: {
      userid: user?.id,
    },
    pollInterval: 2000,
    skip: !user?.id,
  });
  console.log(user, !user?.id);
  const {
    error: errorStories,
    loading: loadingStories,
    data: stories,
  } = useQuery(GET_MAIN_STORY_HEADER, {
    variables: {
      userid: user?.id,
    },
    skip: !user?.id,
  });

  const loading = loadingStories || loadingPosts;

  if (loading) {
    return null;
  }
  console.log(stories);
  const storiesData = stories?.getMainStoryUserById || [];
  const postsData = posts?.getMainPostById || [];

  return (
    <Layout header>
      <div className="home-page" style={{ paddingTop: "20px" }}>
        <div className="left-section">
          <StoryContainer stories={storiesData} />
          <div className="post-container">
            {postsData.map((post: any) => (
              <Post post={post} />
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

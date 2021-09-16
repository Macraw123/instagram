import React, { ReactElement } from "react";
import Card from "../card/Card";
import ProfilePicDetails from "../profilePic/ProfilePicDetails";
import {
  FaEllipsisH,
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";
import "./Post.scss";
import Slider from "react-slick";

interface Props {}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1,
  // swipeToSlide: true,
};

export default function Post({}: Props): ReactElement {
  return (
    <Card className="post">
      <div className="post-header">
        <ProfilePicDetails
          imageSize={30}
          image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          name="dana.id"
        />
        <FaEllipsisH />
      </div>
      <div className="post-image">
        <Slider {...settings}>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </Slider>
      </div>
      <div className="post-actions">
        <FaRegHeart />
        <FaRegComment />
        <FaRegPaperPlane />
        <FaRegBookmark style={{ marginLeft: "auto" }} />
      </div>
      <p className="post-likes">7,027 likes</p>
      <div className="post-comments">
        <p>
          <b>{"commenter"}</b> <span>Ini komennya</span>
        </p>
      </div>
    </Card>
  );
}

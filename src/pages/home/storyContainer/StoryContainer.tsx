import React, { ReactElement, useState } from "react";
import Card from "src/components/card/Card";
import Slider from "react-slick";
import "./StoryContainer.scss";
import ProfilePic, { PP_SIZE } from "src/components/profilePic/ProfilePic";
import { useMemo } from "react";
import { useRef } from "react";
import { useEffect } from "react";

interface Props {}

const MARGIN_SIZE = 10;

export default function StoryContainer({}: Props): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  const sliderSettings = useMemo(() => {
    return {
      infinite: false,
      speed: 500,
      slidesToShow: rendered
        ? Math.floor(
            (containerRef.current?.getBoundingClientRect().width || 0) /
              (PP_SIZE + MARGIN_SIZE)
          ) + 0.5
        : 0,
      slidesToScroll: 5,
      // swipeToSlide: true,
    };
  }, [rendered]);

  return (
    <Card style={{ width: "100%" }}>
      <div
        style={{ position: "relative" }}
        ref={containerRef}
        className="story-container"
      >
        <Slider {...sliderSettings}>
          {Array.from({ length: 50 }).map((_, idx) => (
            <ProfilePic
              image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              name="Test"
              key={idx}
            />
          ))}
        </Slider>
      </div>
    </Card>
  );
}

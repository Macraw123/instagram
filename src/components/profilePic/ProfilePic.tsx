import React, { ReactElement } from "react";
import "./ProfilePic.scss";

interface Props {
  className?: string;
  image: string;
  name?: string;
  width?: number;
}

export const PP_SIZE = 45;

export default function ProfilePic({
  className,
  image,
  name,
  width,
}: Props): ReactElement {
  return (
    <div className={`profile-pic ${className || ""}`}>
      <div
        className="profile-pic-content"
        style={{ width: width || PP_SIZE, height: width || PP_SIZE }}
      >
        <img src={image} alt={name} />
      </div>

      {name && <p>{name}</p>}
    </div>
  );
}

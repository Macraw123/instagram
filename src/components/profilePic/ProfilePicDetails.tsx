import React, { ReactElement } from "react";
import ProfilePic from "./ProfilePic";

interface Props {
  image: string;
  small?: boolean;
  imageSize?: number;
  name: string;
  additionalInfo?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}

export default function ProfilePicDetails({
  image,
  small,
  name,
  imageSize,
  additionalInfo,
  buttonOnClick,
  buttonText,
}: Props): ReactElement {
  return (
    <div className={`profile-pic-details ${small ? "small" : ""}`}>
      <ProfilePic image={image} width={imageSize || (small ? 35 : undefined)} />
      <div className="details">
        <p>{name}</p>
        <span>{additionalInfo}</span>
      </div>
      {buttonText && (
        <span onClick={buttonOnClick} className="actions">
          {buttonText}
        </span>
      )}
    </div>
  );
}

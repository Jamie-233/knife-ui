import React from "react";
import Avatar from ".";
import face1 from "../../assets/images/face-male-1.jpg";
import face2 from "../../assets/images/face-male-2.jpg";
import face3 from "../../assets/images/face-male-3.jpg";
import face4 from "../../assets/images/face-male-4.jpg";

const config = {
  title: "Avatar",
  component: Avatar,
};

export default config;

export const Default = () => {
  return <Avatar src={face1} size="48px" />;
};

export const Sizes = () => {
  return (
    <div>
      <Avatar src={face1} size="48px" />
      <Avatar src={face2} size="56px" />
      <Avatar src={face3} size="64px" />
      <Avatar src={face4} size="72px" />
    </div>
  );
};

import React from "react";
import face1 from "../../assets/images/face-male-1.jpg";
import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from "./style";
// import PropTypes from 'prop-types'

function Avatar({
  src,
  size = "48px",
  status,
  statusIconSize = "8px",
  ...rest
}) {
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </StyledAvatar>
  );
}

Avatar.propTypes = {};

export default Avatar;

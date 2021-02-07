import React from 'react'
import face1 from '../../assets/images/face-male-1.jpg'
import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from './style'
// import PropTypes from 'prop-types'

function Avatar(props) {
    return (
        <StyledAvatar>
            <StatusIcon></StatusIcon>
            <AvatarClip>
                <AvatarImage src={face1} alt="" />
            </AvatarClip>
        </StyledAvatar>
    )
}

Avatar.propTypes = {

}

export default Avatar


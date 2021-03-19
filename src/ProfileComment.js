import React from 'react';
import "./ProfileComment.css"
import ProfileIcon from "./ProfileIcon";
import users from "./data/users";
import "./Profile.css";


function ProfileComment(props) {
    const {
        username,
        caption,
        uriText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image,

      } = props;

    let accountName=username?username:users[Math.floor(Math.random()*users.length)].username;


    return (
        <div className="profilecomment">
            <ProfileIcon iconSize={iconSize} storyBorder={storyBorder} image={image}></ProfileIcon>
           
            {(accountName || caption) && !hideAccountName && (
                <div className="textContainer">
                    <span className="accountName2">
                        {accountName}
                    </span>
                    <span className={`caption.${captionSize} caption`}>
                        {caption}
                    </span>
                </div>
            )}
            <a href="/">{uriText}</a>
        </div>
    )
}

export default ProfileComment

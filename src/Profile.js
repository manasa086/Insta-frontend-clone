import React from 'react';
import "./Profile.css"
import ProfileIcon from "./ProfileIcon";
import users from "./data/users"


function Profile(props) {
    const {
        username,
        caption,
        uriText,
        iconSize,
        captionSize,
        storyBorder,
        hideAccountName,
        image,
        setComment
      } = props;

    let accountName=username?username:users[Math.floor(Math.random()*users.length)].username;


    return (
        <div className="profile">
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

export default Profile

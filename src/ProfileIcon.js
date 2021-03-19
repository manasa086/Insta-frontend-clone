import React from 'react';
import "./ProfileIcon.css";

function ProfileIcon(props) {

    const {iconSize,storyBorder,image}=props;

    function getRandomInt(min,max){
        min=Math.ceil(min);
        max=Math.floor(max);
        return Math.floor(Math.random()*(max-min))+min;
    }
    let randomId=getRandomInt(1,70);
    let profileImage=image?image:`https://i.pravatar.cc/150?image=${randomId}`;

    return (
        <div className={storyBorder?'storyBorder':''}>
            
            <img className={`profileIcon${iconSize}`} src={profileImage} alt="profile"></img>
            
        </div>
    )
}

export default ProfileIcon

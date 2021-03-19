import React from 'react';
import "./Menu.css"
import {ReactComponent as Home} from "./home.svg";
import {ReactComponent as Inbox} from "./inbox.svg";
import {ReactComponent as Explore} from "./explore.svg";
import {ReactComponent as Notification} from "./notification.svg";
import ProfileIcon from "./ProfileIcon";
import image from "./flower.jpg";

function Menu() {
    return (
        <div className="menu">
            <Home className="icon"></Home>
            <Inbox className="icon"></Inbox>
            <Explore className="icon"></Explore>
            <Notification className="icon"></Notification>
            <ProfileIcon iconSize='small' image={image} ></ProfileIcon>
        </div>
    )
}

export default Menu

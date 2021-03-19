import React from 'react';
import "./CardMenu.css";
import {ReactComponent as Inbox} from "./inbox.svg";
import {ReactComponent as Comments} from "./comment.svg";
import {ReactComponent as Notifications} from "./notification.svg";
import {ReactComponent as Bookmark} from "./bookmark.svg"

function CardMenu() {
    return (
        <div className="cardMenu">
            <div className="interactions">
                <Notifications className="icon"></Notifications>
                <Comments className="icon"></Comments>
                <Inbox className="icon"></Inbox>
            </div>
            <Bookmark className="icon"></Bookmark>
        </div>
    )
}

export default CardMenu

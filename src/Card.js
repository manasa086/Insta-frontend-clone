import React from 'react';
import "./Card.css";
import ProfileComment from "./ProfileComment";
import Profile from "./Profile"
import {ReactComponent as CardButton} from "./cardButton.svg"
import {ReactComponent as AddComment} from "./addcomment.svg"
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props) {
    const {storyBorder,image,comments,likedByText,likedByNumber,hours}=props;
    return (
        <div className="card">
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder} ></Profile>
                <CardButton className="cardButton"></CardButton>
            </header>
            <img className="cardImage" src={image} alt="card content"></img>
            <CardMenu></CardMenu>
            <div className="likedBy">
                <ProfileComment iconSize="small" hideAccountName={true} ></ProfileComment>
                <span>
                    Liked by <strong>{likedByText}</strong> and {" "} <strong>{likedByNumber} others</strong>
                </span>
            </div>
            <div className="comments">
                {comments.map((comment,index)=>{
                    return <Comment key={comment.id} accountName={comment.user} comment={comment.text}></Comment>
                })}
            </div>
            <div className="timePosted">{hours} HOURS AGO</div>
            <div className="addComment">
                <div className="commentText">
                  <AddComment className="icon"></AddComment> <span className="commentTextInside"> Add a comment ...</span>
                </div>
                <div className="postText">POST</div>
            </div>
        </div>
    )
}

export default Card;

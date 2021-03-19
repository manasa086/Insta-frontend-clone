import React from 'react';
import "./Comment.css";

function Comment(props) {
    const {accountName,comment}=props;

    return (
        <div className="commentContainer">
            <div className="accountNameComment">{accountName}</div>
            <div className="comment">{comment}</div>
        </div>
    )
}

export default Comment

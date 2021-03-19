import React from 'react';
import "./Suggestions.css";
import Profile from "./Profile";

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">
                    Suggestions For You
                </div>
                <a href="/" className="seeAll">See All</a>
            </div>
            <Profile caption="Followed by Rekha Shetty + 3 more" uriText="Follow" iconSize="medium" captionSize="small" storyBorder={true}></Profile>
            <Profile caption="Followed by James William + 5 more" uriText="Follow" iconSize="medium" captionSize="small" storyBorder={false}></Profile>
            <Profile caption="Followed by Mickey  + 2 more" uriText="Follow" iconSize="medium" captionSize="small" storyBorder={true}></Profile>
            <Profile caption="Followed by Varshini Chowdary+ 7 more" uriText="Follow" iconSize="medium" captionSize="small" storyBorder={false}></Profile>
            <Profile caption="Followed by Rakesh Reddy + 8 more" uriText="Follow" iconSize="medium" captionSize="small" storyBorder={true}></Profile>
            
        </div>
    )
}

export default Suggestions

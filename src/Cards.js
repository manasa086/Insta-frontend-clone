import React from 'react';
import "./Cards.css";
import Stories from "./Stories";
import Card from "./Card"

function Cards() {
    const commentsOne=[{
        user:"Diksha Shetty",
        text:"Amazing Content ,keep it Up!!!",
        id:1
    },{
        user:"Samantha",
        text:"Man great Work. Inspired Me a lot 🤩",
        id:2
    },{
        user:"Sunny Yoo",
        text:"Yoo man. keep Going 🔥",
        id:3 
    },{
        user:"Gopal rao",
        text:"Gained Lot of knowledge.Loved it 😍",
        id:4
    }]

    const commentsTwo=[{
        user:"Rahul Sena",
        text:"Nice!!! Looking Cool ",
        id:1
    },{
        user:"Risabh Rishi",
        text:"Killed It!! 😍",
        id:2
    },{
        user:"Sanjay Sahoo",
        text:"Wow!!!Awesome Yaar 😃",  
        id:3 
    }]

    const commentsThree=[{
        user:"Rekha",
        text:"Love this!",
        id:1
    },{
        user:"Surya 🌞",
        text:"Great!!! 😃",
        id:2
    },{
        user:"Pranay Teja",
        text:"Amazing buddy 😂",  
        id:3 
    }]

    return (
        <div className="cards">
            <Stories></Stories>
            <Card accountName="Sandhya" storyBorder={true} image="https://picsum.photos/800/900" comments={commentsOne} likedByText="Praveen" likedByNumber={89} hours={16}></Card>
            <Card accountName="James William" storyBorder={true} image="https://picsum.photos/800" comments={commentsTwo} likedByText="NatureLover" likedByNumber={65} hours={16}></Card>
            <Card accountName="Simran Chopra" storyBorder={true} image="https://picsum.photos/800/1000" comments={commentsThree} likedByText="Bunty" likedByNumber={43} hours={16}></Card>
        </div>
    )
}

export default Cards

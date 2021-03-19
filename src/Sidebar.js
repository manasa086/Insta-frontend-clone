import React from 'react';
import "./Sidebar.css";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "./flower.jpg";

function Sidebar() {
    return (
       
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile username="Tonny.stark" caption="Tonny Stark(Iron Man)" uriText="Switch" iconSize="big" image={image}></Profile>
                    <Suggestions></Suggestions>
                    <Footer></Footer>
                </div>
            </Sticky>
        
    )
}

export default Sidebar

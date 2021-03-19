import React from 'react'
import instalogo from "./instalogo.png";
import searchIcon from "./search.png";
import Menu from "./Menu.js";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <img src={instalogo} alt="instagram logo"></img>
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon"></img>
                    <span className="searchText">Search</span>
                </div>
                <Menu></Menu>
            </div>
            
        </div>
    )
}

export default Navigation

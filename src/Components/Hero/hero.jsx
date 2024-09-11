import React from "react";
import "./hero.css"
import avatarImg from "../../assets/avatar_no_bg.webp"

export default function Hero(){
    return(
        <div className="hero-el" id="hero-tag">
            <img src={avatarImg}></img>
            <div className="hero-text">
            <p>Hello There! I am</p>
            <h1>Soumajit Roy</h1>
            <h3>A Frontend Dev Who Loves to Design and Create Websites</h3>
            </div>
        </div>
    )
}
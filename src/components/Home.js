import React from "react";
import { PropsAndState } from "./PropsAndState";
import "./Home.css"
import { Image, Card } from "grommet";


export const Home = () => (
    <>
        <h2 className="intro">WV Wild Stat Tracker</h2>
        <div className="intro"><PropsAndState yourName={JSON.parse(localStorage.getItem("wild_coach")).name} /> </div>
        <div className="logo">
        <img className="logo_img" src="images/wildlogosmall.png" alt="WV Wild"></img>
        </div>   
    </>
)

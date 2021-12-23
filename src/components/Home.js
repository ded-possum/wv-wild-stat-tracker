import React from "react";
import { PropsAndState } from "./PropsAndState";
import "./Home.css"
export const Home = () => (
    <>
        <h2 className="intro">WV Wild Stat Tracker</h2>
        <div className="intro"><PropsAndState yourName={JSON.parse(localStorage.getItem("wild_coach")).name} /> </div>
    </>
)

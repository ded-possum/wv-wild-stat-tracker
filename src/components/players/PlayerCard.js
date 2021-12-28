import React from "react"
import "./Player.css"
import { Card, CardHeader, CardBody, CardFooter, Button } from "grommet"

export const PlayerCard = ({ player }) => (
    <section className="player">
        <h2 className="player__name">{ player.name }</h2>
        <img className="player__img" src={ player.img }></img>
        <h3 className="player__num">#{ player.number }</h3>
        <h3 className="player__pos">Position: { player.pos }</h3>
        <div className="player__goals">Goals: { player.goal }</div>
        <div className="player__assists">Assists: { player.assist }</div>
        <div className="player__saves">Saves: { player.save }</div>
        <div className="player__goalAgainst">Goals Against: { player.against }</div>
        <div className="player__penalties">Penalties in Minutes: { player.penalty }</div>
    </section>
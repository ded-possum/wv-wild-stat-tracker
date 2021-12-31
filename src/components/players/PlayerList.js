import React, {useContext, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from "./PlayerProvider";
import { PlayerCard } from "./PlayerCard";
import "./Player.css"
import { Button } from "grommet";

export const PlayerList = () => {

    const {players, getPlayers} = useContext(PlayerContext)
    const navigate = useNavigate()

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <>
        <h2 className="intro">West Virginia Wild</h2>
        <div className="intro">
        <Button color="#041e42" label="ADD NEW PLAYER" onClick={() => {
              navigate(`/players/edit/create`)
            }} />
        </div>
        <div className="players">
            {
                players.map(player => {
                    return <PlayerCard key={player.id} player={player} />
                })
            }
        </div>
        </>
    )

}
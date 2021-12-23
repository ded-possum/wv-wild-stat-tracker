import React, {useContext, useEffect} from "react";
import { PlayerContext } from "./PlayerProvider";
import { PlayerCard } from "./PlayerCard";

export const PlayerList = () => {

    const {players, getPlayers} = useContext(PlayerContext)

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <>
        <h2 className="list__header">West Virginia Wild</h2>
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
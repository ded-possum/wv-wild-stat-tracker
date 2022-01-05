import React, { useContext, useEffect, useState } from "react"
import "./Stat.css"
import { useNavigate, useParams } from "react-router-dom"
import { PlayerContext } from "../players/PlayerProvider"
import { Meter, Select } from "grommet"

export const StatList = ({player}) => {

    const {playersId} = useParams()
    const {players, getPlayers} = useContext(PlayerContext)
    const [selectedPlayer, setSelectedPlayer] = useState(0)

    const totalsFor = (prop) => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop[prop]
        }
        return sum
    }

    useEffect(() => {
        getPlayers()
    }, [])


    const PlayerSelect = (event) => {
        const playerId = (+event.target.value - 1)
        setSelectedPlayer(playerId)
    }

return (
    <>
    {(players.length) && <>
    <div className="player_select">
        <select id={playersId} className="player_select" onChange={PlayerSelect} value={players.name}>
            <option className="player_select" value="0">Select a Player:</option>
            {players.map((player) => (
                <option className="player_select" key={player.id} value={player.id}>
                    {player.name}
                </option>
            ))}
        </select>
    </div>
    <div className="stat">
        <div className="stat__goal">Goals: {players[selectedPlayer].goal}</div>
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalsFor("goal")} size="small" thickness="large" value={players[selectedPlayer].goal}
        />


        <div className="stat__assist">Assists: {players[selectedPlayer].assist}</div>
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalsFor("assist")} size="small" thickness="large" value={players[selectedPlayer].assist}
        />


        <div className="stat__save">Saves: {players[selectedPlayer].save}</div>
        <Meter
       type="circle" margin="medium" color="#ffb81c" max={totalsFor("save")} size="small" thickness="large" value={players[selectedPlayer].save}
        />

        <div className="stat__penalties">Penalty Minutes: {players[selectedPlayer].penalty}</div>
        <Meter
type="circle" margin="medium" color="#ffb81c" max={totalsFor("penalty")} size="small" thickness="large" value={players[selectedPlayer].penalty}
        />
    </div>
    </>
    }
 </>

)
}
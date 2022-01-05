import React, { useContext, useEffect, useState } from "react"
import "./Stat.css"
import { useNavigate, useParams } from "react-router-dom"
import { PlayerContext } from "../players/PlayerProvider"
import { Meter, Select } from "grommet"

export const StatList = ({player}) => {

    const {playersId} = useParams()
    const {players, getPlayers} = useContext(PlayerContext)
    // const [selectedPlayer, setSelectedPlayer] = useState({})
    const [selectedPlayer, setSelectedPlayer] = useState(0)


    const totalGoals = () => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop.goal
        }
        return sum
    }

    const playerGoals = () => {
        let result = 0
        for(let j = 0; j < players.length; j++){
            if (players[j].id === players.id)
            result += players[j].goal
        }
        return result
    }

    const totalAssists = () => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop.assist
        }
        return sum
    }

    const totalSaves = () => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop.save
        }
        return sum
    }

    const totalGoalsAgainst = () => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop.against
        }
        return sum
    }

    const totalPenalties = () => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop.penalty
        }
        return sum
    }

    useEffect(() => {
        getPlayers()
    }, [])


    const PlayerSelect = (event) => {
        const selectedPlayer = { ...stat }
        selectedPlayer[event.target.id] = event.target.checked ? event.target.checked : event.target.value

        setStat(selectedPlayer)
    }
// eventHandler on dropdown; call PlayerTotal, store in state; useState -> selectedPlayer; conditional?(if Selectedplayer -> state, if not then TotalValue) !ChartJS! -> animations, responsive graphs

// consolidate stat functions!


// .find playerObj -> return relevant stat to relevant div


// const PlayerSelect = (event) => {
//     console.log("this is the current player state", selectedPlayer)
//     console.log(event.target.value)
    // let selection = players.find(players => players.id === selectedPlayer)
    // const selectedPlayer = { ...stat }
    // selectedPlayer[event.target.id] = event.target.checked ? event.target.checked : event.target.value

    // setSelectedPlayer(event.target.value)
// }
//write function finds player object based on ID -> pull relevant stats

// const playerSelect = players.find( ())

// const PlayerSelect = (event) => {
//     console.log("this is the current player state", stat)
//     console.log(event.target.value)
//     const selectedPlayer = { ...stat }
//     selectedPlayer[event.target.id] = event.target.checked ? event.target.checked : event.target.value

//     setStat(selectedPlayer)
// }

// eventHandler on dropdown; call PlayerTotal, store in state; useState -> selectedPlayer; conditional?(if Selectedplayer -> state, if not then TotalValue) !ChartJS! -> animations, responsive graphs

// consolidate stat functions!




return (
    <>
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
        <div className="stat__goal">Goals: {players.goal}</div>
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalGoals()} size="small" thickness="large" value={players.goal}
        />


        <div className="stat__assist">Assists: {players.assist}</div>
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalAssists()} size="small" thickness="large" value={players.assist}
        />


        <div className="stat__save">Saves: {players.save}</div>
        <Meter
       type="circle" margin="medium" color="#ffb81c" max={totalSaves()} size="small" thickness="large" value={players.save}
        />


        {/* <div className="stat__against">Goals Against: {totalGoalsAgainst()}</div>
        <Meter
        type="circle" margin="medium" max={totalGoalsAgainst()} size="small" thickness="large" values={[{
            value: totalGoalsAgainst(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        /> */}


        <div className="stat__penalties">Penalty Minutes: {players.penalty}</div>
        <Meter
type="circle" margin="medium" color="#ffb81c" max={totalPenalties()} size="small" thickness="large" value={players.penalty}
        />
    </div>
    </>
)
}
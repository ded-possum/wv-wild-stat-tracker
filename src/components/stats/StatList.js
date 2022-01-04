import React, { useContext, useEffect, useState } from "react"
import "./Stat.css"
import { useNavigate } from "react-router-dom"
import { PlayerContext } from "../players/PlayerProvider"
import { Meter, Select } from "grommet"

export const StatList = ({player}) => {

    const {players, getPlayers} = useContext(PlayerContext)

    const totalGoals = () => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop.goal
        }
        return sum
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

        let sum = 0
    for(let i = 0; i < players.length; i++){
        let currentPlayerInLoop = players[i]
        sum += currentPlayerInLoop.goals
    }
// eventHandler on dropdown; call PlayerTotal, store in state; useState -> selectedPlayer; conditional?(if Selectedplayer -> state, if not then TotalValue) !ChartJS! -> animations, responsive graphs

// consolidate stat functions!

return (
    <>
        
    <div className="player_select">
        <select className="player_select" value={players.name}>
            <option className="player_select" value="0">Select a Player:</option>
            {players.map(p => (
                <option className="player_select" key={p.id} value={p.id}>
                    {p.name}
                </option>
            ))}
        </select>
    </div>
    <div className="stat">
        <div className="stat__goal">Goals: {totalGoals()}</div>
        <Meter
        type="circle" margin="medium" max={totalGoals()} size="small" values={[{
            value: totalGoals(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        aria-label="meter"
        />
        <div className="stat__assist">Assists: {totalAssists()}</div>
        <Meter
        type="circle" margin="medium" max={totalAssists()} size="small" values={[{
            value: totalAssists(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        aria-label="meter"
        />
        <div className="stat__save">Saves: {totalSaves()}</div>
        <Meter
        type="circle" margin="medium" max={totalSaves()} size="small" values={[{
            value: totalSaves(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        aria-label="meter"
        />
        <div className="stat__against">Goals Against: {totalGoalsAgainst()}</div>
        <Meter
        type="circle" margin="medium" max={totalGoalsAgainst()} size="small" values={[{
            value: totalGoalsAgainst(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        aria-label="meter"
        />
        <div className="stat__penalties">Penalty Minutes: {totalPenalties()}</div>
        <Meter
        type="circle" margin="medium" max={totalPenalties()} size="small" values={[{
            value: totalPenalties(),
            label: 'Total Goals',
             color: '#ffb81c'
         }]}
        aria-label="meter"
        />
    </div>
    </>
)
}
import React, { useState, createContext } from "react"

export const PlayerContext = createContext()

export const PlayerProvider = (props) => {
    const [players, setPlayers] = useState([])

    const getPlayers = () => {
        return fetch("http://localhost:8088/players")
        .then(res => res.json())
        .then(setPlayers)
    }

    const postPlayer = playerObj => {
        return fetch ("http://localhost:8088/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playerObj)
        })
        .then(getPlayers)
    }

    const updatePlayer = player => {
        return fetch(`http://localhost:8088/player_stats/${player.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
        .then(getPlayers)
    }

    return (
        <PlayerContext.Provider value={
            {players, getPlayers, postPlayer, updatePlayer}
        }>
            {props.children}
        </PlayerContext.Provider>
    )
    }
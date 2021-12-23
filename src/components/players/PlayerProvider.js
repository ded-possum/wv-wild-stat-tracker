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

    return (
        <PlayerContext.Provider value={
            {players, getPlayers, postPlayer}
        }>
            {props.children}
        </PlayerContext.Provider>
    )
    }
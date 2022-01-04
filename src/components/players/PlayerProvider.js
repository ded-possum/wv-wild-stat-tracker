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
        .then(res => res.json())
    }

    const getPlayerById = (id) => {
        return fetch(`http://localhost:8088/players/${id}`)
            .then(res => res.json())
    }

    const updatePlayer = player => {
        return fetch(`http://localhost:8088/players/${player.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
        })
        .then(getPlayers)
    }

    const deletePlayer = playerId => {
        return fetch(`http://localhost:8088/players/${playerId}`, {
            method: "DELETE"
        })
            .then(getPlayers)
    }


    return (
        <PlayerContext.Provider value={
            {players, getPlayers, postPlayer, getPlayerById, updatePlayer, deletePlayer}
        }>
            {props.children}
        </PlayerContext.Provider>
    )
    }

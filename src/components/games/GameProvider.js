import React, { useState, createContext } from "react";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [games, setGames] = useState([]);

  const getGames = () => {
    return fetch("http://localhost:8088/games")
    .then(res => res.json())
    .then(setGames);
  }

  const addGame = gameObj => {
    return fetch("http://localhost:8088/games", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(gameObj)
    })
    .then(res => res.json());
  }
  const getGameById = (id) => {
    return fetch(`http://localhost:8088/games/${id}`)
        .then(res => res.json())
}

const updateGame = game => {
  return fetch(`http://localhost:8088/games/${game.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  })
    .then(getGames)
}

  const playedGame = gameId => {
    return fetch(`http://localhost:8088/games/${gameId}`, {
        method: "PATCH",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            played: true,
        }),
    }).then(getGames)
} 

  

 
  return (
    <GameContext.Provider value={{
      games, getGames, addGame, playedGame, getGameById, updateGame
    }}>
      {props.children}
    </GameContext.Provider>
  );
}
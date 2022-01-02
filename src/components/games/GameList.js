import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GameContext } from "./GameProvider"
import { GameCard } from "./GameCard"
import "./Game.css"
import { Button, Card } from "grommet"

let filterGames = {
  NotPlayed: game => !game.played,
  Played: game => game.played
};
// const filterGameStatus = Object.keys(filterGames);

export const GameList = () => {
  const { games, getGames } = useContext(GameContext)
//   const [filter, setFilter] = useState('Incomplete');

  const navigate = useNavigate()

  useEffect(() => {
    getGames()
  }, [])

  return (
    <>
        <h2 className="intro">Schedule</h2>
        <div className="intro">
        {/* <Button color="#041e42" label="ADD GAME" onClick={() => navigate("/games/edit/create")} /> */}
        </div>
        <div className="game">
            {
                games.filter(game => game.played === false).map(game => 
                   <GameCard key={game.id} game={game} />)
            }
        </div>
        <h2 className="intro">Games Played</h2>
        <div className="game">
            {
                games.filter(game => game.played === true).map(game => 
                   <GameCard key={game.id} game={game} />)
            }
        </div>
    </>
  )
}
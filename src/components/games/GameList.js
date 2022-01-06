import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GameContext } from "./GameProvider"
import { GameCard } from "./GameCard"
import "./Game.css"
import { Button, Card } from "grommet"

let filterGames = {
  NotPlayed: game => !game.played,
  Played: game => game.played
};

export const GameList = () => {
  const { games, getGames } = useContext(GameContext)


  const navigate = useNavigate()

  useEffect(() => {
    getGames()
  }, [])

  return (
    <>
      <Card>
        <h2 className="intro">Schedule</h2>
        <div className="intro">
        <Button color="#ffb81c" label="ADD GAME" onClick={() => navigate("/games/edit/create")} primary />
        </div>
        <div className="game">
            {
                games.filter(game => game.played === false).map(game => 
                   <GameCard key={game.id} game={game} />)
            }
        </div>
        </Card>
        <Card>
        <h2 className="intro">Games Played</h2>
        <div className="game">
            {
                games.filter(game => game.played === true).map(game => 
                   <GameCard key={game.id} game={game} />)
            }
        </div>
        </Card>
    </>
  )
}
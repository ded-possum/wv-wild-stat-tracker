
import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameProvider"
import "./Game.css"
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from "grommet";

export const GameForm = () => {
    const { getGames, addGame, getGameById, updateGame } = useContext(GameContext)
    const [game, setGame] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {gameId} = useParams();
	const navigate = useNavigate();
    const [show, setShow] = useState()

    const handleControlledInputChange = (event) => {
      
      const newGame = { ...game }
      newGame[event.target.id] = event.target.checked ? event.target.checked : event.target.value

      setGame(newGame)
    } 

    const handleSaveGame = () => {

        setIsLoading(true);
        if (gameId){

          updateGame({
              id: parseInt(game.id),
              opponent: game.opponent,
              date: game.date,
              location: game.location,
              played: game.played
            })
          .then(() => navigate(`/games/${game.id}`))
        } else {
          addGame({
            id: parseInt(game.id),
            opponent: game.opponent,
            date: game.date,
            location: game.location,
            played: false
          })
        .then(() => navigate(`/games/${game.id}`))
        }
    }

    useEffect(() => {
        getGames().then(() => {
           if (gameId){
               getGameById(gameId)
               .then(game => {
                   setGame(game)
                   setIsLoading(false)
               })
           } else {
               setIsLoading(false)
           }
        }
        )
    }, [])


    
    return (

        <Card className="game_form">

            <>
            <fieldset>
                <div className="form_group">
                    <input type="text" id="opponent" onChange={handleControlledInputChange} className="form_control" placeholder="Opponent" defaultValue={game.opponent}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form_group">
                    <input type="date" id="date" onChange={handleControlledInputChange} className="form_control" placeholder="Date" defaultValue={game.date}></input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form_group">
                    <input type="text" id="location" onChange={handleControlledInputChange} className="form_control" placeholder="Location" defaultValue={game.location}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form_group">
                <label>Game Played:</label>
                    <input type="checkbox" id="played" value={game.played} onChange={handleControlledInputChange} className="form_control" placeholder="Opponent" defaultValue={game.opponent}></input>
                </div>
            </fieldset>
            </>
            <>
            <fieldset><Button color="#ffb81c" label={gameId ? <>Save Changes</> : <>Save New</>} className="form_save"
          onClick={event => {
            event.preventDefault()
            handleSaveGame()
            }} primary />
        </fieldset>
        </>
        </Card>
    )}
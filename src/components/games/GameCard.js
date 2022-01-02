import { Button, Card } from "grommet";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "./GameProvider";


export const GameCard = ({game}) => {
    const { getGames, playedGame } = useContext(GameContext)

  const navigate = useNavigate();

    const handleCheckbox = (event) => {
        event.preventDefault();
        playedGame(game.id).then(getGames)
      }    
      
   return (
<section className="game">
    <Card background="#ffb810" align="center" width="medium">
    <div className="game__opponent">{game.opponent}</div>
    <div className="game__date">{game.date}</div>
    <div className="game__location">{game.location}</div>
        <div><label className="game__played">Game Played: </label>
    <input className="game__played" type ="checkbox" defaultValue="false" onChange={handleCheckbox}/></div>
    <Button color="#041e42" label="EDIT" alignSelf="center" onClick={() => {
              navigate(`/games/edit/${game.id}`)
            }} primary />
</Card>
    </section>
   )
   }
import { Button, Card, Text } from "grommet";
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
    <Text className="game__opponent">{game.opponent}</Text>
    <Text className="game__date">{game.date}</Text>
    <Text className="game__location">{game.location}</Text>
    <Button color="#041e42" label="EDIT" alignSelf="center" size="small" onClick={() => {
              navigate(`/games/edit/${game.id}`)
            }} primary />
</Card>
    </section>
   )
   }
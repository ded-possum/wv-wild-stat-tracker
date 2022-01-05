
import React, { useContext, useEffect, useState } from "react"
import { PlayerContext } from "./PlayerProvider"
import "./Player.css"
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, Form, FormField, Layer } from "grommet";

export const PlayerForm = () => {
    const { getPlayers, postPlayer, getPlayerById, updatePlayer } = useContext(PlayerContext)
    const [player, setPlayer] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {playerId} = useParams();
	const navigate = useNavigate();
    const [show, setShow] = useState()

    const handleControlledInputChange = (event) => {
      
      const newPlayer = { ...player }
      newPlayer[event.target.id] = event.target.checked ? event.target.checked : event.target.value

      setPlayer(newPlayer)
    }

 

    const handleSavePlayer = () => {

        setIsLoading(true);
        if (playerId){

          updatePlayer({
              id: parseInt(player.id),
              name: player.name,
              number: +player.number,
              img: player.img,
              posF: player.posF,
              posD: player.posD,
              posG: player.posG,
              goal: +player.goal,
              assist: +player.assist,
              save: +player.save,
              against: +player.against,
              penalty: +player.penalty
            })
          .then(() => navigate(`/players/${player.id}`))
        } else {
          //POST - add
          postPlayer({
              id: player.id,
            name: player.name,
            number: +player.number,
            img: "/images/wvwildjersey_ht100px.png",
            posF: player.posF,
            posD: player.posD,
            posG: player.posG,
            goal: +player.goal,
              assist: +player.assist,
              save: +player.save,
              against: +player.against,
              penalty: +player.penalty
        })
        .then(() => navigate(`/players/${player.id}`))
        }
    }

    useEffect(() => {
        getPlayers().then(() => {
           if (playerId){
               getPlayerById(playerId)
               .then(player => {
                   setPlayer(player)
                   setIsLoading(false)
               })
           } else {
               setIsLoading(false)
           }
        }
        )
    }, [])


    
    return (
  
      <div className="player_form">

        <>
        <Card  background="#041e42" width="medium" align="center" alignSelf="center">
        <fieldset>
              <div className="form_group">
              <label>Name:</label>
                  <input type="text" id="name" onChange={handleControlledInputChange} className="form_control" placeholder="Player's Name" defaultValue={player.name}/>
              </div>
        </fieldset>
        <fieldset>
              <div className="form_group">
              <label>#:</label>
                  <input type="text" id="number" onChange={handleControlledInputChange} className="form_control" placeholder="Player's Number" defaultValue={player.number}/>
              </div>
        </fieldset>
        <fieldset>
              <div className="form_group">
              <label>Forward:</label>
                  <input type="checkbox" id="posF" value={player.posF} onChange={handleControlledInputChange} className="form_control" defaultValue={player.posF}/>
              </div>
        </fieldset>
        <fieldset>
              <div className="form_group">
              <label>Defense:</label>
                  <input type="checkbox" id="posD" value={player.posD} onChange={handleControlledInputChange} className="form_control" defaultValue={player.posD}/>
              </div>
        </fieldset>        
        <fieldset>
              <div className="form_group">
              <label>Goaltender:</label>
                  <input type="checkbox" id="posF" value={player.posG} onChange={handleControlledInputChange} className="form_control" defaultValue={player.posG}/>
              </div>
        </fieldset>
        </Card>
        </>

        {(parseInt(player.id) === player.id) && 
        <>
        <Card background="#041e42" width="medium" align="center" alignSelf="center">
        <fieldset>
              <div className="form_group">
              <label>Goals:</label>
                  <input type="text" id="goal" onChange={handleControlledInputChange} className="form_control" placeholder="Goals" defaultValue={player.goal}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form_group">
              <label>Assists:</label>
                  <input type="text" id="assist" onChange={handleControlledInputChange} className="form_control" placeholder="Assists" defaultValue={player.assist}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form_group">
              <label>Saves:</label>
                  <input type="text" id="save" onChange={handleControlledInputChange} className="form_control" placeholder="Saves" defaultValue={player.save}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form_group">
              <label>Goals Against:</label>
                  <input type="text" id="against" onChange={handleControlledInputChange} className="form_control" placeholder="Goals Against" defaultValue={player.against}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form_group">
              <label>Penalty Minutes:</label>
                  <input type="text" id="penalty" onChange={handleControlledInputChange} className="form_control" placeholder="Penalty Minutes" defaultValue={player.penalty}/>
              </div>
          </fieldset>
          </Card> 
          </>
          }

        <>
        <fieldset><Button color="#042e41" label={playerId ? <>Save Changes</> : <>Save New</>} className="form_save"
          onClick={event => {
            event.preventDefault()
            handleSavePlayer()
          }} />
        </fieldset>
        </>
      </div>
    )}
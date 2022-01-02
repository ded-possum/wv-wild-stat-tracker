import React, { useContext, useState } from "react"
import "./Player.css"
import { Button, Layer, Box } from "grommet"
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "./PlayerProvider";

export const PlayerCard = ({player}) => {
  const { deletePlayer } = useContext(PlayerContext)

  const handleDeletePlayer = () => {
      deletePlayer(player.id)
      .then(() => {
        navigate("/players/")
      })
    }

    const [show, setShow] = useState();

    let position = ""
    
      if (player.posF === true) {
        position = "Forward"
      }
      else if (player.posD === true) {
        position = "Defenseman"
      }
      else if (player.posG === true) {
        position = "Goaltender"
      }
      else {position = ""}

      const navigate = useNavigate()

    return (
        <div className="player">
      <Box>
        <Button color="#ffb81c" label={ player.name } onClick={() => setShow(true)} primary />
        {show && (
          <Layer 
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}>
        <div className="player__content">

        <img className="player__img" src={ player.img } alt="WV Wild"></img>

        <div className="player__info">
        <div className="player__name">{ player.name }</div>
        <div className="player__num">#{ player.number }</div>
        <div className="player__pos">{ position }</div>
        </div>

        <div className="player__stats">
        {((player.posF === true)||(player.posD === true)) && <>
        <div className="player__goals">Goals: { player.goal }</div>
        <div className="player__assists">Assists: { player.assist }</div>
        </>}
        
        {(player.posG === true) && <>
        <div className="player__saves">Saves: { player.save }</div>
        <div className="player__goalAgainst">Goals Against: { player.against }</div>
        </>}

        <div className="player__penalties">Penalty Minutes: { player.penalty }</div>
        </div>
        </div>

            <Button color="#041e42" label="EDIT" onClick={() => {
              navigate(`/players/edit/${player.id}`)
            }} />
            <Button color="#041e42" label="DELETE" onClick={handleDeletePlayer} />
            <Button color="#041e42" label="CLOSE" onClick={() => setShow(false)} />
          </Layer>
        )}
      </Box>
      </div>
    );
  }

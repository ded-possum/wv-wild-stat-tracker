import React, { useState } from "react"
import "./Player.css"
import { Button, Layer, Box } from "grommet"


export const PlayerCard = ({player}) => {
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

    // function position() {
    //   player.posF === true ? "Forward" : ""
    //   player.posD === true ? "Defenseman" : ""
    //   player.posG === true ? "Goaltender" : ""
    //   : ""
    // }

    return (
        <div className="player">
      <Box>
        <Button color="#ffb81c" label={ player.name } onClick={() => setShow(true)} />
        {show && (
          <Layer 
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}>
        <img className="player__img" src={ player.img } alt="WV Wild"></img>
        <h3 className="player__name">{ player.name }</h3>
        <h3 className="player__num">#{ player.number }</h3>
        <h3 className="player__pos">{ position }</h3>

        {((player.posF === true)||(player.posD === true)) && <div><div className="player__goals">Goals: { player.goal }</div>
        <div className="player__assists">Assists: { player.assist }</div></div>}
        
        {(player.posG === true) && <div><div className="player__saves">Saves: { player.save }</div>
        <div className="player__goalAgainst">Goals Against: { player.against }</div></div>}

        <div className="player__penalties">Penalty Minutes: { player.penalty }</div>
            <Button color="#041e42" label="close" onClick={() => setShow(false)} />
          </Layer>
        )}
      </Box>
      </div>
    );
  }

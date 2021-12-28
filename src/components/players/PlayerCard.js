import React, { useState } from "react"
import "./Player.css"
import { Button, Layer, Box } from "grommet"


export const PlayerCard = ({player}) => {
    const [show, setShow] = useState()
    return (
        <div className="player">
      <Box>
        <Button label={ player.name } onClick={() => setShow(true)} />
        {show && (
          <Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}>
        <img className="player__img" src={ player.img }></img>
        <h3 className="player__name">{ player.name }</h3>
        <h3 className="player__num">#{ player.number }</h3>
        {/* <h3 className="player__pos">Position: { player.posF || player.posD || player.posG }</h3> */}
        <div className="player__goals">Goals: { player.goal }</div>
        <div className="player__assists">Assists: { player.assist }</div>
        <div className="player__saves">Saves: { player.save }</div>
        <div className="player__goalAgainst">Goals Against: { player.against }</div>
        <div className="player__penalties">Penalty Minutes: { player.penalty }</div>
            <Button label="close" onClick={() => setShow(false)} />
          </Layer>
        )}
      </Box>
      </div>

    );
  }
import React, { useContext, useEffect, useState } from "react"
import "./Stat.css"
import { useParams } from "react-router-dom"
import { PlayerContext } from "../players/PlayerProvider"
import { Box, Meter, Stack, Text } from "grommet"

export const StatList = ({player}) => {

    const {playersId} = useParams()
    const {players, getPlayers} = useContext(PlayerContext)
    const [selectedPlayer, setSelectedPlayer] = useState(0)


    //This function returns the player totals for the designated statistic
    const totalsFor = (prop) => {
        let sum = 0
        for(let i = 0; i < players.length; i++){
            let currentPlayerInLoop = players[i]
            sum += currentPlayerInLoop[prop]
        }
        return sum
    }

    useEffect(() => {
        getPlayers()
    }, [])

    //This function gives the statistics of the player selected in the dropdown
    const PlayerSelect = (event) => {
        const playerId = (+event.target.value - 1)
        setSelectedPlayer(playerId)
    }

return (
    <>
    {(players.length) && <>
    <div className="player_select">
        <select id={playersId} className="player_select" onChange={PlayerSelect} value={players.name}>
            <option className="player_select" value="0">Select a Player:</option>
            {players.map((player) => (
                <option className="player_select" key={player.id} value={player.id}>
                    {player.name}
                </option>
            ))}
        </select>
    </div>
    <div className="stat">
        <Box align="center" pad="large">
            <Text color="#ffb81c" size="large" weight="bold">GOALS</Text>
            <Text color="#ffb81c" size="large">Team Total: {totalsFor("goal")}</Text>
        <Stack anchor="center">
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalsFor("goal")} size="small" thickness="large" value={players[selectedPlayer].goal}
        />
        <Box align="center">
            <Box direction="row" align="center">
                <Text color="#ffb81c" size="large" weight="bold">{players[selectedPlayer].goal}</Text>
            </Box>
        </Box>
        </Stack>
        </Box>

        <Box align="center" pad="large">
        <Text color="#ffb81c" size="large" weight="bold">ASSISTS</Text>
        <Text color="#ffb81c" size="large">Team Total: {totalsFor("assist")}</Text>
        <Stack anchor="center">
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalsFor("assist")} size="small" thickness="large" value={players[selectedPlayer].assist}
        />
        <Box align="center">
            <Box direction="row" align="center">
                <Text color="#ffb81c" size="large" weight="bold">{players[selectedPlayer].assist}</Text>
            </Box>
        </Box>
        </Stack>
        </Box>

        <Box align="center" pad="large">
        <Text color="#ffb81c" size="large" weight="bold">SAVES</Text>
        <Text color="#ffb81c" size="large">Team Total: {totalsFor("save")}</Text>
        <Stack anchor="center">
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalsFor("save")} size="small" thickness="large" value={players[selectedPlayer].save}
        />
        <Box align="center">
            <Box direction="row" align="center">
                <Text color="#ffb81c" size="large" weight="bold">{players[selectedPlayer].save}</Text>
            </Box>
        </Box>
        </Stack>
        </Box>

        <Box align="center" pad="large">
        <Text color="#ffb81c" size="large" weight="bold">PENALTY MINUTES</Text>
        <Text color="#ffb81c" size="large">Team Total: {totalsFor("penalty")}</Text>
        <Stack anchor="center">
        <Meter
        type="circle" margin="medium" color="#ffb81c" max={totalsFor("penalty")} size="small" thickness="large" value={players[selectedPlayer].penalty}
        />
        <Box align="center">
            <Box direction="row" align="center">
                <Text color="#ffb81c" size="large" weight="bold">{players[selectedPlayer].penalty}</Text>
            </Box>
        </Box>
        </Stack>
        </Box>
    </div>
    </>
    }
 </>

)
}
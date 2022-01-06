import { Route, Routes } from "react-router-dom";
import React from "react";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Home } from "./Home";
import { PlayerList } from "./players/PlayerList";
import { PlayerProvider } from "./players/PlayerProvider";
import { PlayerForm } from "./players/PlayerForm";
import { GameList } from "./games/GameList";
import { GameForm } from "./games/GameForm";
import { GameProvider } from "./games/GameProvider";
import { StatProvider } from "./stats/StatProvider";
import { StatList } from "./stats/StatList";

export const ApplicationViews = () => {

    return (
<StatProvider>
<GameProvider>
<PlayerProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/players/*" element={<PlayerList />} />
            <Route path="/players/edit/:playerId/*" element={<PlayerForm />} />
            <Route path="/players/edit/create/" element={<PlayerForm />} />
            <Route path="/games/*" element={<GameList />} />
            <Route path="/games/edit/:gameId/*" element={<GameForm />} />
            <Route path="/games/edit/create/" element={<GameForm />} />
            <Route path="/stats/*" element={<StatList />} />
        </Routes>
</PlayerProvider>
</GameProvider>
</StatProvider>
    )}
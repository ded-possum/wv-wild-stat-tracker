import { Route, Routes } from "react-router-dom";
import React from "react";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { Home } from "./Home";
import { PlayerList } from "./players/PlayerList";
import { PlayerProvider } from "./players/PlayerProvider";


export const ApplicationViews = () => {

    return (
<PlayerProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/player_stats/*" element={<PlayerList />} />
        </Routes>
        </PlayerProvider>
    )}
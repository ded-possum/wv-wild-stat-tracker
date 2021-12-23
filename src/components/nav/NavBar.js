import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"




export const NavBar =() => {
        return (
            <nav className="navbar">
                <ul className="nav-pills">
                <li className="nav-item">
                        <Link className="nav-link" to="/"><img src="/images/wildlogo_ht100px.png" alt="WV Wild" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/player_stats">Player Stats</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/team_stats">Team Stats</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log in</Link>
                        </li>
                    </ul>
                </span>
            </nav>
        )
    }
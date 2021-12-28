import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Nav, Anchor, Image } from "grommet"
import { Sort, Analytics, Logout, Compliance, Home } from "grommet-icons"
import "./NavBar.css"

export const NavBar =() => {
        return (

<Nav direction="row" background="" pad="">
    <Image src="/images/wildlogo_ht100px.png" />
    <Anchor href="/" icon={<Home />} hoverIndicator />
    <Anchor href="/player_stats" icon={<Sort />} hoverIndicator />
    <Anchor href="/team_stats" icon={<Analytics />} hoverIndicator />
    <Anchor href="/login" icon={<Logout />} hoverIndicator />
    <Anchor href="/register" icon={<Compliance />} hoverIndicator />
</Nav>
)}

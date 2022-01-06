import React, { Component } from "react"

import { Nav, Button, Image } from "grommet"
import { Sort, Analytics, Logout, Compliance, Home, Schedule } from "grommet-icons"
import "./NavBar.css"


export const NavBar =() => {
        return (

<Nav direction="row" background="" pad="">
    <Image src="/images/wildlogo_ht100px.png" />
    <Button className="navbutton" href="/" icon={<Home color='#FFFFFF' size='large' />} />
    <Button className="navbutton" href="/players" icon={<Sort color='#FFFFFF' size='large' />} />
    <Button className="navbutton" href="/stats" icon={<Analytics color='#FFFFFF' size='large' />} />
    <Button className="navbutton" href="/games" icon={<Schedule color='#FFFFFF' size="large" />} />
    <Button className="navbutton" href="/login" icon={<Logout color='#FFFFFF' size='large' />} />
    <Button className="navbutton" href="/register" icon={<Compliance color='#FFFFFF' size='large' />} />
</Nav>
)}

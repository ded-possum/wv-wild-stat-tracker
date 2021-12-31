import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Nav, Anchor, Button, Image } from "grommet"
import { Sort, Analytics, Logout, Compliance, Home } from "grommet-icons"
import "./NavBar.css"
import styled from "styled-components"

export const NavBar =() => {
        return (

<Nav direction="row" background="" pad="">
    <Image src="/images/wildlogo_ht100px.png" />
    <Button className="navbutton" href="/" icon={<Home color='#ffb81c' size='large' />} />
    <Button className="navbutton" href="/players" icon={<Sort color='#ffb81c' size='large' />} />
    <Button className="navbutton" href="/stats" icon={<Analytics color='#ffb81c' size='large' />} />
    <Button className="navbutton" href="/login" icon={<Logout color='#ffb81c' size='large' />} />
    <Button className="navbutton" href="/register" icon={<Compliance color='#ffb81c' size='large' />} />
</Nav>
)}

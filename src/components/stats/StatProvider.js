import React, { useState, createContext } from "react"

export const StatContext = createContext()

export const StatProvider = (props) => {
  
  const [stats, setStats] = useState([])

  const getStats = () => {
    return fetch("http://localhost:8088/players")
    .then(res => res.json())
    .then(setStats)
  }

  const getStatsById = (id) => {
    return fetch(`http://localhost:8088/players/${id}`)
    .then(res => res.json())
  }

  return (
    <StatContext.Provider value={
        {stats, getStats, getStatsById} 
    }>
        {props.children}
    </StatContext.Provider>
  )
}
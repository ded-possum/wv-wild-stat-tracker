import React, { useState, createContext } from "react"

export const CoachContext = createContext()


export const CoachProvider = (props) => {
    const [coaches, setCoaches] = useState([])

    const getCoaches = () => {
        return fetch("http://localhost:8088/coaches")
        .then(res => res.json())
        .then(setCoaches)
    }

    const postCoach = coachObj => {
        return fetch ("http://localhost:8088/coaches", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(coachObj)
        })
        .then(getCoaches)
    }

    return (
        <CoachContext.Provider value={{
            coaches, getCoaches
        }}>
            {props.children}
        </CoachContext.Provider>
    )
}

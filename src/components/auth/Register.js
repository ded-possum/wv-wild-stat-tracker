import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const name = useRef()
    const email = useRef()
    // const verifyPassword = useRef()
    const conflictDialog = useRef()
    const navigate = useNavigate()

    const existingCoachCheck = () => {
        return fetch(`http://localhost:8088/coaches?email=${email.current.value}`)
            .then(res => res.json())
            .then(coach => !!coach.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingCoachCheck()
            .then((coachExists) => {
                if (!coachExists) {
                    fetch("http://localhost:8088/coaches", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${name.current.value}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdCoach => {
                            if (createdCoach.hasOwnProperty("id")) {

                                localStorage.setItem("wild_coach", JSON.stringify(createdCoach))
                                props.setLoggedin(true)
                                navigate("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>User already exists! Please log in</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input ref={name} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}

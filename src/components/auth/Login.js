import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Login = (props) => {
    const email = useRef()
    // const password = useRef()
    const existDialog = useRef()
    const navigate = useNavigate()

    const existingCoachCheck = () => {
        return fetch(`http://localhost:8088/coaches?email=${email.current.value}`)
            .then(res => res.json())
            .then(coach => coach.length ? coach[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingCoachCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("wild_coach", exists.id, JSON.stringify(exists))
                    props.setLoggedin(true)
                    navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist! Please register</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>WV Wild Stat Tracker</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit" onClick={() => {
              navigate(`/`)
            }}>
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Register Here</Link>
            </section>
        </main>
    )
}



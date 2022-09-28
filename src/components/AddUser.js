import React, { useState } from "react";
import { addUser } from "../utils";

const AddUser = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await addUser(username, email, password)
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Create an account</h1>
                <label>
                    <input onChange={(event) => setUsername(event.target.value)} placeholder="Enter a username"></input>
                </label>
                <br></br>

                <label>
                    <input onChange={(event) => setEmail(event.target.value)} placeholder="Enter an email"></input>
                </label> 
                <br></br>

                <label>
                    <input onChange={(event) => setPassword(event.target.value)} placeholder="Enter a password"></input>
                </label>
                <br></br>
                <button type='submit'>Click here to create account</button>

        </form>
    )
}

export default AddUser
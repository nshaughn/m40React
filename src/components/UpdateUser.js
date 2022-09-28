import React from "react";
import { useState } from "react";
import { userUpdate } from "../utils";
import { getCookie } from "../common";

const UpdateUser = ({token}) => {
    const [username, setUsername] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        let token = getCookie("jwt_token")
        await userUpdate(token, username)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <h1>Update Username:</h1>   
                <br></br>
                <input onChange={(event) =>setUsername(event.target.value)}
                placeholder='change your username' />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default UpdateUser
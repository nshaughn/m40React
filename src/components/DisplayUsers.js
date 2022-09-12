import React from 'react' 
import { useState } from "react";

//TODO: IMPORT DISPLAY USERS BELOW


const DisplayUsers = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        //TODO: CALL DISPLAY USERS FUNCTION
    }

    return (
        <form onSubmit ={submitHandler}>
            <button type='submit'>Click here to display all the users</button>
        </form>
    )
}

export default Login
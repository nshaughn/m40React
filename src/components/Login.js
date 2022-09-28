import React from 'react' 
import { useState } from "react";
import { login } from '../utils';

const Login = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await login(username, email, password, setter)
    }

    return (
        <form onSubmit ={submitHandler}>
            <h1>Login below</h1>          
                <input onChange={(event) => setUsername(event.target.value)} placeholder='Enter your Username'/>
            <br></br>

            <label>
                <input onChange={(event) => setEmail(event.target.value)} placeholder='Enter your Email'/>
            </label>
            <br></br>

            <label>
                <input onChange={(event) => setPassword(event.target.value)} placeholder='Enter your Password'/>
            </label>
            <br></br>
            <button type='submit'>Click here to login</button>
        </form>
    )
}

export default Login
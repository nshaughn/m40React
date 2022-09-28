import { writeCookie } from "../common";


export const login = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        setter(data.username)
        writeCookie('jwt_token', data.token, 7)

    } catch (error) {
        console.log(error)
    }
}
//TODO: ADD FUNCTION TO LOG THE LIST OF USERS IN THE DATABSE 
export const displayUsers = async (cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}displayUsers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookie}` 
            }
        });
        const data = await response.json()
        console.log(data)
        const usernames = data.users.map(users => users.username)
        console.log(usernames)
        return usernames
    } catch (error)  {
        console.log(error)
    }
}

export const findUser = async (cookie) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}findUser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookie}` 
            }
        });
        const data = await response.json()
        console.log(data)
        return data.username
    } catch (error) {
        console.log(error)
    }
}

export const addUser = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}signUp`, {
            method: "POST",
            headers: 
            {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const userUpdate = async (token, username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}updateUser`, {
            method: "PUT",
            headers: 
            {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (token) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "DELETE",
            headers: 
            {"Content-Type": "application/json", "Authorization": `Bearer ${token}`}
        });
        const data = await response.json()
        console.log(data)
    } catch (error) {
        
    }
}
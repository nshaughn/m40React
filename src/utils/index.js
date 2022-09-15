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
        console.log(data)
        setter(data.username)

    } catch (error) {
        console.log(error)
    }
}
//TODO: ADD FUNCTION TO LOG THE LIST OF USERS IN THE DATABSE 
export const displayUsers = async (setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}displayUsers`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        });
        const data = await response.json()
        const usernames = data.users.map(users => users.username)
        console.log(usernames)
        return usernames
    } catch (error)  {
        console.log(error)
    }
}
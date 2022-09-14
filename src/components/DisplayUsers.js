import React from 'react' 
import { useState, useEffect } from "react";

//TODO: IMPORT DISPLAY USERS BELOW
import { displayUsers } from '../utils';

const DisplayUsers = () => {

    const [usernames, setUsernames] = useState()

    const loadUsernames = async () => {
        let users = await displayUsers()
        console.log(users)
        setUsernames(users)
    }

    useEffect (() =>{
        loadUsernames()
    },[])
    return (
        <div className='usernames'>
            { usernames?.length > 0
                ?(
                    <div className="container">
                    {usernames.map((user) => (
                        <h3>{user}</h3>
                    ))}
                    </div>
                ) : (
                    <div className="empty">
                    <h2>No users found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default DisplayUsers

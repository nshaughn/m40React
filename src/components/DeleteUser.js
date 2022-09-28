import React from "react";
import { useState } from "react";
import { deleteUser } from "../utils";
import { getCookie } from "../common";

const DeleteUser = () => {
    const [deleteAccount, setDeleteAccount] = useState(false)

    const submitHandler = async () => {
        // event.preventDefault()
        let token = getCookie("jwt_token")
        if(deleteAccount){
            await deleteUser(token)
        }
    }

    const confirmation = async (val) => {
        if(val.target.value === 'delete'){
            await setDeleteAccount(true)
        } else {
            console.log("not deleted")
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <h1>Delete Account</h1>
                <br></br>
                <input onChange={confirmation} placeholder='type delete to confirm' />
            </label>
            <button type='submit'>Submit</button>

        </form>
    )
}

export default DeleteUser
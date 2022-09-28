import { useEffect, useState } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./components/MovieCard";
//TODO import DisplayUsers componet here
import DisplayUsers from "./components/DisplayUsers"
import Login from './components/Login'
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";
import UpdateUser from "./components/UpdateUser";

import { getCookie } from "./common";
import { findUser } from "./utils";

// // Prefix your env variables with REACT_APP_
const API_URL = process.env.REACT_APP_API_URL

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [user, setUser]= useState()

  useEffect (() =>{
    searchFilms('Batman')
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])

  const searchFilms = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()
    setMovies(res.Search)
  }

  const loginWithToken = async (cookie) => {
    const user = await findUser(cookie)
    setUser(user)
  }

  const logout = async () => {
    let name = 'jwt_token'
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  return (
    <div className="app">
      <h1>My Movie Database</h1>
      <br></br>
      <br></br>
      <AddUser />
      <Login setter={setUser} />
      {user ? 
      <>
      {/* TODO: Call DisplayUsers componet here */}
      <DisplayUsers />
      <br></br>
      <br></br>
      <UpdateUser />
      <br></br>
      <DeleteUser />
      <br></br>
      <div className="search">
        <input
            placeholder='Search for a film'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value) }
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => searchFilms(searchTerm)}
        />
      </div>
      { movies?.length > 0
      // if movies length is greater than zero 
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
          // if movies length is less than zero
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
        <form onSubmit ={logout}>
            <button type='submit'>Click here to logout</button>
        </form>
      </>

      : <h2>Login to search for a movie</h2>}
      <br></br>
    </div>
  )
}

export default App;



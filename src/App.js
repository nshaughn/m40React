import { useEffect, useState } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./components/MovieCard";
//TODO import DisplayUsers componet here
import DisplayUsers from "./components/DisplayUsers"
import Login from './components/Login'

// // Prefix your env variables with REACT_APP_
const API_URL = process.env.REACT_APP_API_URL

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])
  const [user, setUser]= useState()

  useEffect (() =>{
    searchFilms('Batman')
  },[])

  const searchFilms = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()
    setMovies(res.Search)
  }

  return (
    <div className="app">
      <h1>My Movie Database</h1>
      <br></br>
      <br></br>
      <Login setter={setUser} />
      {user ? 
      <>
      {/* TODO: Call DisplayUsers componet here */}
      <DisplayUsers />
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
      </>

      : <h2>Login to search for a movie</h2>}
      <br></br>
    </div>
  )
}

export default App;



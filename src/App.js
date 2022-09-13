import { useEffect, useState } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./components/MovieCard";
//TODO import DisplayUsers componet here
import DisplayUsers, { displayUsers} from "./components/DisplayUsers"
import Login from './components/Login'


const API_URL = 'http://omdbapi.com?apikey=7d2e5ef7'

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

      <Login setter={setUser} />
      {user ? 
      <>
      <h1>{user} logged in </h1>
      {/* TODO: Call DisplayUsers componet here */}
      <DisplayUsers />
      </>
      : <h1>user not logged in</h1>}

      <br></br>
      

      <h1>My movie app</h1> 
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
    </div>
  )
}

export default App;



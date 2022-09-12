import { useEffect, useState } from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./components/MovieCard";

//7d2e5ef7

const API_URL = 'http://omdbapi.com?apikey=7d2e5ef7'

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  useEffect (() =>{
    searchFilms('Batman')
  },[])

  const searchFilms = async (title) => {
    const req = await fetch(`${API_URL}&s=${title}`)
    const res = await req.json()
    // console.log(res.Search)
    setMovies(res.Search)
  }

  return (
    <div className="app">
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



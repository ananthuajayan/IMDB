import React, { useState } from "react";
import Moviecomponents from './components/moviecontainer';
import Moviedetails from './components/moviedetails';
import axios from "axios";
const API_KEY = '152b288f'

function App() {
  const [search, setsearch] = useState();
  const [time, setTime] = useState();
  const [movie, setmovie] = useState([]);
  const [selectedmovie, setselectedmovie] = useState();


  const fetchData = async (searchString, limit = 6) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}&page=1`);
    console.log(response);
  
    // Limit the results to the first 6 entries
    const limitedResults = response.data.Search ? response.data.Search.slice(0, limit) : [];
    setmovie(response.data.Search || []);
    setmovie(limitedResults);
  }
  
  // const fetchData = async (searchString) => {
  //   const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
  //   console.log(response);
    
    
  // }

  const onTextChange = (e) => {
    clearTimeout(time)
    setsearch(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTime(timeout)
  }
  return (
    <>
      <div className='container'>
        <div className='header-section'>
          <div className="webname">
            <h2>IMDB</h2>
          </div>
          <div className="searchbar-container">
            <span><i className="fa-solid fa-magnifying-glass"></i></span>
            <input type="search" placeholder="search movie name" className="searchbar" value={search} onChange={onTextChange} />
          </div>
        </div>
        <div className="split">
          {selectedmovie && <Moviedetails selectedmovie={selectedmovie} />}
          <div className="moviecontainer">
            {movie.length === 0 ? "SEARCH A MOVIE" : movie.map((movie, index) => {
              return (
                <Moviecomponents key={index}
                  movie={movie}
                  setselectedmovie={setselectedmovie}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

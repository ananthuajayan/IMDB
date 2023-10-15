import React, { useState } from "react";
import Moviecomponents from './components/moviecontainer'
import axios from "axios";
const API_KEY = '152b288f'

function App() {
  const[search,setsearch]=useState();
  const[time,setTime]=useState();

 
  const fetchData = async(searchString)=>{
   const response  = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
   console.log(response)

  }
  const onTextChange = (e)=>{
    clearTimeout(time)
    setsearch(e.target.value);
    const timeout = setTimeout(()=>fetchData(e.target.value),500);
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
            <input type="search" placeholder="search movie name" className="searchbar" value={search}  onChange={onTextChange}/>
          </div>
        </div>
        <div className="moviecontainer">
        <Moviecomponents />
        <Moviecomponents />
        <Moviecomponents />
        <Moviecomponents /> 
        <Moviecomponents />
        </div>
        
      </div>
      </>
  );
}

export default App;

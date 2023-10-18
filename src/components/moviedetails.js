import React, { useEffect, useState } from 'react'
import '../index.css';
import axios from "axios";
const API_KEY = '152b288f'; 

const Moviedetails = (props) => {
    console.log(props)
    const[moviepost,setmoviepost]=useState([])
   
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${props.selectedmovie}&apikey=${API_KEY}`)
          .then(response => {
            console.log(response.data);
            setmoviepost(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },[props.selectedmovie]);
  return (
    <div className='moviedata'>
        <div className='movieposter'>
            <img src={moviepost.Poster} alt="movie poster" />
        </div>
          <div className='moviedis'>
            <div><span>Movie Title : </span>{moviepost.Title}</div>            
            <div><span>Actors : </span>{moviepost.Actors}</div>            
            <div><span>Plot : </span>{moviepost.Plot}</div>            
            <div><span>Released Date : </span>{moviepost.Released}</div>            
            <div><span>Duration : </span>{moviepost.Runtime}</div>            
            <div><span>Box-Office : </span>{moviepost.BoxOffice}</div>            
            <div><span>Director : </span>{moviepost.Director}</div>     
            <div><span>Genre : </span>{moviepost.Genre}</div>    
            <div><span>Rating : </span>{moviepost.Rated}</div>    
            <div><span>IMDB Rating : </span>{moviepost.imdbRating}</div>    
            <div><span>Type : </span>{moviepost.Type}</div>    
            <div><span>Awards : </span>{moviepost.Awards}</div>          
          
          </div>
    </div>
  )
}

export default Moviedetails
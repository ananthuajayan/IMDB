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
           <div>{moviepost.Title}</div>            
         
           <div>{moviepost.Title}</div>            
         
           <div>{moviepost.Title}</div>            
         
           <div>{moviepost.Title}</div>            
         
           <div>{moviepost.Title}</div>            
         
           <div>{moviepost.Title}</div>            
         
           <div>{moviepost.Title}</div>            
         
        </div>
    </div>
  )
}

export default Moviedetails
import React from 'react';
import '../index.css';

const moviecontainer = (props) => {
    const{Poster,Title,Type,Year,imdbID}=props.movie

  return (
        <div className='movielist' onClick={()=>props.setselectedmovie(imdbID)}>
            <div className='imagetag'>
                <img src={Poster} alt="movie-pic" />
            </div>
            <div className='moviedetails'>
                <div className='title'>{Title}</div>
                <div className='type'>
                     <h5>Year:{Year}</h5>
                     <h5>Type:{Type}</h5>
                </div>

            </div>
        </div>
  )
}

export default moviecontainer
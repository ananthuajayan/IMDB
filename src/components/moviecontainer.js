import React from 'react';
import '../index.css';

const moviecontainer = () => {

  return (
        <div className='movielist' >
            <div className='imagetag'>
                <img src="https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg" alt="movie-pic" />
            </div>
            <div className='moviedetails'>
                <span> hello my movie</span>
                <div className='type'>
                     <h5>Year:2003</h5>
                     <h5>Type:Movie</h5>
                </div>

            </div>
        </div>
  )
}

export default moviecontainer
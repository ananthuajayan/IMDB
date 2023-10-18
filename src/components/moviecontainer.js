
import React, { useState } from 'react';
import '../index.css';

function Moviecontainer(props) {
    const{Poster,Title,Type,Year,imdbID} = props.movie
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    props.setselectedmovie(imdbID);
    setIsClicked(true);
  };

  const itemStyle = {
    backgroundColor: isClicked ? 'yellow' : 'transparent',
    // Add other styles here as needed
  };

  return (
    <div className='movielist' style={itemStyle} onClick={handleClick}>
      <div className='imagetag'>
        <img src={Poster} alt="movie-pic" />
      </div>
      <div className='moviedetails'>
        <div className='title'>{Title}</div>
        <div className='type'>
          <h5>Year: {Year}</h5>
          <h5>Type: {Type}</h5>
        </div>
      </div>
    </div>
  );
}

export default Moviecontainer;
import React from 'react';
import './contexApiStyle.css';

const Movie=(prop)=>{


    return(
        <div className='movieDiv'>
            <h3>{prop.name}</h3>
            <p>Price: {prop.price}</p>
        </div>
    )
}

export default Movie;
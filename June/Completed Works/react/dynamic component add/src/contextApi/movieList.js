import React,{useState, useContext} from 'react';

import Movie from './movie';
import {MovieContext} from './movieListContext';

const MovieList=()=>{
    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div>
           {movies.map(movie=>(
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
          ))}
        </div>
    )
}

export default MovieList;
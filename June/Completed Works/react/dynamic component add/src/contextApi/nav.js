import React, { useContext } from 'react';
import './contexApiStyle.css';
import {MovieContext} from './movieListContext'

const Nav=()=>{

    const [movies,setMovies]=useContext(MovieContext);

    return(
        <div>
            <div className='navContainer'>
                <p className='customDiv'>Movie Garden</p>
                <p className='customDiv'>List of Movies: {movies.length}</p>
            </div>
        </div>
    )
}

export default Nav;
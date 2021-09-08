import React, { useState, Component } from 'react';
import './App.css'
import MovieList from './contextApi/movieList'
import Nav from './contextApi/nav'
import {MovieProvider} from './contextApi/movieListContext'
import AddMovie from './contextApi/addMovie';


function App() {
  
  return (
    <div className='App'>
      <MovieProvider>
        <Nav/>
        <AddMovie/>
        <MovieList/>
      </MovieProvider>
    </div>
  )
}

export default App;
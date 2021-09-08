import React, {useState, useContext} from 'react';
import {MovieContext, MovieListContext} from './movieListContext';

const AddMovie=()=>{
    const [name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [movies,setMovies]=useContext(MovieContext);

    const updateName=(e)=>{
        setName(e.target.value);   
    }
    const updatePrice=(e)=>{
        setPrice(e.target.value);   
       
    }

    const addMovie=(e)=>{
       e.preventDefault(); 
        setMovies(prevMovies=>[{name: name,price:price},...prevMovies, ]);
    }
    return(
        <form onSubmit={addMovie}>
            <p style={{color:'white',fontSize:'20px',fontWeight:'700'}}>Movie Name</p><input type='text' name='name' value={name} onChange={updateName} required/>
            <p style={{color:'white',fontSize:'20px',fontWeight:'700'}}>Movie Price</p><input type='text' name='price' placeholder='$' value={price} onChange={updatePrice} required/>
            <button>Add Movie</button>
        </form>
    )
}

export default AddMovie;
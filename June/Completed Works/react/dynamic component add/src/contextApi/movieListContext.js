import React,{useState, createContext} from 'react';

export const MovieContext=createContext();

export const MovieProvider=(props)=>{

    const [movies, setMovies]=useState([

        {
            name: 'Harry potter',
            price: '$33',
            serialNumber: 1,
            id:777,
        },
        {
            name: 'mission impossible',
            price: '$68',
            serialNumber: 2,
            id:778,
        }, {
            name: 'john wick',
            price: '$55',
            serialNumber: 3,
            id:779,
        }, {
            name: 'IP Man',
            price: '$75',
            serialNumber: 4,
            id:780,
        },
    ]);

    return(
        <div>
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>
        </div>
    )
}
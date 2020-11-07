import React from 'react';
import '../moviesPage/moviesPage.css';
import SingleCard from '../singleCard/singleCard';

const movies =(props)=>{
    
   console.log(props.location.state.res.results)

        return(
            <div className='MoviesContainer' style={{backgroundColor:'#565656'}}>
            <div>
            {props.location.state.res.results.map((movie)=>
                <div><SingleCard res={movie}></SingleCard></div>)}
            </div>
            </div>
            );
    }


export default movies;
import React from 'react';
import { Redirect, withRouter } from 'react-router';
import '../singleCard/singleCard.css';


const singleCard=(props)=>{
   // console.log(props);
    var posterPath= "http://image.tmdb.org/t/p/w185/"+props.res.poster_path;
    
    function cardClickHandler(){
        //alert("clicked!");
           return(
           props.history.push({pathname: '/detailsCard' , state: {id: props.res.id , type: props.res.media_type}})
            )  
        }
       
        
        //<div className='MovieName'>{props.res.title}</div>
        //<div className='MovieName'>{props.res.id}</div>
        return(
            
            <div className='container'>
            <div className='card' 
            style={{backgroundImage: `url(${posterPath})`}}
            onClick={cardClickHandler}>
            <div className='MovieDetails'>
            {props.res.media_type=="tv" ? <div className='MovieName'>{props.res.name}</div> : <div className='MovieName'>{props.res.title}</div>}
            </div>
        </div>
    </div>
    )        
}

export default withRouter(singleCard);
/* import React from 'react';
import NavBar from '../navBar/navBar';
import '../searchPage/searchPage.css';

const searchedPage=(props)=>{
    var data= props.location.state.response
    console.log(data)
    
    function watchClickHandler(){
       var movie=data.Title;
        const videoUrl="https://www.youtube.com/results?search_query="+movie+"+trailer"
        window.open(videoUrl) 
    }
    return(
    <div className='searchPageContainer' >
        <NavBar></NavBar>
        
        <div className='poster' style={{backgroundImage: `url(${data.Poster})`}}>
        <div className='movieTitle'>{data.Title}</div>
        </div>
        <div className='details'>
        <div className='title'>{data.Title}</div>
            <table>
                <tr>
                    <th>Rating </th>
                    <td>{data.imdbRating} ★</td>
                </tr>
                <tr>
                    <th>Plot </th>
                    <td>{data.Plot}</td>
                </tr>
                <tr>
                    <th>Run Time </th>
                    <td>{data.Runtime}</td>
                </tr>
            </table> 
        </div>
        <div className='extraDetails'>
            <table>
                <tr>
                    <th>Directors </th>
                    <td>{data.Director}</td>
                </tr>
                <tr>
                    <th>Awards </th>
                    <td>{data.Awards}</td>
                </tr>
                <tr>
                    <th>Actors </th>
                    <td>{data.Actors}</td>
                </tr>
                <tr>
                    <th>Genre </th>
                    <td>{data.Genre}</td>
                </tr>
                <tr>
                    <th>Languages </th>
                    <td>{data.Language}</td>
                </tr>
            </table>
            <button type="button" class="btn btn-primary" onClick={watchClickHandler}>Watch Trailer</button>
        </div>
    </div>
                
    )
}

export default searchedPage;  */
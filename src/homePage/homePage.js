import React, { Component } from 'react';
import '../homePage/homePage.css';
import NavBar from '../navBar/navBar';
//import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';
import Movies from '../moviesTabPage/moviesTabPage';
//import Autoscroll from 'autoscroll-react';
import TvSeries from '../tvTabPage/tvTabPage';



class homePage extends Component {

    render() {
        //<h1>This is carousel area</h1>
        //<NavBar></NavBar>
        //<MoviesCarousel></MoviesCarousel>
        return (
            <>
            <div>
            <div className='navBarArea'>
            </div>

            
            <div className='movieCarouselArea'>
            <h3 className="movieHeader">Trending Movies</h3>
            <Movies page='home'></Movies>
            </div>
            
            <div className='TvCarouselArea'>
            <h3 className="TvSeriesHeader">Trending Series</h3>
            <TvSeries page='home'></TvSeries>
            </div>
            
            </div>
            </>
            )
    }
}

export default homePage;
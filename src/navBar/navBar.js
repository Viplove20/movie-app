import React from 'react';
import SearchBar from '../navBar/searchBar'
import { Redirect } from 'react-router';

const navBar =()=>{
    
    function moviesTabClickHandler(){
        
        return(
        <Redirect push to={{pathname:"/moviesTabPage"}} />
        )
    }

    async function tvTabClickHandler(){
      
        return(
        <Redirect push to={{pathname:"/tvTabPage"}} />
        )
    }
     

    return (
            <div className="Navigation">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/"><img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />Hotflix</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/moviesTabPage" onClick={moviesTabClickHandler}>Trending Movies</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/tvTabPage" onClick={tvTabClickHandler}>Trending Shows</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/">My Hotflix</a>
                        </li>
                    </ul>

                    <SearchBar></SearchBar>
                </div>
            </nav>
        </div>
        );
    }

export default navBar;
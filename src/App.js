import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './homePage/homePage';
import MoviesPage from './moviesPage/moviesPage';
import MoviesTabPage from './moviesTabPage/moviesTabPage';
import TvTabPage from './tvTabPage/tvTabPage';
import DetailsCard from './detailsCard/detailsCard';
import NavBar from './navBar/navBar';

function App() {
  return (
    <BrowserRouter>
    <div >
    <NavBar></NavBar>
      <Switch>
        <Route exact path='/movies' component={MoviesPage}/>
        <Route exact path='/moviesTabPage' component={MoviesTabPage} />
        <Route exact path='/tvTabPage' component={TvTabPage} />
        <Route exact path='/detailsCard' component={DetailsCard} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

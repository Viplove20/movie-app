import React, { Component } from 'react';
import NavBar from '../navBar/navBar';
import '../detailsCard/detailsCard.css';

class DetailsCard extends Component {
    state = {
        res: {}
    }
    
    async componentDidMount() {
        console.log(this.props.location.state.type);
        var id = this.props.location.state.id;
        if(this.props.location.state.type=="tv"){
            var url = "https://api.themoviedb.org/3/tv/" + id + "?api_key=f9de5e7cc8ab345c4f79d2761b5f77a4&language=en-US";
        }
        else{
            var url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=f9de5e7cc8ab345c4f79d2761b5f77a4&language=en-US";   
        }
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ res: data })
    }

    watchClickHandler=()=>{
        if(this.props.location.state.type=="tv"){
            var title=this.state.res.name;
        }
        else{
            var title=this.state.res.original_title;
        }

         const videoUrl="https://www.youtube.com/results?search_query="+title+"+trailer"
         window.open(videoUrl) } 

    //{this.state.res.id}
    render() {
        var movieData= this.state.res;
        var posterPath= "http://image.tmdb.org/t/p/w185/"+movieData.poster_path;
        
        //console.log(this.state.res.genres[0]);
        //<NavBar></NavBar>
        return (
            <div className='searchPageContainer'>
                <div className='poster' style={{ backgroundImage: `url(${posterPath})` }}>
                {this.props.location.state.type=="tv" ? <div className='movieTitle'>{movieData.name}</div> : <div className='movieTitle'>{movieData.original_title}</div>}
                    
                </div>
                <div className='details'>
                    <div className='title'>{movieData.original_title}</div>
                    <table>
                        <tr>
                            <th>Rating </th>
                            <td>{movieData.vote_average} ★</td>
                        </tr>
                        <tr>
                            <th>Plot </th>
                            <td>{movieData.overview}</td>
                        </tr>
                        <tr>
                            <th>Runtime </th>
                            <td>{movieData.runtime}</td>
                        </tr>
                    </table>
                </div>
                <div className='extraDetails'>
                    <table>
                        <tr>
                            <th>Release Date </th>
                            <td>{movieData.release_date}</td>
                        </tr>
                        <tr>
                            <th>imdb ID </th>
                            <td>{movieData.id}</td>
                        </tr>
                        
                    </table>
                    <button type="button" class="btn btn-primary" onClick={this.watchClickHandler}>Watch Trailer</button>
                </div>
            </div>
        )
    }
}

export default DetailsCard;
import React, {Component} from 'react';
import { Redirect , withRouter} from 'react-router';



class SearchBar extends Component{
    state={
        searchInput:"",
        inputResponse: {},
        redirect: false
    }

    searchInputHandler=(e) => {
        this.setState({searchInput: e.target.value});
        }

    async searchClickHandler(e){
        e.preventDefault();
        var inputItem= this.state.searchInput;
        //const res = await fetch("https://www.omdbapi.com/?s="+inputItem+"&apikey=2c549349");
        const res = await fetch("https://api.themoviedb.org/3/search/movie?api_key=f9de5e7cc8ab345c4f79d2761b5f77a4&query="+inputItem)
        const data = await res.json();
        this.setState({inputResponse: data});
        this.setState({redirect: true});
        
        }
    
    toggleRedirect(){
        this.setState({redirect:false})
    }

    render(){
        if(this.state.redirect){
            this.toggleRedirect();
            return (
                <div>
                <Redirect push to={{pathname:"/movies", state: {res:this.state.inputResponse}}} />
                </div>
            );
            
        }
        
        return (
            <form class="form-inline my-2 my-lg-0">
                        <input class="form-control" 
                        type="text" 
                        placeholder="Search" 
                        aria-label="Search" 
                        value={this.state.searchInput}
                        onChange={this.searchInputHandler}
                        />
                        <button class="btn btn-danger my-2 my-sm-0" 
                        type="button" 
                        onClick={(e) => this.searchClickHandler(e)} href='/movies'>Search</button>
                    </form>
        );
    
}
}

export default SearchBar;
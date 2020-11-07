import React,{Component} from 'react';
import SingleCard from '../singleCard/singleCard';
import '../tvTabPage/tvTabPage.css';

class TvTabPage extends Component{
    state={
        res:[]
    }
    async componentDidMount(){
        const response = await fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=f9de5e7cc8ab345c4f79d2761b5f77a4");
        const data = await response.json();
        this.setState({res: data.results})
        
    }
    
    render(){
        var data= this.state.res;
        
    return(
        <div className={this.props.page=="home"? "TvTabPage":"TvCarouselArea"}>
        {data.map((series)=>
            <SingleCard res={series}></SingleCard>)}
        </div>
    )
    }

}

export default TvTabPage;
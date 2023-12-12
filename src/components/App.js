import React from 'react';
import movies from '../reducer';
import './App.css';
import {data} from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import { addMovies } from '../actions';
import { showToFavourites } from '../actions';


class App extends React.Component{


  componentDidMount(){
    const {store}=this.props;

    store.subscribe(()=>{
      console.log('updated!!');
      this.forceUpdate()
;    })
// API call
// dispach item
    store.dispatch(addMovies(data));
    console.log('State', this.props.store.getState());
  }

  isMovieFavourite=(movie)=>{
    const { movies } = this.props.store.getState();

    const index=movies.favourites.indexOf(movie);
    if(index!=-1){
      return true;
    }
  }

 onChangeTab=(val)=> {
  this.props.store.dispatch(showToFavourites(val))
 }
  

  render(){
    // const movies=this.props.store.getState();
    const {movies} =this.props.store.getState();//{list:[], favourites:[]}
    const {list,favourites, showFavourites}=movies; 

    console.log('Render', this.props.store.getState());
    
    const displayMovies=showFavourites? favourites: list;
    return (

       <div className="App">
        
         <Navbar/>
        <div className='main'> 
          <div className="tabs"> 
            <div className={`tab ${showFavourites? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}> Movies</div>
            <div className={`tab ${showFavourites?  'active-tabs' : ''}`} onClick={()=>this.onChangeTab(true)}>Favourite</div>
          </div>
        
          <div className='list'> 
            {displayMovies.map((movie, index)=>(<MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}/>))} 
          </div>
          {displayMovies.length===0? <div className='no-movies' > NO MOVIES TO DISPLAY. NO MOVIE IS ADDED TO FAVOURITES. </div> : null}
        </div>
      </div> 
    );
  }

}

export default App;

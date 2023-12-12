import './App.css';
import {data} from '../data';
import React from 'react';
import { addFavourite } from '../actions';
import { removeFromFavourite } from '../actions';




class MovieCard extends React.Component {

    handleFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(addFavourite(movie))
    }

    handleUnFavouriteClick=()=>{
        const {movie}=this.props;
        this.props.dispatch(removeFromFavourite(movie))
    }

    render(){
        const {movie, isFavourite}=this.props;
        return (
            <>
            <div className='left'>
              <img alt="movie-poster" src={movie.image_link} />
            </div>
            <div className='right'>
                <div className='title'>{movie.title}</div>
                <div className='plot'>{movie.plot}</div>
                <div className='footer'>
                    <div className='rating'>{movie.rating}</div>
                    {isFavourite 
                    ?<button className='unfavourite-btn' onClick={this.handleUnFavouriteClick}>Unfavourite</button>
                    :<button className='favourite-btn' onClick={this.handleFavouriteClick}>Favourite</button> 
                    }
                </div>
            </div>
            </>
          );

    }
  
}

export default MovieCard;
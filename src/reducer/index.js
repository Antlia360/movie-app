import { combineReducers } from "redux";
import { ADD_MOVIES } from "../actions";
import { ADD_TO_FAVOURITE } from "../actions";
import { REMOVE_FROM_FAVOURITE } from "../actions";
import { SHOW_FAVOURITE } from "../actions";

const initialMovieState={
    list:[],
    favourites:[],
    showFavourites: false,
    
}

//export default function movies (state=initialMovieState , action){
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    //     //{action.movies;}
    // }
    // return state;
    export function movies (state=initialMovieState , action){

    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }

        case REMOVE_FROM_FAVOURITE:
            const filteredArray=state.favourites.filter(
                movie=>movie.title !== action.movie.title
            )
            return{
                ...state,
                favourites:filteredArray
            }

        case ADD_TO_FAVOURITE:

            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }

        case SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites: action.val,
            }
            
        default:
            return state;
    }
}


const initialSearchState={
    result:{}
}
export function search (state={result:{}},action){
    return state;
}


const initialRootState={
    movies: initialMovieState,
    search: initialSearchState
}
// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies: movies(state.movies,action),
//         search:search(state.search, action),
//         // user:search(state, action)
//     }
// }

export default combineReducers({
    movies, 
    search
    })
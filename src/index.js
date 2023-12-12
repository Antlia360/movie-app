import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import { applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
//import movies from './reducer';
import rootReducer from './reducer';

//curried function
//logger(obj)
const logger=function({dispatch,getState }){
  return function(next){
    return function(action){
      //middleware code
      console.log('Action.type=', action.type);
      next(action)
    }
  }
}

const store=createStore(rootReducer, applyMiddleware(logger));
console.log('store',store);
// console.log('Before STATE',store.getState());


// // action part
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name : 'The Shawshank Redemption'}]
// })
// console.log('After STATE',store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


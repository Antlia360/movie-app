import React from 'react';
import './App.css';


class Navbar extends React.Component {
    render(){
        return (
            <div className="nav">
              <div className='search-container'> 
                <input/>
                <button className='search-button'> Search </button>
              </div>
            </div>
          );

    }
  
}

export default Navbar;
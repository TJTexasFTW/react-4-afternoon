import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import routes from "./routes";  
// import student from "./components/Student/Student"
// import Link from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <Router> 
      <div>
        <nav className='nav'>
        {/* <routes /> */}
          <div>WestSide University</div> 
          <div className='link-wrap'>
              {/* <div className='links'>Home</div>
              <div className='links'>About</div>  */}
                <Link to="/" className="links">Home</Link>
                <Link to="/about" className="links">About</Link>
          </div>
        </nav>
    {routes}
    
    </div>
    </Router>

    )
  }
}
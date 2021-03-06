import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {

  render() {    

    return (    // bootstrap css si link pentru home
      <div className="cotainer">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">   
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/Hotels" className="nav-link">
            Hotels
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
    
        </li>
      </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default withRouter(Landing)
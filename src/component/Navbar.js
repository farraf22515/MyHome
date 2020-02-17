import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">Home1</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/month">Month</Link>
            </li>
            <li className="nav-item">
              <Link to="/converToSheet" >ConvertToSheet</Link>
            </li>
            <li className="nav-item">
              <Link to="/setting" >Setting</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar
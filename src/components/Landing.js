import React, { Component } from 'react'

class Landing extends Component { 
  render() {
    return (
      <div className="Home">
        <div className="layer">
          <img className="homeIMG" src={require("./images/boat.gif")} ></img> 
          </div>
           <h1 className="centered">WELCOME</h1>
           <p className="pcenter">--Hotell app--</p>
          
          </div>
    )
  }
}

export default Landing
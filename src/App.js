import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import FormH from './components/FormH'
import Hotels from './components/Hotels'
import Profile from './components/Profile'
import Footer from './components/Footer'
import './App.css'


class App extends Component {          //pagina principala unde componentele se afiseaza
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/Hotels" component={Hotels} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/FormH" component={FormH} /> 
          </div>
         <Footer/>
        </div>
      </Router>
    )
  }
}
export default App

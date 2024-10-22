import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link, 
} from "react-router-dom";


export default class App extends Component {

  state={progress:0}
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}

      />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} country="us" category="general" /></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} country="us" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} country="us" category="entertainment" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} country="us" category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} country="us" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} country="us" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} country="us" category="technology" /></Route>
          </Switch>

        </Router>
      </>
    )
  }
}

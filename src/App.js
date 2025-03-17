import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = { progress: 0 };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <Router>
        {/* ✅ Light but visible background applied */}
        <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh", paddingBottom: "20px" }}>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />

          <div className="container py-4">
            <Routes>
              <Route path="/" element={<News key="general" setProgress={this.setProgress} country="us" category="general" />} />
              <Route path="/business" element={<News key="business" setProgress={this.setProgress} country="us" category="business" />} />
              <Route path="/entertainment" element={<News key="entertainment" setProgress={this.setProgress} country="us" category="entertainment" />} />
              <Route path="/health" element={<News key="health" setProgress={this.setProgress} country="us" category="health" />} />
              <Route path="/science" element={<News key="science" setProgress={this.setProgress} country="us" category="science" />} />
              <Route path="/sports" element={<News key="sports" setProgress={this.setProgress} country="us" category="sports" />} />
              <Route path="/technology" element={<News key="technology" setProgress={this.setProgress} country="us" category="technology" />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

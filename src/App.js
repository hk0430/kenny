import React, { Component } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About id="about" />
        <Skills id="skills" />
        <Experience id="experience" />
      </div>
    );
  }
}

export default App;
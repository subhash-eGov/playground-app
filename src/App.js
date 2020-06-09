import React from 'react';

import "./App.css";

import Name from './components/Name';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Project from './components/Project';
import SkillSet from './components/SkillSet';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Name/>
        <Profile/>
      </div>
      <Project/>
      <About/>
      <div className="Header">
        <Experience/>
        <Education/>
      </div>
      <SkillSet/>
    </div>
  );
}

export default App;

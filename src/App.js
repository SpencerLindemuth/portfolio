import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/ViewComponents/navBar'
import SectionOne from './Components/ContentComponents/sectionOne'
import SectionTwo from './Components/ContentComponents/sectionTwo'
import SectionThree from './Components/ContentComponents/sectionThree'

function App() {
  return (
    <div className="App">
        <NavBar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/ViewComponents/navBar'
import SectionOne from './Components/ContentComponents/sectionOne'
import SectionTwo from './Components/ContentComponents/sectionTwo'
import SectionThree from './Components/ContentComponents/sectionThree'

export default class App extends React.Component {

  slowScroll = () => {
      let elements;
      let windowHeight;
    
      function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
      }
    
      function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
          let element = elements[i];
          let positionFromTop = elements[i].getBoundingClientRect().top;
          console.log("top", positionFromTop)
          let positionFromBottom = elements[i].getBoundingClientRect().bottom;
    
          if(positionFromTop - windowHeight <= 0 && positionFromBottom > 0) {
            element.classList.add('fade-in-element');
            element.classList.remove('hidden');
          }
          else if(positionFromBottom * windowHeight >=0 && positionFromTop - windowHeight <= 0){
            element.classList.add('fade-in-element-top');
            element.classList.remove('hidden');
          }
          if(positionFromTop - windowHeight > 0){
            element.classList.add('hidden');
            element.classList.remove('fade-in-element');
            element.classList.remove('fade-in-element-top');
          }
          if(positionFromBottom < 0){
            element.classList.add('hidden');
            element.classList.remove('fade-in-element');
            element.classList.remove('fade-in-element-top');
          }
        }
      }
    
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    
      init();
      checkPosition();
  }

  render(){
    return (
      <div className="App">
          <NavBar />
          <SectionOne slowScroll={this.slowScroll} />
          <SectionTwo />
          <SectionThree />
      </div>
    );
  }

  componentDidMount = () => {
    this.slowScroll()
  }
}

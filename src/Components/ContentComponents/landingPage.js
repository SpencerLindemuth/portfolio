import React from 'react'
import NavBar from '../ViewComponents/navBar'

export default class LandingPage extends React.Component{

    scrollClick = (ev) => {
        switch(ev.target.innerText){
            case "Projects": 
                let projects = document.getElementById("project-div")
                projects.scrollIntoView({behavior: "smooth"})
                break;
            case "About": 
                let about = document.getElementById("about-div")
                about.scrollIntoView({behavior: "smooth"})
                break;
            case "Resume":
                let resume = document.getElementById("resume-div")
                resume.scrollIntoView({behavior: "smooth"})
                break;
            case "Contact":
                let contact = document.getElementById("contact-div")
                contact.scrollIntoView({behavior: "smooth"})
                break;
            default:
                let arrow = document.getElementById("project-div")
                arrow.scrollIntoView({behavior: "smooth"})
                break;
        }

    }


    render(){
        return(
            <div>
                <NavBar />
                <div id="landing">
                    <div id="page-nav">
                        <span onClick={this.scrollClick}>Projects</span>
                        <span> | </span>
                        <span onClick={this.scrollClick}>About</span>
                        <span> | </span>                    
                        <span onClick={this.scrollClick}>Resume</span>
                        <span> | </span>
                        <span onClick={this.scrollClick}>Contact</span>
                    </div>
                    <div onClick={this.scrollClick} id="arrow" class="arrow-bounce"></div>
                </div>
            </div>
        )
    }
}
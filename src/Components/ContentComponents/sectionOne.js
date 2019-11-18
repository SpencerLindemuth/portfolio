import React from 'react'
import ProjectCard from '../ViewComponents/projectCard'
import artsyfartsy from '../../Images/artsyfartsy.PNG'
import csschool from '../../Images/csschool.PNG'
import hilo from '../../Images/hilo.PNG'
import starvideo from '../../Images/starvideo.mp4'

export default class sectionOne extends React.Component{

    state = {
        projects: [
            {   
                id: 1,
                title: "CSSchool",
                image: csschool,
                description: "A website designed to teach CSS basics to people of all ages in an interactive learning environment",
                url: "https://CSSchool.herokuapp.com",
                gitUrl: "https://github.com/spencerlindemuth/CSSchool-frontend",
                tech: [{name: "JavaScript", use: "Dynamically add CSS styles on button click to Window stylesheet and general navigation"}, {name: "React", use: "Full front-end architecture creating single page application and render lessons"}, {name: "Ruby On Rails", use: "Restful API serves lesson components, including html and css to be applied and rendered on page load"}, {name: "JWT token based Authentication", use: "Securely login user accounts and verify accounts to save user progress"}, {name: "React-Markdown", use: "Renders plain text as HTML elements"}, {name: "CSS", use: "Site-wide styling and mobile responsiveness"}, {name: "HTML", use: "Site Structure and lesson formatting"}, {name: "PostgreSQL", use: "Store lesson text, templates, button text, HTML elements in plain-text, button action CSS, and any predefined CSS rules"}, {name: "Heroku", use: "Dual Dynos hosting React front-end as well as Rails API"}]
            },
            {
                id: 2,
                title: "Hi-Lo",
                image: hilo,
                description: "A turn based, two player game based on the popular card game Acey Deucey",
                url: "http://hi-lo.netlify.com",
                gitUrl: "https://github.com/marth00165/HILO-front-end",
                tech: [{name: "JavaScript", use: "Created vanilla JavaScript single page application, all game logic, game flow, effects, and animations"}, {name: "Ruby on Rails", use: "Restful API endpoint for serving and storing names and high scores"} , {name: "CSS", use: "Pure CSS for full site styling and mobile responsiveness"}, {name: "HTML", use: "Site structure"}, {name: "Heroku", use: "Deployment space for Rails API"}, {name: "PostgreSQL", use: "Store usernames and high scores"}, {name: "Netlify", use: "Hosting JavaScript front end"}]

            },
            {
                id: 3,
                title: "ArtsyFarsty", 
                image: artsyfartsy,
                description: "A website that allows users to create their own digital gallery of select works from the METTM museum",
                url: "https://ArtsyFartsy.herokuapp.com",
                gitUrl: "https://github.com/SpencerLindemuth/ArtsyFartsy-Frontend",
                tech: [{name: "React", use: "Create dynamic single page application showcasing users gallery as well as pieces and piece show pages"}, {name: "Ruby on Rails", use: "Serve artworks from the MET open access API using RESTful API endpoints as well as filter pieces and serve users owned pieces"}, {name: "PostgreSQL", use: "Store user pieces and all public domain works in the MET open access program"}, {name: "JWT token based authentication", use: "Securely log users in and limit access to API nodes"}, {name: "Heroku", use: "Host Ruby API and React front-end"}, {name: "CSS", use: "Pure CSS used for all site elements and styling"}, {name: "React Draggable", use: "Drag pieces and place them on users gallery wall, combined with browser localstorage to record location and persist gallery layout"}, {name: "HTML", use: "Site structure"}, {name: "JavaScript", use: "Handle API requests and handles filtering of Artworks in browse page"}]

            }],

        expanded: false,
        expandedId: null,
        }


    expandedDiv = () => {
        let filter = this.state.projects.filter(project => project.id === this.state.expandedId)
        let filteredProject = filter[0]
        return <div id="expandedCard"><ProjectCard expandedBool={this.state.expanded} title={filteredProject.title} background={filteredProject.image} id={filteredProject.id} description={filteredProject.description} url={filteredProject.url} gitUrl={filteredProject.gitUrl} technology={filteredProject.tech} closeClick={this.closeClick}/></div>
    }

    closeClick = () => {
        this.setState({
            expanded: false,
            expandedId: null,
        })
        let projectDiv = document.getElementById("one");
        projectDiv.scrollIntoView();
    }

    render(){
        return (
            <div className="parallax one" id="project-div">
                <div className="content">
                    <div className="hidden">
                        <h1>Projects</h1>
                        {!this.state.expanded ? <div id="projectGrid">{this.state.projects.map(project => {
                            return <ProjectCard title={project.title} background={project.image} id={project.id} description={project.description} url={project.url} gitUrl={project.gitUrl} moreClick={this.moreClick}/>
                        })}</div> : this.expandedDiv()}
                    </div>
                </div>
            </div>
        )
    }
    moreClick = (target) => {
        this.setState({
            expanded: true,
            expandedId: target
        })
    }
}



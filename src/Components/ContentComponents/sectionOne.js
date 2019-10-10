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
                tech: [{name: "JavaScript", use: "Dynamically add CSS styles on button click to Window stylesheet and general navigation"}, {name: "React", use: "Full front-end architecture creating single page application and render lessons"}, {name: "Ruby On Rails", use: "Restful API serves lesson components, including html and css to be applied and rendered on page load"}, {name: "JWT Authentication", use: "Securely login user accounts and verify accounts to save user progress"}, {name: "React-Markdown", use: "Renders plain text as HTML elements"}, {name: "CSS", use: "Site-wide styling and mobile responsiveness"}, {name: "HTML", use: "Site Structure and lesson formatting"}]
            },
            {
                id: 2,
                title: "Hi-Lo",
                image: hilo,
                description: "A turn based, two player game based on the popular card game Acey Deucey",
                url: "http://hi-lo.netlify.com",
                gitUrl: "https://github.com/marth00165/HILO-front-end"

            },
            {
                id: 3,
                title: "ArtsyFarsty", 
                image: artsyfartsy,
                description: "A website that allows users to create their own digital gallery of select works from the METTM museum",
                url: "https://ArtsyFartsy.herokuapp.com",
                gitUrl: "https://github.com/SpencerLindemuth/ArtsyFartsy-Frontend"

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
    }

    render(){
        return (
            <div className="parallax One">
                <video src={starvideo} type="video/mp4" autoPlay={true} id="bg-one" loop={true} preload={true}/>
                <div className="content hidden">
                    <h1>Projects</h1>
                    {!this.state.expanded ? <div id="projectGrid">{this.state.projects.map(project => {
                        return <ProjectCard title={project.title} background={project.image} id={project.id} description={project.description} url={project.url} gitUrl={project.gitUrl} moreClick={this.moreClick}/>
                    })}</div> : this.expandedDiv()}
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



import React from 'react'
import ProjectCard from '../ViewComponents/projectCard'
import artsyfartsy from '../../Images/artsyfartsy.PNG'
import csschool from '../../Images/csschool.PNG'
import hilo from '../../Images/hilo.PNG'

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
                tech: ["JavaScript", "React", "Ruby On Rails Backend API", "JWT Authentication", "React-Markdown", "CSS", "HTML"]
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
        return <div id="expandedCard"><ProjectCard title={filteredProject.title} background={filteredProject.image} id={filteredProject.id} description={filteredProject.description} url={filteredProject.url} gitUrl={filteredProject.gitUrl} technology={filteredProject.tech}/></div>
    }

    render(){
        return (
            <div className="parallax One">
                <div className="content">
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



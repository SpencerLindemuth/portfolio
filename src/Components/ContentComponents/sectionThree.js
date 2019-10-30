import React from 'react'
import Resume from '../../Images/Resume.pdf'

let SectionThree = (props) => {
    return (
        <div className="parallax Three" id="resume-div">
            <div className="content" id="resume-container">
                <div className="hidden">
                    <h1>Resume</h1> 
                    <iframe id="resume" src={Resume} title="resume" frameBorder="0" scrolling="auto" height="1200px"/>
                    <a href="https://learn.co/bold-memory-9937/resume" alt="link to resume" id="resume-button"><button className="next-button">View</button></a>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
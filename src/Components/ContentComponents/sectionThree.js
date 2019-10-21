import React from 'react'
import Resume from '../../Images/Resume.pdf'

let SectionThree = (props) => {
    return (
        <div className="parallax Three">
            <div className="content hidden">
            <h1>Resume</h1> 
            <iframe id="resume" src={Resume} title="resume" frameBorder="0" scrolling="auto" height="1200px"/>
            </div>
        </div>
    )
}

export default SectionThree
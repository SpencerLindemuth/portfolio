import React from 'react'
import StarSolid from '../../Images/star-solid.svg'
import StarRegular from '../../Images/star-regular.svg'

let SectionTwo = (props) => {
    return (
        <div className="parallax Two" id="about-div">
            <div className="content hidden">
            <h1>About</h1>
            <h2 id="about">
                I'm a JavaScript, React.js, and Rails web developer based in Seattle with some experience in Python, Java (and Android), C++, and PHP. I started programming in 2010 at the University of Michigan and have been involved in tech ever since. Whether working in the industry, spending my free time and days off practicing a new language, reading documentation or teaching myself Android app development, my brain craves the challenge of learning and problem solving while having a tangible result to be proud of.  
            </h2>
            <div id="skills">
                <h1>Skills</h1>
                <ul id="skillsList">
                    <li>
                        <h3>JavaScript</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>Rails</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>React</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>Python</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarRegular}/><img src={StarRegular}/><img src={StarRegular}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>HTML & CSS</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>Graphic Design</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/><img src={StarRegular}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>Photoshop</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>Git</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>Relational Databases</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarSolid}/><img src={StarSolid}/><img src={StarRegular}/><img src={StarRegular}/></span>
                    </li>
                    <li>
                        <h3>Java</h3>
                        <span className="rating"><img src={StarSolid}/><img src={StarRegular}/><img src={StarRegular}/><img src={StarRegular}/><img src={StarRegular}/></span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default SectionTwo
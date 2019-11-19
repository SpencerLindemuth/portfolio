import React from 'react'
import StarSolid from '../../Images/star-solid.svg'
import StarRegular from '../../Images/star-regular.svg'

let SectionTwo = (props) => {
    return (
        <div className="parallax Two" id="about-div">
            <div className="content">
                <div className="hidden">
                    <h1>About</h1>
                    <h2 id="about">
                        I'm a JavaScript, React.js, and Rails full stack engineer based in Seattle. I started programming in 2010 at the University of Michigan and have been involved in tech ever since. I'm currently looking for my next job in the industry and I spend my free time and days off practicing new languages, reading books or documentation, playing video games, taking photos, working on cars, or woodworking. The creative side of my brain loves expressing itself through my designs and photographs, while the other half craves the challenge of problem solving, chasing tangible results, and working with my hands.  These two halves combined are what make me an excellent full stack software engineer!
                    </h2>
                    {/* <div id="skills">
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
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
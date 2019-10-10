import React from 'react'

let ProjectCard = (props) => {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <img onClick={() => window.location.href=props.url} src={props.background}/>
    <p>{props.description} &nbsp; {props.expandedBool ? <span onClick={() => props.closeClick()} className="more">Close</span> : <span onClick={() => props.moreClick(props.id)} className="more">More &#8594;</span>}</p>
            {props.technology ? <h1>Technologies</h1> : null}
            <ul className="technologyList">
                {props.technology ? props.technology.map(tech => {
                    return( 
                        <li>
                            <h2>{tech.name}</h2>
                            <p className="tech-use">{tech.use}</p>
                        </li>
                )}) : null}
            </ul>
            <a href={props.url}>Website</a><a href={props.gitUrl}>Github</a>{props.expandedBool ? <a id="close-link" onClick={props.closeClick}>Close</a> : null }
        </div>
    )
}

export default ProjectCard
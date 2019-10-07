import React from 'react'
import github from '../../Images/Social/social-1_round-github.svg'
import instagram from '../../Images/Social/social-1_round-instagram.svg'
import linkedin from '../../Images/Social/social-1_round-linkedin.svg'
import rss from '../../Images/Social/social-2_round-rss.svg'


let NavBar = (props) => {
    return(
        <div id="navbar">
            <div id="navbarName">Spencer Lindemuth</div>
            <div id="navbarLinks">
                <img src={linkedin} alt="linkedin link" onClick={() => window.location.href="https://linkedin.com/in/spencer-lindemuth"}/>    
                <img src={github} alt="github link" onClick={() => window.location.href="https://github.com/spencerlindemuth"}/>    
                <img src={instagram} alt="instagram link" onClick={() => window.location.href="https://www.instagram.com/spencer.by.nature/"}/> 
                <img src={rss} alt="blog link" onClick={() => window.location.href="https://dev.to/spencerlindemuth"}/>   
            </div>
        </div>
    )
}

export default NavBar
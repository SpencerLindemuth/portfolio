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
                <a href="https://linkedin.com/in/spencer-lindemuth"><img src={linkedin} alt="linkedin link"/></a>    
                <a href="https://github.com/spencerlindemuth"><img src={github} alt="github link"/></a>   
                <a href="https://www.instagram.com/spencer.by.nature/"><img src={instagram} alt="instagram link"/></a> 
                <a href="https://dev.to/spencerlindemuth"><img src={rss} alt="blog link"/></a>   
            </div>
        </div>
    )
}

export default NavBar
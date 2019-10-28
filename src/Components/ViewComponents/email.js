import React from 'react'

let email = (props) => {

    return(
        <div id="email-field">
            <input type="text" placeholder="Email Address" className="contact-input" id="email" value={props.value} onChange={props.handleChange}></input>
            <br />
            <button type="button" onClick={() => props.next(3)}>Next -></button>
        </div>
    )
}

export default email
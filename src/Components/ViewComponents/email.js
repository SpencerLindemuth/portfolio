import React from 'react'

let email = (props) => {

    return(
        <div id="email-field">
            <input type="text" placeholder="Email Address*" className="contact-input" id="email" value={props.handleValue} onChange={props.handleChange}></input>
            <br />
            <button type="button" className="next-button" onClick={props.prev}>Prev</button>
            <button type="button" className="next-button" onClick={props.next}>Next</button>
        </div>
    )
}

export default email
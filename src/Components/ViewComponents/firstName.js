import React from 'react'

let firstName = (props) => {

    return(
        <div id="firstname-field">
            <input type="text" className="contact-input" placeholder="First Name*" id="firstName" value={props.handleValue} onChange={props.handleChange} onBlur={props.handleBlur}></input>
            <br />
            <button type="button" className="next-button" onClick={props.next}>Next</button>
        </div>
    )
}

export default firstName
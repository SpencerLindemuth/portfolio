import React from 'react'

let firstName = (props) => {

    return(
        <div id="firstname-field">
            <h6>* required</h6>
            <input type="text" className="contact-input" placeholder="First Name" id="firstName" value={props.handleValue} onChange={props.handleChange}></input>
            <br />
            <button type="button" onClick={props.next}>Next -></button>
        </div>
    )
}

export default firstName
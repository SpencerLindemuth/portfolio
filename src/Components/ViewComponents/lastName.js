import React from 'react'

let lastName = (props) => {

    return(
        <div id="lastname-field">
            <input type="text" placeholder="Last Name*" className="contact-input" id="lastName" value={props.handleValue} onChange={props.handleChange}></input>
            <br />
            <button type="button" className="next-button" onClick={props.prev}>Prev</button>
            <button type="button" className="next-button" onClick={props.next}>Next</button>
        </div>
    )
}

export default lastName
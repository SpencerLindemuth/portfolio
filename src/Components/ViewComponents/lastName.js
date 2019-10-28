import React from 'react'

let lastName = (props) => {

    return(
        <div id="lastname-field">
            <input type="text" placeholder="Last Name" className="contact-input" id="lastName" value={props.value} onChange={props.handleChange}></input>
            <br />
            <button type="button" onClick={() => props.next(2)}>Next -></button>
        </div>
    )
}

export default lastName
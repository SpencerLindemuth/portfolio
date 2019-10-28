import React from 'react'

let phone = (props) => {

    return(
        <div id="phone-field">
            <input type="text" placeholder="Phone Number" className="contact-input" id="phone" value={props.value} onChange={props.handleChange}></input>
            <br />
            <button type="button" onClick={() => props.next(4)}>Next -></button>
        </div>
    )
}

export default phone
import React from 'react'

let phone = (props) => {

    return(
        <div id="phone-field">
            <input type="text" placeholder="Phone Number" className="contact-input" id="phone" value={props.value} onChange={props.handleChange}></input>
            <br />
            <button type="button" className="next-button" onClick={props.next}>Next -></button>
        </div>
    )
}

export default phone
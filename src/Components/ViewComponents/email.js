import React from 'react'

let email = (props) => {

    return(
        <div id="email-field">
            <input type="text" placeholder="Email Address" id="email" value={props.value} onChange={props.handleChange}></input>
            <button type="button" onClick={() => props.next(3)}>Next -></button>
        </div>
    )
}

export default email
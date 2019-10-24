import React from 'react'

let firstName = (props) => {

    return(
        <div id="firstname-field">
            <input type="text" placeholder="First Name" id="firstName" value={props.handleValue} onChange={props.handleChange}></input>
            <button type="button" onClick={props.next}>Next -></button>
        </div>
    )
}

export default firstName
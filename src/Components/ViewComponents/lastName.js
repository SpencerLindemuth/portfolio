import React from 'react'

let lastName = (props) => {

    return(
        <div id="lastname-field">
            <input type="text" placeholder="Last Name" id="lastName" value={props.value} onChange={props.handleChange}></input>
            <button type="button" onClick={() => props.next(2)}>Next -></button>
        </div>
    )
}

export default lastName
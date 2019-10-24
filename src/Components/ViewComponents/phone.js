import React from 'react'

let phone = (props) => {

    return(
        <div id="phone-field">
            <input type="text" placeholder="Phone Number" id="phone" value={props.value} onChange={props.handleChange}></input>
            <button type="button" onClick={() => props.next(4)}>Next -></button>
        </div>
    )
}

export default phone
import React from 'react'

let message = (props) => {

    return(
        <div id="firstname-field">
            <input type="textarea" placeholder="Message" id="message" value={props.value} onChange={props.handleChange}></input>
            <button type="button" onClick={() => props.submit()}>Submit</button>
        </div>
    )
}

export default message
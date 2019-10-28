import React from 'react'

let message = (props) => {

    return(
        <div id="firstname-field">
            <input type="textarea" placeholder="Message" id="message" value={props.value} onChange={props.handleChange}></input>
            <br />
            <button type="button" className="next-button" onClick={() => props.submit()}>Submit</button>
        </div>
    )
}

export default message
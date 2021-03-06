import React from 'react'

let message = (props) => {

    return(
        <div id="message-field">
            <textarea placeholder="Message" id="message" value={props.handleValue} onChange={props.handleChange} onBlur={props.handleBlur}></textarea>
            <br />
            <button type="button" className="next-button" onClick={props.prev}>Prev</button>
            <button type="button" className="next-button" onClick={() => props.submit()}>Submit</button>
        </div>
    )
}

export default message
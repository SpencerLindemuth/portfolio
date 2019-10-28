import React from 'react'

let submitted = (props) => {

    return(
        <div id="submitted">
            <h2>Thank you {props.firstName} {props.lastName}!</h2>
            <p>Your message has been sent successfully!<br />I'll be in touch soon.</p>
        </div>
    )
}

export default submitted
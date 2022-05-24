import React from "react";
import PropTypes from 'prop-types'

function Loading({message}){
    return (
        <div className={"loading"}>
            {message}
        </div>
    )
}

Loading.propTypes = {
    message: PropTypes.string.isRequired
}

export default Loading;
import React from "react"
import "./style.scss"

function Button(props) {
    return (
        <button className="button uk-button uk-button-secondary" onClick={props.click}>{props.name}</button>
    )
};

export default Button;
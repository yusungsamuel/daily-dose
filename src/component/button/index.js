import React from "react"
import "./style.scss"

function Button(props) {
    return (
        <button className="button uk-button uk-button-primary" onClick={props.click}>{props.name}</button>
    )
};

export default Button;
import React from "react";
import "./style.scss";

export default function NewsCard(props) {
    return (
        <div class={"blog-card " + props.alt} >
            <div class="meta">
                <div class="photo" style={{ "background-image": "url(" + props.image + ")" }}></div>
                <ul class="details">
                    <li class="author">Author: {props.author}</li>
                    <li class="date">{props.time}</li>
                    <li class="tags">
                        Source: {props.source}
                    </li>
                </ul>
            </div>
            <div class="description">
                <h1>{props.title}</h1>
                <h2>Description</h2>
                <p> {props.description}</p>
                <p class="read-more">
                    <a href={props.url}>Read More</a>
                </p>
            </div>
        </div>
    )
}
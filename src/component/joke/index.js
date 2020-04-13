import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../card"
import API from "../../utilities/API"
import axios from "axios"
import Button from  "../button"

export default function Joke() {
    const [theJoke, setTheJoke] = useState(null);

    useEffect(() => {
        let cancel
        API.joke()
            .then(response => {
                setTheJoke(response.data.content)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }, [])

    const handleNewJoke = () => {
        let cancel
        API.joke()
            .then(response => {
                setTheJoke(response.data.content)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }

    return (
        <Card>
            <p className="content">{theJoke}</p>
            <Button
                name="new joke"
                click={handleNewJoke}
            ></Button>
        </Card>
    )
};
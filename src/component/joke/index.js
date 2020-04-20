import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "../card"
import API from "../../utilities/API"
import axios from "axios"
import Button from "../button"

export default function Joke() {
    const [theJoke, setTheJoke] = useState(null);

    useEffect(() => {
        let cancel
        API.joke()
            .then(response => {
                let joke = response.data.content;
                if (joke.includes("?")) {
                    setTheJoke(joke.split("?"))
                }
                else {
                    setTheJoke([joke, "This is not a two part joke!"])
                }
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }, [])

    const handleNewJoke = () => {
        let cancel
        API.joke()
            .then(response => {
                let joke = response.data.content;
                if (joke.includes("?")) {
                    setTheJoke(joke.split("?"))
                }
                else {
                    setTheJoke([joke, "This is not a two part joke!"])
                }
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }

    return (
        <Card num="1">
            {
                theJoke && theJoke.map((part, i) => {
                    if (i === 0) {
                        return (
                            <div className="front">
                                <p>{part}</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="back">
                                <p>{part}</p>
                                <Button 
                                    click={handleNewJoke}
                                    name="New Joke"
                                ></Button>
                            </div>
                        )
                    }
                })
            }
        </Card>
    )
};
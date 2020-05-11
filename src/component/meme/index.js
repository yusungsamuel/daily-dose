import React, { useState, useEffect } from 'react';
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";
import Card from "../card";
import Button from "../button";

export default function Meme() {
    const [theMeme, setTheMeme] = useState(null);

    useEffect(() => {
        let cancel
        API.meme()
            .then(response => {
                // console.log(response.data.url)
                setTheMeme(response.data.url)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }, []);

    const handleClick = () => {
        let cancel
        API.meme()
            .then(response => {
                // console.log(response.data.url)
                setTheMeme(response.data.url)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }


    return (
        <Card num="meme">
            <div className="front">
                <img src={theMeme} />
            </div>
            <div className="back">
                <Button click={handleClick} name="New Meme"></Button>
            </div>

        </Card>
    )
}
import React, { useState, useEffect } from 'react';
import "./style.scss";
import API from  "../../utilities/API";
import axios from "axios";
import Card from "../card";
import Button from "../button";

export default function Meme (){
    const [memeArr, setMemeArr] = useState(null);
    const [randomNumber, setRandomNumber] = useState(0)

    useEffect(() => {
        let cancel
        API.meme()
            .then(response => {
                console.log(response.data.data.memes)
                setMemeArr(response.data.data.memes)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }, []);

    const handleClick = ()=>{
        setRandomNumber(Math.floor(Math.random() *100))
    }

    return (
        <Card>
            {memeArr!=null? <img src={memeArr[randomNumber]["url"]}/> : <div></div>}
            <Button click={handleClick} name="New Meme"></Button>
        </Card>
    )
}
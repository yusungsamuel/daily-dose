import React, { useState, useEffect } from 'react';
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";
import Card from "../card";
import Button from "../button";

export default function News() {
    const [theNews, setTheNews] = useState([]);
    const [num, setNum] = useState(0);

    useEffect(() => {
        let cancel
        API.news()
            .then(response => {
                console.log(response.data.articles)
                setTheNews(response.data.articles)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }, []);

    const handleClick = () => {
       setNum(num+1)
    }


    return (
        <Card>
            {theNews.length !== 0 &&
                <div>
                    <header>{theNews[num]["title"]}</header>
                    <img src={theNews[num]["urlToImage"]} />
                    <a href={theNews[num]["url"]}>Original Article</a>
                </div>
            }
            <Button click={handleClick} name="Other News"></Button>
        </Card>
    )
}
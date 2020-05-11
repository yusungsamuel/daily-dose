import React, { useState, useEffect } from 'react';
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";
import NewsCard from "../newsCard";
import Button from "../button";

export default function News() {
    const [theNews, setTheNews] = useState([]);
    const [num, setNum] = useState(2);

    useEffect(() => {
        let cancel
        API.news()
            .then(response => {
                // console.log(response.data.articles)
                setTheNews(response.data.articles)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
    }, []);

    const handleClick = () => {
       setNum(num+1)
    }


    return (
        theNews.length !== 0 &&
        <NewsCard
            author={theNews[num]["author"]}
            title={theNews[num]["title"]}
            image={theNews[num]["urlToImage"]}
            description={theNews[num]["description"]}
            url={theNews[num]["url"]}
            time={theNews[num]["publishedAt"]}
            source={theNews[num]["source"]["name"]}
        >
        </NewsCard>
        
    )
}

/* {theNews.length !== 0 &&
                <div>
                    <header>{theNews[num]["title"]}</header>
                    <p>Author: {theNews[num]["author"]}</p>
                    <p>Source: {theNews[num]["source"]["name"]}</p>
                    <p>Description: {theNews[num]["description"]}</p>
                    <a href={theNews[num]["url"]}>Original Article</a>
                </div>
            }
            <Button click={handleClick} name="Other News"></Button> */
import axios from "axios"
require("dotenv").config();

const API = {
    joke: () => {
        return (
            // axios.get("https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,racist,sexist")
            //     .then((response) => {
            //         console.log(response)
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })
            axios({
                "method": "GET",
                "url": "https://joke3.p.rapidapi.com/v1/joke",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "joke3.p.rapidapi.com",
                    "x-rapidapi-key": "9cf96071a0msh05018541cfe2cf9p1c3c4ejsn0690ae38fe29"
                }
            })

        )

    },
    meme: () => {
        return (
            axios({
                "method": "GET",
                "url": "https://meme-api.herokuapp.com/gimme"
            })
        )
    },
    news: () => {
        let url = '/v2/top-headlines?' +
            'country=us&' +
            'apiKey=9e5bdc33db924cbda8063c96df4d04c3' 
            // + process.env.REACT_APP_NEWS_API_KEY;
        return axios({
            "method": "GET",
            "url": url,
            "headers": {
                'Access-Control-Allow-Origin': '*'
            }
        })
    },
    weather: (lat, long) => {
        //open weather API
        let url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&exclude=current,minutely,hourly&appid=d6ca85092b836205159ee6874c2d877e" 
        // process.env.REACT_APP_WEATHER_API_KEY

        //weather stack API
        // let url = "http://api.weatherstack.com/current?access_key=135d3da64ccdcabadcc3e8323682c039&query=" + lat + "," + long
        return axios({
            "method": "GET",
            "url": url
        })

    },
    fortuneCookie: () => {
        return (
            axios({
                "method": "GET",
                "url": "http://fortunecookieapi.herokuapp.com/v1/cookie?fortuneId=&lottoId=&lessonId=&limit="
            })
        )
    }
}


export default API;
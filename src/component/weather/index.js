import React, { useEffect, useState } from "react";
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";

export default function Weather() {
    const [lat, setLat] = useState(37.7749);
    const [long, setLong] = useState(-122.4194);
    const [daily, setDaily] = useState(null)
    const [hourly, setHourly] = useState(null)
    const [city, setCity] = useState("San Francisco")
    let date = new Date()
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success);
        }

        function success(position) {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        }

    }, [])


    useEffect(() => {
        let cancel
        API.weather(lat, long)
            .then(response => {
                console.log(response.data)
                setDaily(response.data.daily)
                setHourly(response.data.hourly)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })
        // API.reverseGeo(lat, long)
        //     .then(response => {
        //         setCity(response.data["results"][0]["components"]["town"])
        //     })
    }, [long || lat])
    const renderSwitch = (num) => {
        switch (num) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";

            case 2:
                return "Tuesday";

            case 3:
                return "Wednesday";

            case 4:
                return "Thursday";

            case 5:
                return "Friday";

            case 6:
                return "Saturday";
        }
    }

    const calculateHours = (num) => {
        if (num === 0) {
            return "12AM"
        }
        else if (num < 12) {
            return num + "AM"
        }
        else {
            return num % 12 === 0 ? "12PM" : num % 12 + "PM"
        }
    }
    return (

        <div className="weather-container">
            {hourly === null ?
                <div>The weather data for your location is currently unavailable. Please try again later</div>
                :
                <div>
                    {console.log(date)}
                    <div className="topSection">
                        <p className="city">{city}</p>
                        <p className="description">{daily[0].weather[0].description}</p>
                        <p className="temperature">{Math.round(daily[0].temp.day)}°</p>
                        <span className="date">{renderSwitch(date.getDay())} Today</span> <span className="range">{Math.round(daily[0].temp.max)} {Math.round(daily[0].temp.min)}</span>
                    </div>
                    <div className="scroll">
                        {
                            hourly.map((h, i) => {
                                if (i > 0) {
                                    date.setHours(date.getHours() + 1)
                                }
                                return (
                                    <div key={i}>
                                        <div>{i > 0 ? calculateHours(date.getHours()) : "Now"}</div>
                                        <div><img src={" http://openweathermap.org/img/wn/" + h.weather[0].icon + "@2x.png"} /></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        daily.map((d, i) => {
                            if (i === 0) return
                            let day = new Date();
                            day.setDate(day.getDate() + i)
                            return (
                                <div className="week-forecast">
                                    <div className="weekday">{renderSwitch(day.getDay())}</div>
                                    <div className="icon"><img src={" http://openweathermap.org/img/wn/" + d["weather"][0]["icon"] + "@2x.png"} /></div>
                                    <div><span className="range">{Math.round(d.temp.max)} {Math.round(d.temp.min)}</span></div>
                                </div>
                            )
                        })
                    }

                </div>
            }
        </div>
    )
}
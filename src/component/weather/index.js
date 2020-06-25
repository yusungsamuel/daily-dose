import React, { useEffect, useState } from "react";
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";

export default function Weather() {
    const [lat, setLat] = useState(37.7749);
    const [long, setLong] = useState(-122.4194);
    const [daily, setDaily] = useState(null)
    const [hourly, setHourly] = useState(null)
    const [date, setDate] = useState(new Date())
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

    return (
        <div className="weather-container">
            {hourly === null ?
                <div>The weather data for your location is currently unavailable. Please try again later</div>
                :
                <div>
                    <div className="topSection">
                        <p className="city">(City Name)</p>
                        <p className="description">{daily[0].weather[0].description}</p>
                        <p className="temperature">{Math.round(daily[0].temp.day)}°</p>
                        <span className="date">{renderSwitch(date.getDay())} Today</span> <span className="range">{Math.round(daily[0].temp.max)}{Math.round(daily[0].temp.min)}</span>
                    </div>
                    <div className="scroll">
                        {
                            hourly.map((h, i) => {

                                if ((date.getHours() + i) % 24 === 12) {
                                    return (
                                        <div key={i}>
                                            <div>{i > 0 ? ((date.getHours() + i) % 24 >= 12 ? (date.getHours() + i - 12) % 23 + "PM" : (date.getHours() + i) % 24 + "AM") : "Now"}</div>
                                            <div><img src={" http://openweathermap.org/img/wn/" + h.weather[0].icon + "@2x.png"} /></div>
                                        </div>
                                    )
                                }

                                return (
                                    <div key={i}>
                                        <div>{i > 0 ? ((date.getHours() + i) % 24 >= 12 ? (date.getHours() + i - 12) % 23 + "PM" : (date.getHours() + i) % 24 + "AM") : "Now"}</div>
                                        <div><img src={" http://openweathermap.org/img/wn/" + h.weather[0].icon + "@2x.png"} /></div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            }
        </div>
    )
}
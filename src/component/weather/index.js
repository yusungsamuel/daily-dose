import React, { useEffect, useState } from "react";
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";

export default function Weather() {
    const [lat, setLat] = useState(37.7749);
    const [long, setLong] = useState(-122.4194);
    const [daily, setDaily] = useState(null)
    const [hourly, setHourly] = useState(null)

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

    const date = new Date()
    
    console.log(date)
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
                        <span className="date">(Date): Today</span> <span className="range">({Math.round(daily[0].temp.max)} | {Math.round(daily[0].temp.min)})</span>
                    </div>
                    <div className="scroll">
                        {
                            hourly.map((h, i )=>{
                                return (
                                    <div key={i}>
                                        <div>(time)</div>
                                        <div><img src={" http://openweathermap.org/img/wn/" + h.weather[0].icon + "@2x.png"}/></div>
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
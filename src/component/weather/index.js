import React, { useEffect, useState } from "react";
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";

export default function Weather() {
    const [lat, setLat] = useState(37.7749);
    const [long, setLong] = useState(-122.4194);
    const [data, setData] = useState(null)
    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success);
        }

        function success(position){
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
        }

    }, [])
    

    useEffect(()=>{
        let cancel            
        API.weather(lat, long)
        .then(response => {
            console.log(response.data.current)
            setData(response.data.current)
            new axios.CancelToken(c => cancel = c)
            return () => cancel()
        })
    },[long||lat])

    // useEffect(()=>{
    //     let cancel            
    //     API.weather(lat, long)
    //     .then(response => {
    //         console.log(response.data)
    //         setData(response.data)
    //         new axios.CancelToken(c => cancel = c)
    //         return () => cancel()
    //     })
    // }, [])

    return (
    data === null? 
    <div>The weather data for your location is currently unavailable. Please try again later</div>
    :
    <div className="weather-card">
        <p>Current Weather: {data.weather_descriptions}<img src={data.weather_icons[0]} alt="weather icon"></img></p>
        
        <p>Temperature: {data.temperature}°C</p>
        <p>Humidity: {data.humidity}%</p>
        <p>Cloud Cover: {data.cloudcover}%</p>
    </div>
    )
}
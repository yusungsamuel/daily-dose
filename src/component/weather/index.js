import React, { useEffect, useState } from "react";
import "./style.scss";
import API from "../../utilities/API";
import axios from "axios";

export default function Weather() {
    const [lat, setLat] = useState("37.7749");
    const [long, setLong] = useState("-122.4194");

    useEffect(() => {
        let cancel

        API.weather(lat, long)
            .then(response => {
                console.log(response.data)
                new axios.CancelToken(c => cancel = c)
                return () => cancel()
            })


        navigator.geolocation.getCurrentPosition(success);

        function success(position){
            console.log(position.coords)
        }

    }, [])

    return (
        <div>
            Weather
        </div>
    )
}
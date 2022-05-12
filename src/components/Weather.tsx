import * as React from "react";
import axios from "axios";

import "../styles/Weather.css"

function Weather() {

    const datasource = 'https://api.openweathermap.org/data/2.5/onecall?lat=51.94&lon=-0.28&appid=31e877ff7e17bb13e6d7c38793c25800'

    axios.get(datasource).then(weatherdata => {
        console.log(weatherdata);
    });

    return (

      <h1>Weather data</h1>

    );

}

export default Weather;

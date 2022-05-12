import * as React from "react";
import { useState } from "react";
import axios from "axios";

import "../styles/Weather.css";

function Weather() {

    const [weather, setWeather] = useState([]);

    const datasource = "https://api.openweathermap.org/data/2.5/onecall?lat=51.94&lon=-0.28&units=metric&appid=facc6382ca0205a6bcd01e2a70b19e89"

    if(!weather.length) {
      axios.get(datasource).then( wdata => {
          console.log(wdata);
          setWeather(wdata.data);
      });
    }
    return (
        <table>
            <thead>
                <tr>
                    <th><h1>Weather data</h1></th>
                </tr>
                <tr>
                    <th>Minute</th>
                    <th>Hour</th>
                    <th>Day</th>
                </tr>
            </thead>
            <tbody>
            {weather.map(temperature =>
              <tr>
                <td>{temperature.current.temp}</td>
                <td>{temperature.hourly.temp}</td>
                <td>{temperature.daily.temp}</td>
              </tr>
                     )}
            </tbody>
        </table>
      );

}

export default Weather;

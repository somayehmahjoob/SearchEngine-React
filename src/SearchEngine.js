import React, { useState } from "react";
import axios from "axios";

import "./App.css";

function SearchEngine() {
  let [temperatureDetails, setTemperatureDetails] = useState({});
  let [city, setCity] = useState(false);
  let [display, setDisplay] = useState(false);
  let [message, setMessage] = useState("");

  function showWeather(response) {
    //console.log(response.data);
    setDisplay(true);
    setTemperatureDetails({
      name: response.data.list[0].name,
      temp: response.data.list[0].main.temp,
      speed: response.data.list[0].wind.speed,
      des: response.data.list[0].weather[0].description,
      Humidity: response.data.list[0].main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      let unit = "metric";
      let apiKey = "a7edac7c339e249bf90472e14cc7ec79";
      let apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=${unit}&appid=${apiKey}`;
      axios.get(apiUrl).then(showWeather);
    } else {
      setMessage(`please enter a city name`);
    }
  }

  function updateQuery(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-input"
        onChange={updateQuery}
        name="searchCity"
        id="search"
        placeholder="Search city name .."
      />
      <input type="submit" value="Search" className="btn search-submit" />
    </form>
  );
  if (display) {
    return (
      <div className="row">
        <div className="search-form">{form}</div>
        <div className="row">
          <h3>
            City: <span>{temperatureDetails.name}</span>
          </h3>
          <div className="info">
            <ul>
              <li>Temperature: {Math.round(temperatureDetails.temp)}°C</li>
              <li>Description: {temperatureDetails.des}</li>
              <li>Humidity: {temperatureDetails.Humidity}%</li>
              <li>speed: {temperatureDetails.speed} </li>
            </ul>
          </div>
          <div className="iconWeather">
            <img src={temperatureDetails.iconUrl} alt={temperatureDetails.des} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="search-form">{form}</div>
        <div className="row">{message}</div>
      </div>
    );
  }
}

export default SearchEngine;

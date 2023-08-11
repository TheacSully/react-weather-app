import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [text, setText] = useState("");
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    setText({
      Temperature: response.data.main.temp,
      Description: response.data.weather[0].description,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showWeather);
  }

  function updateWeather(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateWeather} />
      <input type="submit" value="search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            {" "}
            <strong>{city}</strong>{" "}
          </li>
          <li>
            {" "}
            <strong>Temperature:</strong> {Math.round(text.Temperature)}°C{" "}
          </li>
          <li>
            {" "}
            <strong>Overview: </strong>
            {text.Description}{" "}
          </li>
          <li>
            {" "}
            <strong>Humidity: </strong>
            {text.Humidity} %{" "}
          </li>
          <li>
            {" "}
            <strong>Wind: </strong>
            {text.Wind} kmph
          </li>
          <li>
            {" "}
            <img src={text.icon} alt="icon" />{" "}
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

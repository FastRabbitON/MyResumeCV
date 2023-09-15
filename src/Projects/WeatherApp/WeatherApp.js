import React, { useState } from 'react';

import "./WeatherStyle.css"


function WeatherApp() {

  document.title = "Portfolio | WeatherApp"

  const [placeName, setPlaceName] = useState('');
  // const [cityLAT, setCityLAT] = useState('');
  // const [cityLON, setCityLON] = useState('');
  const [weather, setWeather] = useState('');

  const apiKey = {
    key: "cd95b4162ff6765cbe3dbd2169ae2b1b",
    coordinateUrl: "http://api.openweathermap.org/geo/1.0/direct?q={city name}&appid={API key}",
    weatherUrl: "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
  }



  const search = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=${apiKey.key}&units=metric`)
        .then(apiInformation => {
          if (apiInformation.ok) {
            return apiInformation;
          } else {
            throw Error('Location was not found');
          }
        })
        .then(apiInformation => apiInformation.json())
        .then(weatherApiInfo => {
          setWeather(weatherApiInfo);

          // const TemperatureInfo = weatherApiInfo.main.temp;
          // const WindInfo = weatherApiInfo.wind.speed;
          // const HumidityInfo = weatherApiInfo.main.humidity;
          // const PressureInfo = weatherApiInfo.main.pressure;
          // const IcoInfo = weatherApiInfo.weather[0].icon;

        })
        .catch(errThree => alert(errThree));
    }
  };


  const dateBuilder = (d) => {
    let monthsList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = daysList[d.getDay()];
    let date = d.getDate();
    let month = monthsList[d.getMonth()];
    let year = d.getFullYear();

    return [day, " ", date, <p></p>, month, " ", year]
  }

  return (

    <div className="AppWeather">

      <section className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Location..."
          value={placeName}
          onChange={e => setPlaceName(e.target.value)}
          onKeyPress={search}>
        </input>
      </section>

      {weather ? <section className="content-container">


        {/* <div className="geolocal"> {cityLAT} ; {cityLON}</div> */}

        <div className="location-container">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>

        <div className="temp">{(weather.main.temp).toFixed(1)}°C</div>

        <div className="more-information">

          <div className="wind">
            <div className="titleWeather">Wind</div>
            <div className="information">{Math.round(weather.wind.speed)} km/h</div>
          </div>

          <div className="humidity">
            <div className="titleWeather">Humidity</div>
            <div className="information">{Math.round(weather.main.humidity)} %</div>
          </div>

          <div className="pressure">
            <div className="titleWeather">Pressure</div>
            <div className="information">{Math.round(weather.main.pressure)} hPa</div>
          </div>

        </div>

      </section> : null}

      <div className={(weather) ? ((weather.main.temp < 3) ? 'backgroundCold'
        : (weather.main.temp > 25) ? 'backgroundHeat'
          : 'backgroundMid')
        : 'backgroundMid'} ></div>

    </div>

  );
}

export default WeatherApp;

import React, { useState } from 'react'
import DayDates from './DayDates'


const AppWeather = ({ weather, temperature }) => {

  const [isCelsius, setIsCelsius] = useState()
  const handleClick = () => {
    setIsCelsius(!isCelsius)
  }
  return (
    <article className='card__weather'>
      <h1>Weather App</h1>
      <h2><i className="fal fa-map-marker-alt card__icon"></i> {weather?.name}, {weather?.sys?.country}</h2>
      <DayDates />
      <div className='card__information'>
        <div className='card__temperature-display'>
          <img className='card__weather-img' src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
          <p className='card__temperature'>  {isCelsius ? temperature?.celsius.toFixed(0) + ' °C' : temperature?.farenheit.toFixed(0) + ' °F'}</p>
        </div>
        <section className='card__weather-info'>
          <h3>"{weather?.weather[0].description}"</h3>
          <ul>
            <li >
              <span><i className="fas fa-wind card__icon"></i> Wind Speed: <b>{weather?.wind.speed} m/s</b></span>
            </li>
            <li>
              <span><i className="fas fa-clouds card__icon"></i>Clouds: <b>{weather?.clouds.all} %</b></span>
            </li>
            <li>
              <span><i className="fas fa-dewpoint card__icon"></i> Humidity: <b>{weather?.main.humidity} %</b></span>
            </li>
            <li>
              <span><i className="fas fa-tire-pressure-warning card__icon"></i> Pressure: <b>{weather?.main.pressure} hPa</b></span>
            </li>
          </ul>
        </section>
      </div>
      <footer>
        <button onClick={handleClick}>Change to °{isCelsius ? 'F' : 'C'}</button>
      </footer>
    </article >
  )
}
export default AppWeather
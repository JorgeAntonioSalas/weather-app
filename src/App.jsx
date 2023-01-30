import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import AppWeather from './components/AppWeather'
import Background from './components/Background'
import Loading from './components/Loading'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [Isloading, setIsloading] = useState(true)

  useEffect(() => {

    const success = pos => {
      const obj = {
        lat: pos?.coords?.latitude,
        lon: pos?.coords?.longitude
      }
      setCoords(obj);
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if (coords) {
      const APIKey = '9949737e04b6ae821e780dcf1b6f7228'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKey}`

      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj = {
            celsius: res.data.main.temp - 273.15,
            farenheit: (res.data.main.temp - 273.15) * 9 / 5 + 32
          }
          setTemperature(obj)
        })
        .catch(err => console.log(err))
        .finally(() => setTimeout(() => setIsloading(false), 3000));
    }
  }, [coords])

  console.log(weather);

  return (
    <div className="App">
      {Isloading ?
        <Loading />
        :
        <div>
          <Background />
          <AppWeather
            weather={weather}
            temperature={temperature}
          />
        </div>
      }
    </div>
  )
}

export default App

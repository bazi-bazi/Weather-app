import React, { useState, useEffect } from 'react';
import './App.css';
import Search from "./components/Search"
import Daily from "./components/Daily"
import Cities from "./components/Cities"
import "weather-icons/css/weather-icons.css"
import { useSelector } from "react-redux"

const App = (props) => {
  let newCity = useSelector((state) => state.cityName);

  const apiKey = '0e87c50f5a62e1f5bd8a60ecb0238aef';
  

  useEffect(() => {
    getData();
  });


  const [city, setCity] = useState()
  const [wind, setWind] = useState()
  const [description, setDescription] = useState()
  const [temp, setTemp] = useState()
  const [iconid, setIconid] = useState()



  const getData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}` );
    const data = await response.json();
    setCity(data.name);
    setWind(data.wind.speed);
    setDescription(data.weather[0].description);
    setTemp(Math.floor(data.main.temp - 273.15))
    setIconid(data.weather[0].id)
  }


  return (
    <div className="App">
      <div className="wrapper">
        <h1>-Weather App-</h1>
          <div className="search">
            <Search />
          </div>
          <div className="container daily">
              <Daily 
              city={city} 
              wind={wind} 
              description={description} 
              temp={temp}
              icon={
                (iconid >= 200 && iconid < 232) ? "wi-thunderstorm" : 
                (iconid >= 300 && iconid < 321) ? "wi-sleet" :
                (iconid >= 500 && iconid < 521) ? "wi-storm-showers" : 
                (iconid >= 600 && iconid < 622) ? "wi-snow" : 
                (iconid >= 701 && iconid < 781) ? "wi-fog" : 
                (iconid === 800) ? "wi-day-sunny" : 
                (iconid >= 801 && iconid < 804) ? "wi-day-fog" :  
              "wi-day-sunny"
              }/>
          </div>
          <div className="container weekly">
            <Cities />
          </div>
      </div>
     </div>
  );
}


export default App;

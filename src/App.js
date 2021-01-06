import React, { useState, useEffect } from 'react';
import './App.css';
import Search from "./components/Search"
import Daily from "./components/Daily"
import Weekly from "./components/Weekly"
import "weather-icons/css/weather-icons.css"


const App = (props) => {

  const apiKey = '0e87c50f5a62e1f5bd8a60ecb0238aef';

  useEffect(() => {
    getData();
  });

  const [city, setCity] = useState()
  const [wind, setWind] = useState()
  const [description, setDescription] = useState()
  const [temp, setTemp] = useState()

  const getData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}` );
    const data = await response.json();
    setCity(data.name);
    setWind(data.wind.speed);
    setDescription(data.weather[0].description);
    setTemp(Math.floor(data.main.temp - 273.15))
    console.log(data);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>-Weather App-</h1>
          <div className="search">
            <Search />
          </div>
          <div className="container daily">
              <Daily city={city} wind={wind} description={description} temp={temp}/>
          </div>
          <div className="container weekly">
            <Weekly />
          </div>
      </div>
     </div>
  );
}


export default App;

import React, { useState, useEffect }  from "react"
import "./weekly.css"
import sun from "../../img/sun.svg"

const Weekly =() => {

  const TOKYO_KEY = '3f1f6d8e6be4128e6478e9afe1abeffd';

  const [tokyo, setTokyo] = useState();

  useEffect(() => {
    getTokyo();
  });

  const getTokyo = async () => {
    const tokyoResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${TOKYO_KEY}` );
    const tokyoData = await tokyoResponse.json();
    setTokyo(Math.floor(tokyoData.main.temp - 273.15))
  }


  return (
    <div className="weekly">
      <div className="weekly__content">
        <p className="weekly__title">Tokyo</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">{tokyo}&#176;</p>
      </div>
      <div className="weekly__content">
        <p className="weekly__title">wed</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">22&#176;</p>
      </div>
      <div className="weekly__content">
        <p className="weekly__title">thu</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">22&#176;</p>
      </div>
      <div className="weekly__content">
        <p className="weekly__title">fir</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">22&#176;</p>
      </div>
      <div className="weekly__content">
        <p className="weekly__title">sat</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">22&#176;</p>
      </div>
      <div className="weekly__content">
        <p className="weekly__title">sun</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">22&#176;</p>
      </div>
    </div>
  )
}

export default Weekly
import React, { useState, useEffect } from "react"
import '../cities.css'
import sun from "../../../img/sun.svg"

const Tokyo =()=> {
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
    <div className="weekly__content">
        <p className="weekly__title">Tokyo</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">{tokyo}&#176;</p>
      </div>
  )
}

export default Tokyo
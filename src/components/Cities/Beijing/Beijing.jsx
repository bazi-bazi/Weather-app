import React, { useState, useEffect } from "react"
import '../cities.css'
import sun from "../../../img/sun.svg"

const Beijing =()=> {
  const BEIJING_KEY = '3f1f6d8e6be4128e6478e9afe1abeffd';
  const [beijing, setBeijing] = useState();

  useEffect(() => {
    getBeijing();
  });


  const getBeijing = async () => {
    const beijingResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=beijing&appid=${BEIJING_KEY}` );
    const beijingData = await beijingResponse.json();
    setBeijing(Math.floor(beijingData.main.temp - 273.15))
  }

  return (
    <div className="weekly__content">
        <p className="weekly__title">Beijing</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">{beijing}&#176;</p>
      </div>
  )
}

export default Beijing
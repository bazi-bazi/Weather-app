import React, { useState, useEffect } from "react"
import '../cities.css'
import parisimg from "../../../img/paris.svg"

const Paris =()=> {
  const PARIS_KEY = 'cf1a182cbf9a14d56072493f9787044f';
  const [paris, setParis] = useState();

  useEffect(() => {
    getParis();
  });


  const getParis = async () => {
    const ParisResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=paris&appid=${PARIS_KEY}` );
    const ParisData = await ParisResponse.json();
    setParis(Math.floor(ParisData.main.temp - 273.15))
  }

  return (
    <div className="weekly__content">
        <p className="weekly__title">Paris</p>
        <img src={parisimg} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">{paris}&#176;</p>
      </div>
  )
}

export default Paris
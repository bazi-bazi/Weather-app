import React, { useState, useEffect } from "react"
import '../cities.css'
import sun from "../../../img/sun.svg"

const London =()=> {
  const LONDON_KEY = '3f1f6d8e6be4128e6478e9afe1abeffd';
  const [london, setLondon] = useState();

  useEffect(() => {
    getLondon();
  });


  const getLondon = async () => {
    const londonResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london&appid=${LONDON_KEY}` );
    const londonData = await londonResponse.json();
    setLondon(Math.floor(londonData.main.temp - 273.15))
  }

  return (
    <div className="weekly__content">
        <p className="weekly__title">London</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">{london}&#176;</p>
      </div>
  )
}

export default London
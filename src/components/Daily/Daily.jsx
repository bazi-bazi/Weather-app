import React from "react"
import "./daily.css"
import sun from "../../img/sun.svg"

const Daily = () => {
  return (
    <div className="daily">
       <div className="info">
         <h2 className="info__city">Tbilisi</h2>
         <p className="info__name">Monday</p>
         <p className="info__date">00/00/13</p>
         <p className="info__wind">wind 6km/h</p>
       </div>
       <div className="daily__text">
         <div className="daily__weather">
           <img src={sun} alt="weather icon" />
           <p className="weather__text">partly cloudly</p>
         </div>
         <p className="weather__number">22&#176;</p>
       </div>
    </div>
  )
}

export default Daily
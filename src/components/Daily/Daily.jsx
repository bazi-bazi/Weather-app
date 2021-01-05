import React from "react"
import "./daily.css"

const Daily = ({city}) => {
  return (
    <div className="daily">
       <div className="info">
         <h2 className="info__city">{city}
         </h2>
         <p className="info__name">Monday</p>
         <p className="info__date">00/00/13</p>
         <p className="info__wind">wind 6km/h</p>
       </div>
       <div className="daily__text">
         <div className="daily__weather">
           <i className="wi wi-night-sleet icons" alt="weather icon"></i>
           <p className="weather__text">partly cloudly</p>
         </div>
         <p className="weather__number">22&#176;</p>
       </div>
    </div>
  )
}

export default Daily
import React from "react"
import "./daily.css"
import moment from 'moment';

const Daily = ({city, wind, description, temp, icon}) => {
  const moment = require('moment');

  let date = moment().subtract(10, 'days').calendar();


  const now = new Date();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const day = days[ now.getDay() ];
  return (
    <div className="daily">
       <div className="info">
         <h2 className="info__city">{city}
         </h2>
         <p className="info__name">{day}</p>
         <p className="info__date">{date}</p>
         <p className="info__wind">wind {wind}km/h</p>
       </div>
       <div className="daily__text">
         <div className="daily__weather">
           <i className={`wi ${icon} icons`} alt="weather icon"></i>
           <p className="weather__text">{description}</p>
         </div>
         <p className="weather__number">{temp}&#176;</p>
       </div>
    </div>
  )
}

export default Daily
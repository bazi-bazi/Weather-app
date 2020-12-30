import React from "react"
import "./daily.css"

const Daily = () => {
  return (
    <div className="daily">
       <div className="info">
         <h2 className="info__city">Tbilisi</h2>
         <p className="info__name">Monday</p>
         <p className="info__date">00/00/13</p>
         <p className="info__wind">wind 6km/h</p>
       </div>
       <div>
         <div>
           <img src="#" alt="weather icon" />
           <p>partly cloudly</p>
         </div>
         <p>22</p>
       </div>
    </div>
  )
}

export default Daily
import React from "react"
import "./weekly.css"
import sun from "../../img/sun.svg"

const Weekly =() => {
  return (
    <div className="weekly">
      <div className="weekly__content">
        <p className="weekly__title">tue</p>
        <img src={sun} alt="tuesday" className="weekly__icon" />
        <p className="weekly__number">22&#176;</p>
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
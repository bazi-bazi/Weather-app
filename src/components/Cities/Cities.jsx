import React, { useState, useEffect }  from "react"
import "./cities.css"
import Tokyo from "./Tokyo"
import London from "./London"
import Paris from "./Paris"
import Beijing from './Beijing'

const Cities =() => {

  const NEWYORK_KEY = 'cf1a182cbf9a14d56072493f9787044f';


  const [newyork, setNewYork] = useState();



  return (
    <div className="weekly">
      <Tokyo />
      <London/>
      <Paris />
      <Beijing /> 
    </div>
  )
}

export default Cities
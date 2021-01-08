import React, {useState} from "react"
import "./search.css"
import { useDispatch } from "react-redux"
import { CITY_NAME } from "../../redux/Actions"

const Search =()=> {

   const [city, setCity] = useState()
   const dispatch = useDispatch()

   const handleSubmit =(e) => {
      e.preventDefault();
      dispatch({type: CITY_NAME, payload: city})
    }

  return (
         <form className="search" onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="searchTerm" 
            placeholder="Type city or country name" 
            onChange={(e) => setCity(e.target.value)} 
            />
            <button type="submit" className="searchButton">
               <i className="fa fa-search"></i>
            </button>
         </form>
  )
}

export default Search

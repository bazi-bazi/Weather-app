import React from "react"
import "./search.css"


const Search =()=> {
  return (
         <div className="search">
            <input type="text" className="searchTerm" placeholder="Type city or country name" />
            <button type="submit" className="searchButton">
               <i className="fa fa-search"></i>
            </button>
         </div>
  )
}

export default Search

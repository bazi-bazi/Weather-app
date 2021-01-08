

const initialstate = {
  cityName: "Tbilisi"
}

const weatherReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CITY_NAME":
      return {
        ...state,
        cityName: action.payload
      }
      default:
        return state
  }
}

export default weatherReducer;
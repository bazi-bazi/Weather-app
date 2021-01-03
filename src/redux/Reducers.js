
const initialstate = {
  test: "not clicked"
}

const weatherReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_DAILY":
      return {
        ...state,
        test: "clicked"
      }
      default:
        return state
  }
}

export default weatherReducer;
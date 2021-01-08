export const CITY_NAME = "CITY_NAME";

export const cityName = (city) => {
  return {
    type: "CITY_NAME",
    payload: city,
  }
}
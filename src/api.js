
const API_KEY = "0e87c50f5a62e1f5bd8a60ecb0238aef";


const getData = async () => {
  const response = await fetch( `api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}` );
  const data = await response.json();
  console.log(data);
}



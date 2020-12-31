import './App.css';
import Search from "./components/Search"
import Daily from "./components/Daily"
import Weekly from "./components/Weekly"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>-Weather App-</h1>
          <div className="search">
            <Search />
          </div>
          <div className="container daily">
             <Daily />
          </div>
          <div className="container weekly">
            <Weekly />
          </div>
      </div>
     </div>
  );
}


export default App;

import { useState } from "react";
import "./App.scss";
import Weather from "./components/Weather";

function App() {
  const [input, setInput] = useState("");
  const key = "273da293979946088f0194541220810";
  const [weatherData, setWeatherData] = useState("");
  const getWeatherData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${input}&days=3&lang=de`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Wettervorhersage</h1>
      <form onSubmit={getWeatherData}>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Suche eine Stadt"
        />
        <button>Suchen</button>
      </form>
      <div className="weathers">
        {weatherData &&
          weatherData.forecast.forecastday.map((weather, i) => (
            <Weather key={i} weather={weather} weatherData={weatherData} />
          ))}
      </div>
    </div>
  );
}

export default App;

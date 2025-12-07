import { Component } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./Weather.css";

export default class WeatherPage extends Component {
  state = {
    weather: null,
    error: null,
  };

  async componentDidMount() {
    const zip = "11218"; 
    const key = "4d940566413cbb48ddbe156f2b502364";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=imperial`
      );

      if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`);

      const data = await response.json();
      this.setState({ weather: data, error: null });
    } catch (e) {
      this.setState({ weather: null, error: e.message });
    }
  }

  render() {
    const { weather, error } = this.state;

    return (
      <div className="container">
        <h2>Weather App</h2>
        <WeatherDisplay weather={weather} error={error} />
      </div>
    );
  }
}

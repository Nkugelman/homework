import { Component } from "react";
import './Weather.css'

export default class WeatherDisplay extends Component{
  render() {
    const { weather, error } = this.props;

    if (error) return <h2 className="error">{error}</h2>;
    if (!weather) return <h2>Loading weather...</h2>;
    console.log(weather,error);
    console.log(weather.main.temp);
    console.log(weather.main.weatherInfo);
    
    
    

    const { main, weather: weatherInfo, name } = weather;
    const temp = main.temp;
    const description = weatherInfo[0].description;
    const icon = `https://openweathermap.org/img/w/${weatherInfo[0].icon}.png`;
    

    return (
      <div/* className="row have-weather mt-3 text-center"*/>
        <div>The weather in {name}</div>
        <img src={icon} alt={description} />
        <div>
          <span>{temp}°F</span> and <span>{description}</span>
        </div>
      </div>
    );
  }
}

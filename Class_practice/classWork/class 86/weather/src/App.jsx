
import { Component } from 'react';
import './App.css';
import apiKey from './apikey.json';
import WeatherDetails from './WeatherDetails';
import NoWeather from './NoWeather';

export default class App extends Component {
  state = {
    zip: ''
  };

  async fetchWeather() {
    try {
      const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&appid=${apiKey.key}&units=imperial&lang=he`);
      const weatherData = await r.json();
      if (!r.ok) {
        throw new Error(`${r.status} - ${r.statusText} - ${weatherData.message}`);
      }
      console.log(weatherData);
      this.setState({
        weather: {
          name: weatherData.name,
          icon: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`,
          temp: weatherData.main.temp,
          description: weatherData.weather[0].description
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
  handleZipChanged =  e=>{
    this.setState({
      zip:e.target.value
     },() =>{
     if(this.state.zip.length===5){
      this.fetchWeather();
     }
     });
  }

  componentDidUpdate() {
  
    }
  

  render() {
    const { weather } = this.state;

    const weatherBody = !weather
      ? <NoWeather />
      : <WeatherDetails weather={weather} />;

    return (
      <div className="container text-center">
        <div className="row justify-content-end">
          <div className="col-3 col-md-2">
            <input id="zip" value={this.state.zip} onChange={this.handleZipChanged} />
          </div>
        </div>

        {weatherBody}
      </div>
    );
  }
}
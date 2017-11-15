import React, { Component } from 'react';

class Weather extends Component {
  render() {
    return (
      <div className="weatherDataDiv">
      <div className="weatherData" id="city">{this.props.city}</div>
      <div className="weatherData" id="currentTemp">{this.props.currentTemp}</div>
      <div className="weatherData" id="weatherDesc">{this.props.description}</div>
      <div className="weatherData" id="maxTemp">{this.props.maxTemp}</div>
      <div className="weatherData" id="minTemp">{this.props.minTemp}</div>
      </div>
    )
  }
}

export default Weather;

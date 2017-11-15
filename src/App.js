import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      weatherData: {},
      currentTemp: '',
      description: '',
      maxTemp: '',
      minTemp: '',
      city: '',
    }
    this.submitCleanUp = this.submitCleanUp.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
  }
  callWeatherApi() {
    Axios(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode}&units=imperial&appid=3cccf32acba85a5d9c945458fd461663`)
      .then(res => {
        console.log(res.data)
        this.setState(prevState => {
          return{
            weatherData: res.data,
            currentTemp: res.data.main.temp + '°',
            description: res.data.weather[0].main,
            maxTemp: res.data.main.temp_min + '°',
            minTemp: res.data.main.temp_max + '°',
            city: res.data.name,
          }
        })
      })
  }
  handleFormSubmit(ev) {
    ev.preventDefault();

    this.callWeatherApi();
    this.submitCleanUp();
  }
  handleZipChange(ev) {
    this.setState({
      zipcode: ev.target.value,
    })
  }
  submitCleanUp() {
    this.setState({
      zipcode: '',
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <Form
          handleFormSubmit = {this.handleFormSubmit}
          handleZipChange = {this.handleZipChange}
          zipcode = {this.state.zipcode}
        />
        <Weather
          currentTemp = {this.state.currentTemp}
          description = {this.state.description}
          minTemp = {this.state.minTemp}
          maxTemp = {this.state.maxTemp}
          city = {this.state.city}
        />
      </div>
    );
  }
}

export default App;

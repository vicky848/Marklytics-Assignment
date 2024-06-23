import React, { Component } from 'react'

import axios from 'axios'
import PieChart from '../PieChart'
import BarChart from '../BarChart'
import './index.css'



 class WeatherDashboard extends Component {

state = {
    city: '',
    weatherData : null,
    currentChart:'Bar',
    graphData : [],
    error:null,
}


 handlerChartType = ( newChart) => {

this.setState({
    
    currentChart:newChart
})
}


handlerInput = (event) => {

    
    this.setState({
        city:event.target.value
       
    })

}

handlerOnClick = async(event) => { 
    event.preventDefault()
    const {city} = this.state
const apiKey = "23005a762b4e5c96b703986b00411efc"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


try{
    const response = await axios.get(apiUrl);

const data = response.data 



    const newWeatherData ={
        name: data.name,
        date:new Date().toLocaleDateString(),
        temperature:data.main.temp,
        location:`${data.coord.lat}, ${data.coord.lon}`,
        humidity:data.main.humidity,

    }

this.setState ({
   weatherData:newWeatherData,
   graphData:[newWeatherData.temperature, newWeatherData.humidity],
   error:null,


})

 
} catch(error){
    console.log("Error fetching weather data:", error)
    
    this.setState({
        error:'Error fetching weather data .please try again later',
        weatherData:null,
        graphData:[],
    })
}

}



   





  render() {
    const {city,weatherData,currentChart,graphData} = this.state
    return (
     
      <div className='main-container'>

<form className='form-container'>
    <h1 className='header'>Weather App</h1>
    <select className='selector' name='chart' id="chart" value={currentChart} onChange={(event)=>this.handlerChartType(event.target.value)}>
        <option value="Bar">Bar Chart</option>
        <option value="Pie">Pie Chart</option>
    </select>
    <input
    type='text'
    className='input'
    placeholder='Enter City Name'
    value={city}
    onChange={this.handlerInput}
    />
    <button className='button' onClick={this.handlerOnClick}>Search</button>
  

</form>

<div className='card-container'>

{ weatherData &&(

<div className='card'>
<h1 className='card-header'>{weatherData.name}</h1>
<p className='text' >Date : {weatherData.date}</p>

<p className='text'>Temperature : {weatherData.temperature}</p>

<p className='text'>Location : {weatherData.location}</p>

<p className='text'>Humidity : {weatherData.humidity}</p>



</div>
 

)}



<div className='chart-container'>
    { currentChart ==='Pie' ? (
        <PieChart
        data= {{
            labels:['Temperature', 'Humidity'],
            series:graphData,
            
        }}
        
        
        />
    ): (
        <BarChart
        data= {{
            labels:['Temperature','Humidity'],
            series:graphData,
            
        }}
        
        
        
        />
    )}
  
 
</div>



</div>
   
  </div>
     
     
    )}
}
export default WeatherDashboard
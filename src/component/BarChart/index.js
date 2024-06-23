import React from 'react'
import  Chart  from 'react-apexcharts'
import'./index.css'
const BarChart = () => {

    const seriesData= [6578, 6787,3245,9876]

    const chartOption = {
        chart:{
            type : 'bar',
            width :400,
            height : 250,
        },

        xaxis:{

            categories:[ 'date','temerature', 'location', 'humidity']

        },
    };
    const fomattedDataSeries = [{data:seriesData}]
  return (

    <div className='bar-container'>
        <h3>Bar Chart</h3>
        <Chart
        options={chartOption}
        series={fomattedDataSeries}
        type='bar'
        height={250}
        width={400}

        
        
        
        />

    </div>

   
   
        
  )
}


export default BarChart
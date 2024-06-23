import React from 'react'
import './index.css'
import  Chart  from 'react-apexcharts'

const PieChart = () => {
  return (
    <React.Fragment>
    <div className='container'>
        <h3>Pie Chart</h3>
        <Chart 
        type = "pie"
        width={400}
        height = {400}
        series = {[43,50,54,65]}

        options = {{
            labels:['date','temperature', 'location','humidity',]
        }}
        
        
        />

    </div>



        
    </React.Fragment>
  )
}
export default PieChart
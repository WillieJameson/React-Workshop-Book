import React from 'react';
import ConvertInput from './ConvertInput.jsx';
import ConvertStatus from './ConvertStatus.jsx';
import {StatusConsumer} from './StatusContext.js'


const withStatus = ConvertStatus =>{
  return (
    ()=>{
      // the props is the value of statusprovider  which is 20
      // Consumer is the component who use the provider 
    return <StatusConsumer>{(props) =>  
       (<ConvertStatus CelsiusValue ={props}/>) 
      }
      </StatusConsumer>
  
  })
}

const WrapperComponent = withStatus(ConvertStatus)


const ConvertForm = ({temperature, UpdateTemperature }) => {
  return (
    <div>
      <div>
        <ConvertInput temperature = {temperature.celsius} UpdateTemperature={UpdateTemperature}/>
      </div>
      <div>
        <ConvertInput temperature = {temperature.fahrenheit}
        convertTo= "celsius"
        updateTemperature ={UpdateTemperature}/>
      </div>
      <div>
        <WrapperComponent/>
      </div>
    </div>
  )
}


export default ConvertForm;
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
const [weatherInfo, setWeatherInfo] = useState({
        city:"Mumbai",
        feelslike:22,
        humidity:24,
        tempMin:20,
        tempMax:25,
        temp:18,
        weather:"haze"
})

let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
}
    
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
    )
}
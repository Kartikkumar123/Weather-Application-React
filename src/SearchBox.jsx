import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors } from '@mui/material';
import './SearchBox.css'


export default function SearchBox({updateInfo}){

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const Url = "https://api.openweathermap.org/data/2.5/weather";
    const Key = "59b25e5ee2e5325b12bc95f09ca7637d";

    let getWeatherInfo = async() =>{
        try{
       let response = await fetch(`${Url}?q=${city}&appid=${Key}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse)
       let result = {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
    }catch(err){
        throw err;
    }
    }

    let handleChange = (event)=>{
        setCity(event.target.value)
    }

    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo =    await getWeatherInfo();
        updateInfo(newInfo)
        }catch(err){
            setError(true)
        }
    }
    return(
        <div className="card" >
           <form onSubmit={handleSubmit}>
           <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
           <Button variant="contained" type='submit' > Search </Button>
            {error&&<p style={{color:"red"}}>No such place exists!</p>}
           </form>
        </div>
    )
};
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const img = "https://images.unsplash.com/photo-1694153273644-68a821119e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjBza3l8ZW58MHx8MHx8fDA%3D";

    let cold ="https://images.unsplash.com/photo-1615226120487-90ec48f5d316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let hot ="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let rain ="https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(
        <div className="InfoBox">
            <div className='container'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity> 80 ? rain:info.temp > 15 ? hot:cold}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {info.city}   {info.humidity> 80 ? <ThunderstormIcon/>:info.temp > 15 ? <WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <div>Temprature : {info.temp}&deg;C</div><br />
         <div>Humidity : {info.humidity}&deg;C</div><br />
         <div>Min Temp : {info.tempMin}&deg;C</div><br />
         <div>Max Temp : {info.tempMax}&deg;C</div><br />
         <div>Temprature : {info.temp}&deg;C</div>   <br />
         <div>The weather can be described as <i>{info.weather }</i> and feels like {info.feelslike} &deg;C</div>



        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}

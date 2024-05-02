import Temperature from "./Componets/Temperature";
import Info from "./Componets/Info";
import { useEffect, useState } from "react";
import wind from './img/wind.png'
import Humidity from './img/humidity.png'
import max from './img/max.png'
import min from './img/min.png'
import visible from './img/visible.png'
import pressure from './img/pressure.png'
function App() {
  const [city, setCity] = useState("Mumbai");
  const [weatherdata, setweatherdata] = useState("");
  const apikey = "22f77a5a709111949ae91bae99e8ef09";
  const apiurl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  useEffect(() => {
    fetch(apiurl + city + `&appid=${apikey}`)
      .then((res) => {
        if (!res.ok) {
          console.error("cant fetch");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setweatherdata(data);
        // console.log(weatherdata.main.temp,weatherdata.main.temp_max,weatherdata.main.temp_min,weatherdata.main.pressure,weatherdata.main.humidity , weatherdata.name)
        // console.log(weatherdata.weather[0].main,weatherdata.visibility,weatherdata.wind.speed)
        
      });
  }, [city]);
  

  return (
    <>
      <div className="h-screen bg-[#2c3f42] w-full flex justify-center align-top ">
        <div className=" backdrop-blur-sm  w-1/4 mt-40 ml-20 mr-1  border  border-white rounded-3xl  h-2/4">
          {" "}
          <Temperature setCity={setCity} stats={{
            temp:weatherdata.main.temp ,
            cond:weatherdata.weather[0].main,
            location:weatherdata.name,
            }} />{" "}
        </div>
        <div className="  border p-2 border-white rounded-3xl  ml-5 flex font-mono flex-wrap w-2/3 mt-40  mr-20 gap-2 h-2/4">
          <h1 className="    w-full block text-slate-200 font-bold h-9 text-left text-xl mt-3 ">
            Today's Highlights
          </h1>
          <Info stats={{
            title:" wind status",
            photo:wind,
            value:weatherdata.wind.speed,
            unit:'mph'
          }}  />
          <Info stats={{
            title:"Humidity",
            photo:Humidity,
           value:weatherdata.main.humidity,
            unit:'%'
          }}/>
          <Info stats={{
            title:" Visibility",
            photo:visible,
            value:weatherdata.visibility,
            unit:'miles'
          }}/>
          <Info stats={{
            title:" Air Pressure",
            photo:pressure,
            value:weatherdata.main.pressure,
            unit:'mb'
          }}  />
          <Info stats={{
            title:" Max",
            photo:max,
            value:weatherdata.main.temp_max,
            unit:'°C '
          }}/>
          <Info stats={{
            title:" Min",
            photo:min,
            value:weatherdata.main.temp_min,
            unit:'°C'
          }} />
        </div>
      </div>
    </>
  );
}

export default App;
//

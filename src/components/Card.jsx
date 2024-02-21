import React from "react";
import logo from '../logo.svg';
import { useWeather } from "../Context/Weather";

const Card = ()=>{
    const weather=useWeather();
    return(
        <div>
             <div className="shadow-sm bg-white rounded-lg">
            {/* <img className="w-96 bg-white shadow rounded" src={weather} alt=""></img> */}
            <h2>{weather.data?.main?.temp}</h2>
        </div>

        
        </div>
       
    )
}

export default Card;
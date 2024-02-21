import React from "react";

import { useWeather } from "../Context/Weather";

const Input = (props) => {
    const weather=useWeather();
    console.log("weather",weather);
    return (
        <input placeholder="" value={weather.se} onChange={(e)=>weather.setSearchCity(e.target.value) } className=""></input>
    )
}

export default Input;
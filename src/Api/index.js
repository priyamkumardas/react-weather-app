const baseUrl="https://api.openweathermap.org/data/2.5/weather?"
const appkey="&appid=3d7cc40b8f83d87e54d654c86f22fa36"

export const getWeatherDataForCity = async (city)=>{
    const response= await fetch(`${baseUrl}&q=${city}${appkey}`);
    return await response.json();
}
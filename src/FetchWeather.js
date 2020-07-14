import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './FetchWeather.css'
// import './wind.png'

const appid = process.env.REACT_APP_API_KEY;

function DataFetching() {
    const [city_name, setCity_name] = useState()
    const [country, setCountry] = useState()
    const [icon, setIcon] = useState()
    let icon_path = `http://openweathermap.org/img/wn/${icon}@4x.png`
    const [short_desc, setShort_desc] = useState()
    const [long_desc, setLong_desc] = useState()
    const [weather_id, setWeather_id] = useState()
    const [temp, setTemp] = useState()
    const [temp_min, setTemp_min] = useState()
    const [temp_max, setTemp_max] = useState()
    const [wind_speed, setWind_speed] = useState()
    const [clouds, setClouds] = useState()
    const [user_input, setInput] = useState('Auckland')
    const [new_input, setNew_input] = useState('Auckland')

    const handleClick = () => {
        setNew_input(user_input)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          handleClick()
        }
      }

    const setBackground = () => {
        if (short_desc === "Clear") {
            document.body.style.backgroundColor = "azure";
         }
        else if (short_desc === "Rain") {
            if (weather_id === 500 || weather_id === 501 || weather_id === 520 || weather_id === 521) {
                document.body.style.backgroundColor = "skyblue";
            }
            else {document.body.style.backgroundColor = "steelblue";}
        }
        else if (short_desc === "Clouds") {
            if(weather_id === 801 || weather_id == 802){
                document.body.style.backgroundColor = "gainsboro";
            }
            else {document.body.style.backgroundColor = "silver";}        
        }
    }

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${new_input}&appid=${appid}`)
            .then(res => {
                console.log(res.data)
                setCity_name(res.data.name)
                setCountry(res.data.sys.country)
                setIcon(res.data.weather[0].icon)
                setShort_desc(res.data.weather[0].main)
                setLong_desc(res.data.weather[0].description)
                setWeather_id(res.data.weather[0].id)
                setTemp(res.data.main.temp)
                setTemp_min(res.data.main.temp_min)
                setTemp_max(res.data.main.temp_max)
                setWind_speed(res.data.wind.speed)
                setClouds(res.data.clouds.all)
            })
            .catch(err => {
                console.error()
            })
    }, [new_input])

    setBackground()

    return (  
        <div>
            <input type="text" 
                value={user_input} 
                onChange={e => setInput(e.target.value)} 
                onKeyPress={e => handleKeyPress(e)}
                />
            <button type="button" onClick={handleClick}>Submit</button>
            <p>{city_name}, {country}</p>
            <img id="icon" src={icon_path} />
            <div class="container">
                <p>{Math.round((temp - 273.15) * 10) / 10}&#176;C</p>
                <p>{Math.round((temp_max - 273.15) * 1) / 1}&frasl;{Math.round((temp_min - 273.15) * 1) / 1}&#176;</p>
                    <div id="wind">
                        <img id="wind-icon" src={require('./wind.png')} height="100px" />
                        <p>{wind_speed} <span id="wind-speed">m/s</span></p>
                    </div>
            </div>               
            <p>{long_desc}</p>
        </div>
    )
}

export default DataFetching

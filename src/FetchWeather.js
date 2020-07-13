import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './FetchWeather.css';

const appid = process.env.REACT_APP_API_KEY;

function DataFetching() {
    const [city_name, setCity_name] = useState()
    const [icon, setIcon] = useState()
    let icon_path = `http://openweathermap.org/img/wn/${icon}@4x.png`
    const [short_desc, setShort_desc] = useState()
    const [long_desc, setLong_desc] = useState()
    const [temp, setTemp] = useState()
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

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${new_input}&appid=${appid}`)
            .then(res => {
                console.log(res.data)
                setCity_name(res.data.name)
                setIcon(res.data.weather[0].icon)
                setShort_desc(res.data.weather[0].main)
                setLong_desc(res.data.weather[0].description)
                setTemp(res.data.main.temp)
                setClouds(res.data.clouds.all)
            })
            .catch(err => {
                console.error()
            })
    }, [new_input])

    // console.log(city_name);
    // console.log(desc);
    // console.log(temp);
    // console.log(clouds);

    // document.getElementById('icon').src = `http://openweathermap.org/img/wn/${icon}@4x.png`;

    if (short_desc === "Clear") {
        document.body.style.backgroundColor = "azure";
     }
    else if (short_desc === "Rain") {
        document.body.style.backgroundColor = "skyblue";
    }
    else if (short_desc === "Clouds") {
        document.body.style.backgroundColor = "gainsboro";
    }

    return (  
        <div>
            <input type="text" 
                value={user_input} 
                onChange={e => setInput(e.target.value)} 
                onKeyPress={e => handleKeyPress(e)}
                />
            <button type="button" onClick={handleClick}>Submit</button>
            <p>{city_name}</p>
            <img id="icon" src={icon_path} />
            {/* <script type="text/javascript">document.getElementById('icon').src = 'http://openweathermap.org/img/wn/${icon}@4x.png';</script> */}
            <p>{Math.round((temp - 273.15) * 10) / 10}&#176; C</p>
            <p>{short_desc} : {long_desc}</p>
            {/* <p>Clouds: {clouds}</p> */}
        </div>
    )
}

export default DataFetching

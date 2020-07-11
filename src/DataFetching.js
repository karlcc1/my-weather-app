import React, {useState, useEffect} from 'react';
import axios from 'axios';

const appid = process.env.REACT_APP_API_KEY;
console.log(appid);

function DataFetching() {
    const [fetched_data, setFetched] = useState({})
    const [user_input, setInput] = useState('Auckland')
    const [new_input, setNew_input] = useState('Auckland')

    const handleClick = () => {
        setNew_input(user_input)
    }

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${new_input}&appid=${appid}`)
            .then(res => {
                console.log(res)
                setFetched(res.data.main)
            })
            .catch(err => {
                console.log(err)
            })
    }, [new_input])

    return (
        <div>
            <input type="text" value={user_input} onChange={e => setInput(e.target.value)} />
            <button type="button" onClick={handleClick}>Submit</button>
            <p>{user_input}</p>
            <div>{Math.round((fetched_data.temp - 273.15) * 10) / 10} degree celsius</div>
        </div>
    )
}

export default DataFetching

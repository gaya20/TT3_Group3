import axios from 'axios'
import './currentpricing.css';
import { useEffect, useState } from 'react'
const httpUrl = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current';
const API_KEY = '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH';

const CurrentPricing = () => {
    const [values, setValues] = useState({});
    const formatTime = (unix_timestamp) => {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return formattedTime;
    }

    useEffect(() => {
        const fetchAssetValue = () => {
            fetch(httpUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                'x-api-key': API_KEY,
                }
            })
            .then(response => response.json())
            .then(data => {
                    setValues({...data});
            })
            .catch(error => console.log(error))
        }
        fetchAssetValue();
        // refresh asset price every minute
        const interval = setInterval(() => fetchAssetValue(), 60000)
        return () => {
          clearInterval(interval);
        }
    }, []);
    return (
        <div className='currPricing'>
            <p className='label'>Current Pricing:</p>
            <div className='card'>
                <div className='pricing'>
                    <div className='symbol'>
                        {values.assetSymbol}
                    </div>
                    <div className='price'>
                        {values.price}
                    </div>
                </div>
                <div className='timestamp'>
                    Data accurate as of {formatTime(values.timestamp)}
                </div>
            </div>
        </div>
    );
}

export default CurrentPricing
import React,  { useEffect, useState, Component } from 'react';
import axios from 'axios'


const httpUrl = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current';
const API_KEY = '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH';

const CurrentPricing = () => {
    const [values, setValues] = useState({});
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
            .then(data => setValues({...data}))
            .catch(error => console.log(error))
        }
        fetchAssetValue();
        // refresh asset price every minute
        const interval = setInterval(() => fetchAssetValue(), 60000)
        return () => {
          clearInterval(interval);
        }
    }, [values,setValues]);
    return (
        <div>
            <div>
                {values.assetSymbol} {values.price}
            </div>
            <div>
                Data accurate as of {values.timestamp}
            </div>
        </div>
    );
}


export default CurrentPricing
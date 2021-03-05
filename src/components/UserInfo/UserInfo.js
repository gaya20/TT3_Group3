import axios from 'axios'
import React,  { useEffect, useState, Component } from 'react';

import './UserInfo.css'

const httpUrl = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login'
const API_KEY = '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH'


const UserInfo = () => {

    const [values, setValues] = useState({});
    useEffect(() => {
        const fetchValue = () => {
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
        fetchValue();
        // refresh asset price every minute
       /*  const interval = setInterval(() => fetchAssetValue(), 60000)
        return () => {
          clearInterval(interval);
        } */
    }, [values,setValues]);

    return(
        <div className="Container">
            <div className="Header">
            YOUR INFORMATION
            </div>
            <div className="Details">
            <div>
                Account Name: {values.username}
            </div>
            <div>
                Email:
            </div>
            <div>
                Phone Number:
            </div>
            <div>
                Full Name:
            </div>
            <div>
                Your NRIC: 
            </div>

            </div>


        </div>
    )
}


export default UserInfo;
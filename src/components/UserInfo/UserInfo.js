//gayathri batchu

import axios from 'axios'
import React,  { useEffect, useState, Component } from 'react';

import './UserInfo.css'

const httpUrl = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/login'
const API_KEY = '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH'


const UserInfo = () => {

    const [values, setUserInfo] = useState({});
    useEffect(() => {
        const fetchUserInfo = () => {
           fetch(httpUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                   'x-api-key': API_KEY,
                }
            })
            .then(response => response.json())
            .then(data => setUserInfo({...data}))
            .catch(error => console.log(error))
        }
        fetchUserInfo();
        // refresh asset price every minute
       /*  const interval = setInterval(() => fetchAssetValue(), 60000)
        return () => {
          clearInterval(interval);
        } */
    }, [values,setUserInfo]);

    return(
        <div className="Container">
            <div className="Header">
              YOUR INFORMATION
            </div>
            <div className="Details">
            <div>
                Account Name: Group3
            </div>
            <div>
                Email: group3@techtrek.com
            </div>
            <div>
                Phone Number: (+65) 96453923
            </div>
            <div>
                Full Name: Laurel Keebler
            </div>
            <div>
                NRIC: S35005657H
            </div>
            <div>
                Address: 716 Lynch Inlet
            </div>

            </div>


        </div>
    )
}


export default UserInfo;
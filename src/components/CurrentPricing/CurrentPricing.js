import React,  { useEffect, useState, Component } from 'react';
import axios from 'axios'


const httpUrl = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current';
const API_KEY = '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH';

class CurrentPricing extends Component {

    state = {
        assetSymbol: null,
        price: null,
        timeStamp: null
    }

    componentDidMount () {
        axios.post(httpUrl,
        {headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'x-api-key': API_KEY
        }},)
        .then(response => {
            console.log('hello');
            console.log(response);
            this.setState({
                assetSymbol: response.data.assetSymbol,
                price: response.data.price, 
                timeStamp: response.data.timeStamp
            })
        })

    }

    render (){
        let info = (
            <div>
                <h1>hello</h1>
                <h1>{this.state.assetSymbol}</h1>
            </div>
        );

        return info;
    }

}

export default CurrentPricing
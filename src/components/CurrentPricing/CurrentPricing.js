import React, { Component } from 'react';
import axios from 'Axios'


class CurrentPricing extends Component {
    state = {
        assetSymbol: null,
        price: null,
        timeStamp: null
    }

    componentDidUpdate () {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current',
        {headers: {
            'Content-Type': 'application/json',
            'Authorization': '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH'
        }},)
        .then(response => {
            console.log('hello')
            console.log(response)
            this.setState({

                assetSymbol: response.data.assetSymbol,
                price: response.data.price,
                timeStamp: response.data.timeStamp
            })
        })

    }

    render (){
        post(
            <div>
                <h1>{this.state.assetSymbol}</h1>
            </div>
        )

        return info
    }

}

export default CurrentPricing
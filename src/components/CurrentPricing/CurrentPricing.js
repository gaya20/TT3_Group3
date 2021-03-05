import React, { Component } from 'react';
import axios from 'Axios'


class CurrentPricing extends Component {
    state = {
        assetSymbol: null,
        price: null,
        timeStamp: null
    }

    componenetDidUpdate () {
        axios.post('https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/pricing/current')
        .then(response => {
            this.setState({
                assetSymbol: response.data.assetSymbol,
                price: response.data.price,
                timeStamp: response.data.timeStamp
            })
        })

    }

}

export default CurrentPricing
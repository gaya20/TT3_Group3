import React from 'react'

const BuySellAsset = () => {

    return (
        <div className="Card" style={{ width: "18rem" }} >
            <div className="border border-primary">
                <div className="card-body" >
                    <h5 className="card-title">Buy and Sell Assets</h5>
                    <p className="card-text">Buy or sell any digital asset such as BTC or ETH</p>
                    <button className="btn btn-primary">
                        <a href="/TestPage" class="btn btn-info">
                            Buy/Sell
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BuySellAsset
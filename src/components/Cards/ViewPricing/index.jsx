import React from 'react'

const ViewPricing = () => {
    return (

        <div className="Card" style={{ width: "18rem" }} >
            <div className="border border-primary">
                <div className="card-body" >
                    <h5 className="card-title">View Asset Pricing</h5>
                    <p className="card-text">Check how much your digital assets are worth now</p>
                    <button className="btn btn-primary btn-lg" href="/UserInfo">
                        <a href="/CurrentPricingPage" class="btn btn-info">
                            Buy/Sell
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewPricing

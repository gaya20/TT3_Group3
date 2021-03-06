import React from 'react'

const ViewBalances = () => {
    return (

        <div className="Card" style={{ width: "18rem" }} >
            <div className="border border-primary">
                <div className="card-body" >
                    <h5 className="card-title">View Balance</h5>
                    <p className="card-text">Access your own cash balance and asset balance</p>
                    <button className="btn btn-primary btn-block" href="/UserInfo">
                        <a href="/TestPage" class="btn btn-info">
                            View Balances
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewBalances

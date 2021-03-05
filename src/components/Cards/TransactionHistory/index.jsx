import React from 'react'

const TransactionHistory = () => {
    return (

        <div className="Card" style={{ width: "18rem" }} >
            <div className="border border-primary">
                <div className="card-body" >
                    <h5 className="card-title">Transaction History</h5>
                    <p className="card-text">Stay on top of all your transactions</p>
                    <button className="btn btn-primary" href="/UserInfo">Transaction History</button>
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory

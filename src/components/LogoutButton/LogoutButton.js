import React from 'react'

const LogoutButton = () => {
    return (
        <div className="Card" style={{ width: "18rem" }} >
            <div className="border border-primary">
                <div className="card-body" >
                    <h5 className="card-title">Leaving so soon?</h5>
                    <p className="card-text">Hope you had a wonderful time at the World's Best Bank</p>
                    <button className="btn btn-primary btn-block">
                        <a href="/GoodbyePage" className="btn btn-info">
                            Logout Now
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LogoutButton

import React from 'react'

const UserInfo = () => {
    return (

        <div className="Card" style={{ width: "18rem" }} >
            <div className="border border-primary">
                <div className="card-body" >
                    <h5 className="card-title">User Info</h5>
                    <p className="card-text">Access your personal information</p>
                    <button className="btn btn-primary" href="/UserInfo">
                    <a href="/TestPage" class="btn btn-info">
                            User Info
                     </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserInfo

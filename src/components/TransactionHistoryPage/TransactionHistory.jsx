import React, { Component } from 'react';

class TransactionHistory extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel panel-info">
            <div className="panel-heading">
              <b>Your Transactions History</b>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th># Transaction</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  Bought
                   </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionHistory
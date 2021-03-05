import React,  { useEffect, useState, Component } from 'react';
import axios from 'axios'

const httpUrl = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view';
const API_KEY = '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH';
const ACCOUNT_KEY = 'e049e315-7ec7-483c-b41d-0f37121e2550';

const TransactionsHistory = () => {
    const [values, setValues] = useState({});
    useEffect(() => {
        const fetchData = () => {
           fetch(httpUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                   'x-api-key': API_KEY
                },
                body: JSON.stringify({
                    'accountKey': ACCOUNT_KEY
                }) 
            })
            .then(response => response.json())
            .then(data => setValues({...data}))
            .catch(error => console.log(error))
        }
        fetchData();
    }, [values,setValues]);
    return (
        <div>
            <div>
                Transaction number {values.transactionId}
            </div>
            <div>
                Order Type {values.orderType}
            </div>
            <div>
                Accurate as of {values.timestamp}
            </div>
            <div>
                Asset {values.assetSymbol}
            </div>
            <div>
                Amount {values.assetAmount}
            </div>
            <div>
                Asset Price {values.assetPrice}
            </div>
            <div>
                Cash Amount {values.cashAmount}
            </div>
        </div>
    );
}

{/* 
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
*/}

export default TransactionsHistory
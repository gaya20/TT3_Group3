import React from 'react'
import UserInfo from '../components/Cards/UserInfo'
import BuySellAsset from './Cards/BuySellAsset'
import TransactionHistory from './Cards/TransactionHistory'
import ViewBalances from './Cards/ViewBalances'
import ViewPricing from './Cards/ViewPricing'

const HomePage = () => {
    return (
        <table class ="table">
            <thead>
                <tr>
                    <th scope ="col"><UserInfo></UserInfo></th>
                    <th scope ="col"><BuySellAsset></BuySellAsset></th>
                    <th scope = "col"><ViewBalances></ViewBalances></th>
                </tr>
                <tr>
                    <th scope = "col"><TransactionHistory></TransactionHistory></th>
                    <th scope = "col"><ViewPricing></ViewPricing></th>
                </tr>
            </thead>
        </table>
    )
}

export default HomePage;

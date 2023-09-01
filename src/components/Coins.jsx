import React from 'react';
import Coin from './Coin';
import './Coins.css'

import { Link } from 'react-router-dom';
import CoinPage from './pages/CoinPage';
import Navigation from './Navigation';


const Coins = (props) => {
    return (
        <div className='coins-container'>
            <div className="coins-container-heading">
                <p className='coin-name'>Name</p>
                <p>Last Price</p>
                <p>24h Change</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>
            {props.coins.map(coins => {
                return (
                    <Link to={`/coin/${coins.id}`} element={<><Navigation/><CoinPage/></>} style={{textDecoration: 'none'}} key={coins.id}>
                        <Coin coins={coins} />
                    </Link>
                )
            })}
        </div>
    );
}
 
export default Coins;
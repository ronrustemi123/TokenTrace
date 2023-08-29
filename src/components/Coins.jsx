import React from 'react';
import Coin from './Coin';
import './Coins.css'



const Coins = (props) => {
    return (
        <div className='coins-container'>
            <div className="coins-container-heading">
                <p className='coin-name'>Name</p>
                <p>Last Price</p>
                <p>24h Change</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>
            {props.coins.map(coins => <Coin coins={coins} key={coins.id}/>)}
        </div>
    );
}
 
export default Coins;
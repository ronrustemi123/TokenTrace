import ButtonYellow from './ButtonYellow';
import './CoinBuy.css'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CoinBuy = ({coin}) => {

    const [amount, setAmount] = useState(1)

    const result = amount * (coin.market_data ? (coin.market_data.current_price.usd.toFixed(2)) : null)


    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
          object.target.value = object.target.value.slice(
            0,
            object.target.maxLength
          );
        }
      };

    return (
        <div className="coin-buy">
            <div className="buy-form">
                <h2 className='buy-head'>Buy <span className='symbol-up'>{coin.symbol}</span></h2>
                <div className="buy-input">
                    <p>Buy</p>
                    <input maxLength='8' onInput={e => maxLengthCheck(e)} value={amount} onChange={e => setAmount(e.target.value)}  type="number" name="" id="" placeholder='0.00'/>
                </div>
                <div className="buy-result">
                    <p>{amount} <span className='symbol-up'>{coin.symbol}</span> =</p>
                    <p>USD ${result.toLocaleString()}</p>
                </div>
                <Link to='/signup'>
                    <ButtonYellow width='100%' padding='15px 0' text='Buy' size='19px' weight='500'/>
                </Link>
            </div>
        </div>
    );
}
 
export default CoinBuy;
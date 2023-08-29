import './Coin.css'
import React, { useState, useEffect} from 'react';


const Coin = (props) => {

    const [color, setColor] = useState('')

    useEffect(() => {
        if(props.coins.price_change_percentage_24h < 0) {
            setColor('red')
        }else {
            setColor('rgb(14, 203, 129)')
        }
    }, [props.coins.price_change_percentage_24h])

    return (
        <div className="coin-item col">
            <div className="coin-name">
                <img src={props.coins.image} alt="" />
                <p>{props.coins.name}</p>
                <p className='symbol'>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <div className="col col2">
                <p>${props.coins.current_price.toLocaleString()}</p>
            </div>
            <div className="col col2">
                <p style={{color}}>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div className="col hide-mobile">
                <p>${props.coins.market_cap.toLocaleString()}</p>
            </div>
        </div>
    );
}
 
export default Coin;
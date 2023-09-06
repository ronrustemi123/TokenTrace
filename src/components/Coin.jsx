import './Coin.css'
import React, { useState, useEffect} from 'react';


const Coin = (props) => {

    const [color, setColor] = useState('')
    const [plus, setPlus] = useState('');

    useEffect(() => {
        if(props.coins.price_change_percentage_24h < 0) {
            setColor('rgb(246, 70, 93)')
            setPlus('')
        }else {
            setColor('rgb(14, 203, 129)')
            setPlus('+')
        }
    }, [props.coins.price_change_percentage_24h])

    return (
        <div className="coin-item col">
            <div className="coin-name">
                <img height={32} width={32} src={props.coins.image} alt="" />
                <p>{props.coins.name}</p>
                <p className='symbol'>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <div className="col col2 barlow">
                <p>${props.coins.current_price.toLocaleString()}</p>
            </div>
            <div className="col col2 barlow">
                <p style={{color}}>{plus}{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            </div>
            <div className="col hide-mobile barlow">
                <p>${props.coins.market_cap.toLocaleString()}</p>
            </div>
        </div>
    );
}
 
export default Coin;
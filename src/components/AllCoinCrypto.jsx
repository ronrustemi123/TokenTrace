import './AllCoinCrypto.css'

import React, { useState, useEffect } from 'react';


const AllCoinCrypto = ({coins}) => {


    const [color, setColor] = useState('');
    const [plus, setPlus] = useState('');


    const [fill, setFill] = useState('regular');

    const handleFavClick = (e) => {
        e.preventDefault(); 

        if(fill === 'regular') {
            setFill('solid')
        }else {
            setFill('regular')
        }        
    }
   
    useEffect(() => {
        if(coins.price_change_percentage_24h < 0) {
            setColor('rgb(246, 70, 93)')
            setPlus('')
        }else {
            setColor('rgb(14, 203, 129)')
            setPlus('+')
        }
    }, [coins.price_change_percentage_24h])

    return (
        <div className="all-coin-crypto">
            <div className="all-coin-crypto-name">
                <img className='coin-icon' src={coins.image} alt="coin_icon" />
                <div className='name-mobile-div'>
                    <h2 className='coin-symbol'>{coins.symbol}</h2>
                    <p>{coins.name}</p>
                </div>
            </div>
            <div className="all-coin-crypto-price coin-contents">
                <h2 className='coin-price'>${coins.current_price.toLocaleString()}</h2>
            </div>
            <div className="all-coin-crypto-change coin-contents">
                <h2 style={{color: color}} className='coin-change'>{plus}{coins.price_change_percentage_24h.toFixed(2)}%</h2>
            </div>
            <div className="all-coin-crypto-cap coin-contents all-coin-hide-mobile">
                <h2 className='coin-volume'>${coins.market_cap.toLocaleString()}</h2>
            </div>
            <div onClick={e => handleFavClick(e)} className="all-coin-crypto-fav coin-contents">
                <h2 className='coin-fav'><i className={`fa-${fill} fa-star`}></i></h2>
            </div>
        </div>
    );
}
 
export default AllCoinCrypto;
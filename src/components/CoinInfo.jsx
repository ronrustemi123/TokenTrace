import './CoinInfo.css'
import SectionHeader from './SectionHeader';
import DOMPurify from 'dompurify';

import React, { useState } from 'react';


const CoinInfo = ({coin}) => {

    const [overflow, setOverflow] = useState('hidden')
    const [display, setDisplay] = useState('block')
    const [height, setHeight] = useState('30%')
    const [pos, setPos] = useState('0')
    const [text, setText] = useState('More')

    const handleClick = () => {
        if(overflow === 'hidden' && display === 'block') {
            setOverflow('visible');
            setDisplay('none');
            setHeight('auto');
            setPos('-15px')
            setText('Less')
        }else {
            setOverflow('hidden');
            setDisplay('block');
            setHeight('50vh');
            setPos('0');
            setText('More')
        }
    }

    return (
        <div className="coin-info">
            <div className="coin-heading-info">
                <div className="coin-page-name">
                    {coin.image ? <img src={coin.image.small} alt="coin-img" /> : null}
                    <SectionHeader text={`${coin.name} Price`}/>
                    <p>({coin.symbol})</p>
                </div>
                {coin.market_data ? <h1 className='current_price'>$ {coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
            <div className="coin-table-data">
                <table>
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1y</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}%</p>: null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%</p>: null}</td>
                            <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)}%</p>: null}</td>
                            <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)}%</p>: null}</td>
                            <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)}%</p>: null}</td>
                            <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%</p>: null}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="coin-other-data">
                <div className="left-data">
                    {coin.market_data ? <h2>24 Hour Low <p>${coin.market_data.low_24h.usd.toLocaleString()}</p></h2> : null}
                    {coin.market_data ? <h2>24 Hour High <p>${coin.market_data.high_24h.usd.toLocaleString()}</p></h2> : null}
                </div>
                <div className="right-data">
                    {coin.market_data ? <h2>Market Cap <p>${coin.market_data.market_cap.usd.toLocaleString()}</p></h2> : null}
                    {coin.market_data ? <h2>Circulating Supply <p>{coin.market_data.circulating_supply.toFixed()}</p></h2> : null}
                </div>
            </div>
            <h2 className='about-coin-head'>About {coin.name}</h2>
            <div style={{overflow: overflow, height: height}} className="about-coin">
                
                <p className='about-coin-text' dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(coin.description ? coin.description.en: ''),
                }}>
                
                </p>
                <div style={{display: display}} className="text-hide">
                    
                </div>
                <div onClick={handleClick} style={{bottom: pos}} className="view-more"><p>View {text}</p></div>
            </div>
           
        </div>
    );
}
 
export default CoinInfo;